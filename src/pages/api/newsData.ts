// src/pages/api/newsData.ts

import type { NextApiRequest, NextApiResponse } from "next";

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string;
  image: string;
  categories: string[];
  comments: Comment[];
}

export interface Comment {
  name: string;
  text: string;
}

const newsData: NewsItem[] = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  title: `Notícia ${index + 1}`,
  date: `2024-10-${(index % 31) + 1}`,
  content: `Conteúdo da notícia ${index + 1}...`,
  image: `/images/news${(index % 6) + 1}.jpg`, // usando 6 imagens diferentes
  categories: [`Categoria ${index % 3}`, `Categoria ${index % 2}`],
  comments: [
    { name: `User ${index + 1}`, text: "Comentário interessante!" },
    { name: `User ${index + 2}`, text: "Muito bom." },
  ],
}));

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(newsData);
}

export { newsData };
