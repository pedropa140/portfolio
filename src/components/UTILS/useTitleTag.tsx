import { useEffect } from 'react';

function useTitleTag(pageTitle) {
    useEffect(() => {
        document.title = `${pageTitle}Pedro A. Pajarillo Jr.`;
    }, [pageTitle]);
}

export default useTitleTag;
