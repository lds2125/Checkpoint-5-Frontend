// pages/news/[id].tsx
import { GetServerSideProps } from "next";
import Link from "next/link";
import { NewsItem, newsData } from "../api/newsData";

interface NewsProps {
  news: NewsItem | null;
}

const NewsPage: React.FC<NewsProps> = ({ news }) => {
  if (!news) {
    return (
      <div className="container mx-auto p-4 flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">404 - Achei nada não :(</h1>
        <Link href="/" passHref>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Voltar para a Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center h-screen">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
        <p className="text-gray-600 mb-4">{news.date}</p>
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-auto mb-4 rounded-md"
        />
        <p className="text-gray-800 mb-6">{news.content}</p>
        <Link href="/" passHref>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Voltar para a Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params || {};

  const news = newsData.find((item) => item.id.toString() === id);

  if (!news) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      news: news || null,
    },
  };
};

export default NewsPage;
