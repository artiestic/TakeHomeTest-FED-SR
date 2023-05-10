import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPen } from "@fortawesome/free-solid-svg-icons";

function SideBar(props) {
  const extendSideBar = `w-[250px] rounded-sm items-baseline pl-4 overflow-hidden shadow-xl`;
  const baseStyle = `side-bar relative h-screen ${props.isClicked?extendSideBar:'w-[80px]' }  flex flex-col items-center transition-all ease-in-out hover:w-[250px] hover:rounded-sm  hover:items-baseline hover:pl-4 overflow-hidden hover:shadow-xl`
  return (
    <div className={baseStyle}>
      <div className={`pen-parent cursor-pointer absolute top-2 left-3 w-fit flex items-center ${props.isClicked?'bg-blue-300':'bg-blue-0'} rounded-xl pr-4 pl-2`}>
        <FontAwesomeIcon
          icon={faPen}
          className="pen-icon block text-[24px] py-3 px-3 bg-opacity-50 rounded-xl bg-blue-300 text-gray-700"
        />
        <p className="ml-4">Compose</p>
      </div>
      <div className="mail-parent cursor-pointer absolute top-16 left-4 w-fit flex items-center pr-4 pl-2 rounded-xl">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="mail-icon block text-[24px] py-2 px-2 bg-gray-200 rounded-xl"
        />
        <p className="ml-5">Inbox</p>
      </div>
    </div>
  );
}

export default SideBar;
