import Proptypes from "prop-types";
import { useState } from "react";

function Header({ onSearch }) {
  const [textSearch, setTextSearch] = useState("");
  return (
    <>
      <div className="p-4 bg-black flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-[40px] uppercase font-bold text-red-700">
            Movie
          </h1>
          <nav className="flex items-center space-x-4">
            <a href="#" className="text-white">
              Trang chủ
            </a>
            <a href="#" className="text-white">
              Giới thiệu
            </a>
            <a href="#" className="text-white">
              Liên hệ
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="p-4 text-black"
            onChange={(e) => setTextSearch(e.target.value)}
            value={textSearch}
          />
          <button
            className="p-2 text-white bg-red-600"
            onClick={() => onSearch(textSearch)}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

Header.propTypes = {
  onSearch: Proptypes.func,
};
export default Header;
