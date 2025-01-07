import React from "react";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

interface NavbarProps {
  onSearch?: (keyword: string) => void; // Optional prop สำหรับฟังก์ชันค้นหา
  showSearch?: boolean; // Optional prop สำหรับควบคุมการแสดง SearchForm
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, showSearch = true }) => {
  return (
    <nav className="bg-pink-200 text-black py-2 px-6 shadow-md flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center justify-center h-full">
        <img
          src="/images/Harry_Potter_logo.png"
          alt="Logo"
          className="max-h-[80px]"
        />
      </div>

      {/* Search Bar */}
      {showSearch && onSearch && (
        <div>
          <SearchForm onSearch={onSearch} />
        </div>
      )}

      {/* Right Section */}
      <div className="flex items-center space-x-6 text-lg font-semibold">
        <Link to={`/`}>
          <span className="hover:underline cursor-pointer">Home</span>
        </Link>
        <Link to={`/favorite`}>
          <span className="hover:underline cursor-pointer">Favorite</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;