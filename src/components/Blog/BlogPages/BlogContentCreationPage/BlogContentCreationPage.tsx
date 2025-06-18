import { useState } from "react";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragOverlay } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import BlogNavBar from "../../BlogComponents/BlogNavBar/BlogNavBar.tsx";
import BlogFooter from "../../BlogComponents/BlogFooter/BlogFooter.tsx";
import DarkMode from "../../../UTILS/DarkMode.tsx";
import TitleTag from "../../../UTILS/TitleTag.tsx";

type Block = {
    id: number | string;
    type: string;
    value?: string;
    speaker?: string;
    caption?: string;
    alt?: string;
    url?: string;
    items?: { id: string; value: string }[];
};

function SortableItem({ id, children, onRemove }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    const handleRemoveClick = (e) => {
        e.stopPropagation();
        onRemove(id);
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            className="relative border border-gray-300 dark:border-gray-600 p-4 rounded-lg bg-white dark:bg-gray-800"
        >
            <div {...listeners} className="cursor-grab mb-2 text-gray-400 text-sm italic">
                Drag ↕
            </div>

            {children}

            <button
                onClick={handleRemoveClick}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-lg"
            >
                &times;
            </button>
        </div>
    );
}

function SortableListItem({ id, value, onChange, onRemove }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded p-2"
        >
            <div {...listeners} className="cursor-grab text-gray-400">⋮⋮</div>
            <input
                className="input flex-1"
                value={value}
                onChange={onChange}
            />
            <button
                onClick={onRemove}
                className="ml-2 flex items-center justify-center w-6 h-6 rounded-full bg-red-600 hover:bg-red-700 text-white transition shadow-sm hover:shadow-md"
                aria-label={`Remove ${value}`}
                type="button"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
}

