import { Article } from "../interfaces/article.interface";

export default function getArticles() {
  const articles: Article[] = [
    {
      title: "Test",
      content: "This is a test article.",
    },
    {
      title: "Test_2",
      content: "This is another test.",
    },
  ];

  return articles;
}
