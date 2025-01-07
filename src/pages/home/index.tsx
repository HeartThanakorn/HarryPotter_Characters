import { useEffect, useState } from "react";
import HarrypotterCard from "../../components/HarrypotterCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { harrypotterListServices } from "../../services/harrypotterList";
import { IHarrypotterListItem } from "../../interface/harrypotterList";
import PaginationControls from "../../components/PaginationControls";

const HomePage = () => {
  const [characters, setCharacters] = useState<IHarrypotterListItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const fetchCharacters = async (page: number, keyword: string = "") => {
    setIsLoading(true);
    const response = await harrypotterListServices.getHarrypotterList(20, page, keyword);
    if (response.status === 200) {
      setCharacters(response.data?.data || []);
      // Dynamically calculate total pages based on API response
      const totalItems = response.data?.meta.pagination.records || 0;
      const itemsPerPage = 20; // Assuming 20 items per page
      setTotalPages(Math.ceil(totalItems / itemsPerPage));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCharacters(currentPage, searchKeyword);
  }, [currentPage, searchKeyword]);

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword); // อัปเดตคำค้นหา
    fetchCharacters(1, keyword); // รีเซ็ตไปที่หน้าแรกเมื่อทำการค้นหา
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchCharacters(nextPage, searchKeyword);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      fetchCharacters(prevPage, searchKeyword);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Navbar onSearch={handleSearch} />
  
      {/* Main Content */}
      <div className="flex-grow w-[90%] mx-auto max-w-[1100px]">
        {isLoading ? (
          <div className="flex justify-center mt-10">
            <span className="text-lg">Loading...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-[20px] mt-[40px]">
            {characters.map((item) => (
              <HarrypotterCard key={item.id} data={item} />
            ))}
          </div>
        )}
  
        {/* ใช้ PaginationControls */}
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
        />
      </div>
  
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;