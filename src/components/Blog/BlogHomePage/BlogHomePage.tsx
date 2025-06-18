import BlogNavBar from "../BlogComponents/BlogNavBar/BlogNavBar.tsx";
import BlogFooter from "../BlogComponents/BlogFooter/BlogFooter.tsx";

import BlogHomePageHeader from "../BlogHomePageComponents/BlogHomePageHeader/BlogHomePageHeader.tsx";
import BlogHomePageContent from "../BlogHomePageComponents/BlogHomePageContent/BlogHomePageContent.tsx";

import DarkMode from "../../UTILS/DarkMode.tsx";
import TitleTag from "../../UTILS/TitleTag.tsx";

function BlogHomePage({ darkMode, toggleDarkMode }) {
  TitleTag("The Pedro Post | ");

  return (
    <div className="relative bg-[#f4f4f9] dark:bg-[#111827] min-h-screen text-black dark:text-white transition-colors duration-300">
      <BlogNavBar />
      <BlogHomePageHeader />
      <BlogHomePageContent />
      <BlogFooter />

      <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default BlogHomePage;
