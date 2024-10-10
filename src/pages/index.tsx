import { useState, useEffect } from "react";
import NewsCard from "@/components/newsCard";
import Pagination from "@/components/pagination";
import SearchBar from "@/components/searchBar";
import { NewsItem } from "./api/newsData";
import Footer from "@/components/footer";

const HomePage = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 10;

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch("/api/newsData");
      const data = await res.json();
      setNews(data);
      setFilteredNews(data);
    };
    fetchNews();
  }, []);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);

  const handleSearch = (searchTerm: string) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = news.filter((item) =>
      item.title.toLowerCase().includes(lowercasedTerm) ||
      item.content.toLowerCase().includes(lowercasedTerm) ||
      item.categories.some((cat) => cat.toLowerCase().includes(lowercasedTerm))
    );
    setFilteredNews(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bem vindo ao Portal de Notícias</h1>
      <SearchBar onSearch={handleSearch} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {currentNews.length > 0 ? (
          currentNews.map((item) => <NewsCard key={item.id} news={item} />)
        ) : (
          <p>Nenhum artigo encontrado</p>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredNews.length / newsPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
