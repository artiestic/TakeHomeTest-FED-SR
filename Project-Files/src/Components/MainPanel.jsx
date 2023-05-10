import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'

function MainPanel(props) {
  const [selectedDiv, setSelectedDiv] = useState(1);
  const handleDivClick = (divIndex) => {
    setSelectedDiv(divIndex);
  }
  const divStyles = (index) => {
    let baseStyles = 'w-64 h-12 p-4 mr-2 flex items-center cursor-pointer hover:bg-gray-100';
    if (selectedDiv === index) {
      return `${baseStyles} text-blue-600 border-b-2 border-blue-600`;
    }
    else {
      return `${baseStyles} text-black border-0`;
    }
  }
  return (

    <div className='relative w-full ml-2 px-4 py-6 rounded-xl bg-white'>
      <ul className='flex'>
        <li  className={divStyles(1)} onClick={() => handleDivClick(1)}><FontAwesomeIcon className='mx-2' icon={faInbox} />Primary</li>
        <li className={divStyles(2)} onClick={() => handleDivClick(2)}><FontAwesomeIcon className='mx-2' icon={faTag} />Promotions</li>
        <li className={divStyles(3)} onClick={() => handleDivClick(3)}><FontAwesomeIcon className='mx-2' icon={faUserGroup} />Social</li>
      </ul>
      <div className={`${props.isClicked?"absolute":"hidden"} w-[300px] h-[500px] top-[-10px] right-5 px-3 py-4 shadow-xl bg-white`}>
        <h3 className='text-center'>Settings</h3>
      </div>
    </div>
  )
}

export default MainPanel