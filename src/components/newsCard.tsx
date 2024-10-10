// components/NewsCard.tsx
import React from "react";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string;
  image: string;
  categories: string[];
}

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={news.image} alt={news.title} className="rounded-lg mb-4" />
      <h2 className="text-xl font-semibold">{news.title}</h2>
      <p className="text-gray-600 text-sm mb-2">{news.date}</p>
      <p className="text-gray-800 mb-4">
        {news.content.length > 50 ? `${news.content.slice(0, 50)}...` : news.content}
      </p>
      <p className="text-gray-500 text-sm mb-2">
        Categorias: {news.categories.join(", ")}
      </p>
      <Link href={`/news/${news.id}`} className="text-blue-500">
        Ler mais
      </Link>
    </div>
  );
};

export default NewsCard;