function BlogContentCreationPage({ darkMode, toggleDarkMode }) {
    TitleTag("Content Creation - The Pedro Post | ");

    const [blocks, setBlocks] = useState<Block[]>([]);
    const [activeId, setActiveId] = useState(null);
    const generateId = () =>
        Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    const [tags, setTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState("");


    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );

    const addBlock = (type) => {
        setBlocks((prev) => [
            ...prev,
            {
                id: Date.now() + Math.random(),
                type,
                items: type === "list" ? [{ id: generateId(), value: "" }] : undefined,
            },
        ]);
    };

    const removeBlock = (id) => {
        setBlocks((prev) => prev.filter((block) => block.id !== id));
    };

    const updateBlockValue = (blockId: number | string, newValue: string) => {
        setBlocks((prev) =>
            prev.map((b) => (b.id === blockId ? { ...b, value: newValue } : b))
        );
    };

    const updateBlockField = (
        blockId: number | string,
        field: keyof Block,
        newValue: string
    ) => {
        setBlocks((prev) =>
            prev.map((b) =>
                b.id === blockId ? { ...b, [field]: newValue } : b
            )
        );
    };

    const handleDragStart = (event) => {
        setActiveId(event.active.id);
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            const oldIndex = blocks.findIndex((b) => b.id === active.id);
            const newIndex = blocks.findIndex((b) => b.id === over?.id);
            setBlocks((items) => arrayMove(items, oldIndex, newIndex));
        }
        setActiveId(null);
    };

    const handleListDragEnd = (blockId: number | string) => (event) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        setBlocks(prev =>
            prev.map((b) => {
                if (b.id !== blockId || !b.items) return b;
                const oldIndex = b.items.findIndex((item) => item.id === active.id);
                const newIndex = b.items.findIndex((item) => item.id === over.id);
                return {
                    ...b,
                    items: arrayMove(b.items, oldIndex, newIndex),
                };
            })
        );
    };

    const addListItem = (blockId: number | string) => {
        setBlocks((prev) =>
            prev.map((b) =>
                b.id === blockId
                    ? { ...b, items: [...(b.items || []), { id: generateId(), value: "" }] }
                    : b
            )
        );
    };

    const updateListItem = (blockId: number | string, itemId: string, value: string) => {
        setBlocks(prev =>
            prev.map(b =>
                b.id === blockId
                    ? {
                        ...b,
                        items: b.items?.map((item) => item.id === itemId ? { ...item, value } : item),
                    }
                    : b
            )
        );
    };

    const removeListItem = (blockId: number | string, itemId: string) => {
        setBlocks(prev =>
            prev.map(b =>
                b.id === blockId
                    ? { ...b, items: b.items?.filter((item) => item.id !== itemId) }
                    : b
            )
        );
    };

    const addTag = () => {
        const newTag = tagInput.trim();
        if (newTag && !tags.includes(newTag)) {
            setTags([...tags, newTag]);
        }
        setTagInput("");
    };

    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addTag();
        }
    };

    const renderBlock = (block) => {
        switch (block.type) {
            case "title":
                return (
                    <input
                        type="text"
                        placeholder="Title"
                        value={block.value || ""}
                        onChange={(e) => updateBlockValue(block.id, e.target.value)}
                        className="input w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 text-lg font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f09a36] transition"
                    />
                );

            case "sectionTitle":
                return (
                    <input
                        type="text"
                        placeholder="Section Title"
                        value={block.value || ""}
                        onChange={(e) => updateBlockValue(block.id, e.target.value)}
                        className="input w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 font-bold text-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f09a36] transition"
                    />
                );

            case "subtitle":
                return (
                    <input
                        type="text"
                        placeholder="Subtitle"
                        value={block.value || ""}
                        onChange={(e) => updateBlockValue(block.id, e.target.value)}
                        className="input w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 italic text-gray-600 dark:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f09a36] transition"
                    />
                );

            case "text":
                return (
                    <textarea
                        rows={4}
                        placeholder="Text paragraph"
                        value={block.value || ""}
                        onChange={(e) => updateBlockValue(block.id, e.target.value)}
                        className="input w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 resize-y shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f09a36] transition"
                    />
                );

            case "image":
                return (
                    <div className="space-y-3">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        const base64 = reader.result?.toString() || "";
                                        updateBlockValue(block.id, base64);
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }}
                            className="block w-full text-gray-700 dark:text-gray-300 rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#f09a36] transition"
                        />
                        {block.value && (
                            <img
                                src={block.value}
                                alt={block.alt || "Uploaded"}
                                className="max-w-full rounded shadow"
                            />
                        )}
                        <input
                            type="text"
                            placeholder="Caption (optional)"
                            value={block.caption || ""}
                            onChange={(e) => updateBlockField(block.id, "caption", e.target.value)}
                            className="input w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f09a36] transition"
                        />
                        <input
                            type="text"
                            placeholder="Alt text"
                            value={block.alt || ""}
                            onChange={(e) => updateBlockField(block.id, "alt", e.target.value)}
                            className="input w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f09a36] transition"
                        />
                    </div>
                );

            case "quote":
                return (
                    <div className="space-y-3">
                        <textarea
                            placeholder="Quote text"
                            value={block.value || ""}
                            onChange={(e) => updateBlockValue(block.id, e.target.value)}
                            className="input italic border-l-4 border-[#f09a36] w-full rounded-md px-4 py-3 bg-yellow-50 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f09a36] transition"
                        />
                        <input
                            type="text"
                            placeholder="Speaker"
                            value={block.speaker || ""}
                            onChange={(e) => updateBlockField(block.id, "speaker", e.target.value)}
                            className="input w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f09a36] transition"
                        />
                    </div>
                );

            case "list":
                return (
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragEnd={handleListDragEnd(block.id)}
                    >
                        <SortableContext
                            items={block.items?.map(item => item.id) || []}
                            strategy={verticalListSortingStrategy}
                        >
                            {(block.items || []).map((item) => (
                                <SortableListItem
                                    key={item.id}
                                    id={item.id}
                                    value={item.value}
                                    onChange={(e) => updateListItem(block.id, item.id, e.target.value)}
                                    onRemove={() => removeListItem(block.id, item.id)}
                                />
                            ))}
                        </SortableContext>
                        <button
                            onClick={() => addListItem(block.id)}
                            className="mt-2 rounded bg-[#f09a36] px-4 py-2 text-white hover:bg-[#db8229] transition"
                        >
                            + Add list item
                        </button>
                    </DndContext>
                );

            default:
                return <div>Unknown block type</div>;
        }
    };

    const activeBlock = blocks.find((b) => b.id === activeId);

    const blockTypes = [
        { label: "Title", type: "title" },
        { label: "Section Title", type: "sectionTitle" },
        { label: "Subtitle", type: "subtitle" },
        { label: "Text Paragraph", type: "text" },
        { label: "Image", type: "image" },
        { label: "Quote", type: "quote" },
        { label: "Code Block", type: "code" },
        { label: "Embedded Media", type: "media" },
        { label: "List", type: "list" },
    ];

    const [selectedType, setSelectedType] = useState("text");

    function downloadAsJSON() {
        const titleBlock = blocks.find(
            (block) => block.type === "title" && block.value?.trim()
        );
        if (!titleBlock || !titleBlock.value) {
            alert("Please add a title block with a value before downloading.");
            return;
        }

        for (const block of blocks) {
            if (block.type === "list") {
                const hasEmptyItem = (block.items || []).some(
                    (item) => !item.value || !item.value.trim()
                );
                if (hasEmptyItem) {
                    alert("Please make sure all list items have a value before downloading.");
                    return;
                }
            }
        }

        const fileName = `${titleBlock.value.trim()}.json`;
        const exportData = {
            blocks,
            tags,
        };

        const jsonStr = JSON.stringify(exportData, null, 2);
        const blob = new Blob([jsonStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);
    }

    return (
        <div className="relative bg-[#f4f4f9] dark:bg-[#111827] text-black dark:text-white transition-colors duration-300">
            <BlogNavBar />

            <div className="bg-[#f4f4f9] dark:bg-[#111827] text-gray-800 dark:text-white h-auto pt-14 pb-14 px-4 md:px-14 transition-colors duration-300">
                <div className="w-[75%] min-h-[60vh] m-auto pt-10">
                    <h2 className="w-full m-auto text-xl md:text-3xl lg:text-[35px] text-[#f09a36] text-center font-bold border-b-[3px] border-solid border-b-[#f09a36] pb-2 mb-5">
                        CREATE AN ARTICLE
                    </h2>

                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext items={blocks.map((b) => b.id)} strategy={verticalListSortingStrategy}>
                            <div className="space-y-4">
                                {blocks.map((block) => (
                                    <SortableItem key={block.id} id={block.id} onRemove={removeBlock}>
                                        {renderBlock(block)}
                                    </SortableItem>
                                ))}
                            </div>
                        </SortableContext>

                        <DragOverlay>
                            {activeBlock && (
                                <div className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg bg-white dark:bg-gray-800 w-full max-w-[700px] opacity-90">
                                    <div className="cursor-grab mb-2 text-gray-400 text-sm italic">Drag ↕</div>
                                    {renderBlock(activeBlock)}
                                </div>
                            )}
                        </DragOverlay>
                    </DndContext>

                    <div className="block justify-center mt-10 px-4">
                        <div className="flex flex-col bg-white dark:bg-gray-900 px-8 py-6 rounded-t-2xl shadow-lg border border-gray-300 dark:border-gray-700 max-w-3xl w-full mx-auto">
                            <label className="block mb-5 text-lg font-semibold text-gray-800 dark:text-gray-200">
                                Tags:
                            </label>
                            <div className="flex flex-wrap gap-3 mb-5">
                                {tags.map((tag) => (
                                    <div
                                        key={tag}
                                        className="flex items-center bg-[#f09a36] text-white rounded-full px-4 py-1.5 text-sm font-medium select-none"
                                    >
                                        {tag}
                                        <button
                                            onClick={() => removeTag(tag)}
                                            className="ml-3 flex items-center justify-center w-6 h-6 rounded-full bg-red-600 hover:bg-red-700 text-white transition-shadow shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
                                            aria-label={`Remove tag ${tag}`}
                                            type="button"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-3.5 h-3.5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    value={tagInput}
                                    onChange={(e) => setTagInput(e.target.value)}
                                    onKeyDown={handleTagInputKeyDown}
                                    placeholder="Add tag and press Enter"
                                    className="flex-grow rounded-lg border border-gray-300 dark:border-gray-600 px-5 py-3 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f09a36] transition"
                                />
                                <button
                                    onClick={addTag}
                                    className="bg-[#f09a36] hover:bg-[#d9822f] text-white rounded-lg px-6 py-3 font-semibold transition-shadow shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#d9822f]"
                                    type="button"
                                >
                                    Add
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 bg-white dark:bg-gray-900 px-6 py-5 rounded-b-2xl shadow-lg border border-gray-300 dark:border-gray-700 max-w-3xl w-full ml-auto mr-auto">
                            <label
                                htmlFor="block-select"
                                className="text-sm font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap ml-auto"
                            >
                                Choose a block:
                            </label>

                            <select
                                id="block-select"
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="w-full sm:w-48 px-4 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f09a36] transition-all duration-300"
                            >
                                {blockTypes.map((bt) => (
                                    <option key={bt.type} value={bt.type}>
                                        {bt.label}
                                    </option>
                                ))}
                            </select>

                            <button
                                onClick={() => addBlock(selectedType)}
                                className="flex items-center gap-2 px-5 py-2 text-sm font-semibold bg-[#f09a36] hover:bg-[#d9822f] text-white rounded-lg shadow-md transition"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                                Add Block
                            </button>

                            <button
                                onClick={downloadAsJSON}
                                className="mt-3 sm:mt-0 px-5 py-2 text-sm font-semibold bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-md transition mr-auto"
                            >
                                Download as JSON
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <BlogFooter />
            <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
    );
}

export default BlogContentCreationPage;
