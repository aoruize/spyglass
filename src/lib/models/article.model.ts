export default interface Article {
    /** The title of the article */
    title: string;
    /** The image alt text or a shortened version of the title. */
    shortTitle: string;
    /** The URL to read the article. */
    articleUrl: string;
    /** The image source URL. */
    imgUrl: string;
    date: string;
    archived?: boolean;
}