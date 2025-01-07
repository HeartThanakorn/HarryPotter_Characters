import React, { useState } from "react";

interface SearchFormProps {
  onSearch: (keyword: string) => void; // ฟังก์ชันที่รับคำค้นหาไปยัง parent component
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = () => {
    onSearch(searchKeyword); // ส่งคำค้นหากลับไปยัง parent component
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        placeholder="Search Characters"
        className="w-full max-w-[400px] px-4 py-2 border border-gray-300 rounded-l-md"
      />
      <button
        onClick={handleSearch}
        className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;