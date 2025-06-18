import { useEffect } from 'react';

function TitleTag(pageTitle) {
    useEffect(() => {
        document.title = `${pageTitle}Pedro A. Pajarillo Jr.`;
    }, [pageTitle]);
}

export default TitleTag;
