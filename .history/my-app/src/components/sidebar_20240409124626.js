import React, { useState } from 'react';

const Sidebar = () => {
  const [isOsUploadVisible, setIsOsUploadVisible] = useState(false);
  const [isDbmsUploadVisible, setIsDbmsUploadVisible] = useState(false);

  const toggleOsUpload = () => {
    setIsOsUploadVisible(!isOsUploadVisible);
    setIsDbmsUploadVisible(false);
  };

  const toggleDbmsUpload = () => {
    setIsDbmsUploadVisible(!isDbmsUploadVisible);
    setIsOsUploadVisible(false);
  };

  

  return ( 
    <>
      <aside className="bg-gray-800 text-white h-screen w-64 fixed top-0 left-0 overflow-y-auto md:relative md:h-auto md:w-auto">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4 md:hidden">Subjects</h2>
          <ul className="md:ml-4">
            {/* Subject 1: Operating Systems */}
            <li className="py-2">
              <button onClick={toggleOsUpload} className="flex items-center w-full justify-between px-4 py-2 bg-gray-700 rounded-lg focus:outline-none hover:bg-gray-600 transition-colors duration-300">
                <span className="text-lg">Operating Systems</span>
                <svg className={`w-4 h-4 fill-current ${isOsUploadVisible && 'transform rotate-180'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M7 10l5 5m0 0l5-5m-5 5V5"></path>
                </svg>
              </button>
              {/* Upload section for OS */}
              {isOsUploadVisible && (
                <div className="mt-2">
                  <label htmlFor="os-upload" className="block mb-2">Choose File or Video:</label>
                  <input type="file" id="os-upload" className="mt-2" />
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 transition-colors duration-300">Upload</button>
                </div>
              )}
            </li>
            {/* Subject 2: Database Management Systems */}
            <li className="py-2">
              <button onClick={toggleDbmsUpload} className="flex items-center w-full justify-between px-4 py-2 bg-gray-700 rounded-lg focus:outline-none hover:bg-gray-600 transition-colors duration-300">
                <span className="text-lg">Database Management Systems</span>
                <svg className={`w-4 h-4 fill-current ${isDbmsUploadVisible && 'transform rotate-180'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M7 10l5 5m0 0l5-5m-5 5V5"></path>
                </svg>
              </button>
              {/* Upload section for DBMS */}
              {isDbmsUploadVisible && (
                <div className="mt-2">
                  <label htmlFor="dbms-upload" className="block mb-2">Choose File or Video:</label>
                  <input type="file" id="dbms-upload" className="mt-2" />
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 transition-colors duration-300">Upload</button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
