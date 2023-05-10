import React, { useState } from "react";
import GmailLogo from "../images/Gmail_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faTableCells } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

function FilterBox() {
  return (
    <div className="absolute z-20 h-[200px] w-[800px] bg-white p-6 text-gray-600 flex-col top-12 rounded-lg border-b-2 border-x-2 left-12 text-opacity-70 shadow-lg">
      <span className="inline-block w-12">From</span>
      <input
        type="text"
        className="w-[500px] border-t-0 border-r-0 border-l-0 border-b-[1px] outline-none focus:border-blue-400"
      />
      <br />
      <span className="inline-block w-12 mt-4">To</span>
      <input
        type="text"
        className="w-[500px] border-t-0 border-r-0 border-l-0 border-b-[1px] outline-none focus:border-blue-400"
      />
      <button className="block mt-12 ml-auto bg-blue-600 text-white px-4 py-2 rounded-md">
        Send
      </button>
    </div>
  );
}

function Header(props) {
  const [ShowFilters, setShowFilters] = useState(false);

  const handleToggle = () => {
    setShowFilters(!ShowFilters);
  };

  return (
    <>
      <header className="flex items-center p-3 ml-5 mr-5">
        <div className="cursor-pointer mr-3" onClick={() => props.onButtonClick()}>
          <svg width="20" height="20" className="opacity-60">
            <rect width="20" height="3"></rect>
            <rect y="7" width="20" height="3"></rect>
            <rect y="14" width="20" height="3"></rect>
          </svg>
        </div>

        <div className="logo flex items-center ml-4 cursor-pointer">
          <img src={GmailLogo} alt="Gmail Logo" className="w-11 m-2" />
          <h3 className="text-2xl">Gmail</h3>
        </div>

        <div className="relative">
          <input
            type="text"
            name="search"
            placeholder="Search mail"
            className="w-[800px] h-12 opacity-40 rounded-xl ml-12 pl-12 py-2 outline-none bg-blue-300 bg-opacity-40 placeholder-black"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="opacity-70 text-xl absolute top-3 left-16 cursor-pointer "
          />

          <FontAwesomeIcon
            onClick={handleToggle}
            icon={faSliders}
            className="opacity-70 text-xl p-2 absolute top-1 right-6 cursor-pointer"
          />
          {ShowFilters && <FilterBox />}
        </div>
        <div className="text-2xl ml-auto">
          <FontAwesomeIcon
            onClick={() => props.onButtonClickS()}
            icon={faGear}
            className="p-2 mr-3 cursor-pointer opacity-70"
          />
          <FontAwesomeIcon
            icon={faTableCells}
            className="p-2 mr-3 cursor-pointer opacity-70"
          />
          <FontAwesomeIcon
            icon={faUserPlus}
            className="p-2 cursor-pointer opacity-70"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
