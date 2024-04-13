import React, { useState } from 'react';

function Sidebar() {
  const [isOsUploadVisible, setIsOsUploadVisible] = useState(false);
  const [isDbmsUploadVisible, setIsDbmsUploadVisible] = useState(false);

  // Function to toggle upload section visibility for Operating Systems
  const toggleOsUpload = () => {
    setIsOsUploadVisible(!isOsUploadVisible);
    setIsDbmsUploadVisible(false); // Close DBMS upload section if open
  };

  // Function to toggle upload section visibility for Database Management Systems
  const toggleDbmsUpload = () => {
    setIsDbmsUploadVisible(!isDbmsUploadVisible);
    setIsOsUploadVisible(false); // Close OS upload section if open
  };

  return (
    <aside className="bg-gray-800 text-white h-screen w-64 fixed top-0 left-0 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Subjects</h2>
        <ul className="mt-4">
          {/* Subject 1: Operating Systems */}
          <li className="py-2">
            <button onClick={toggleOsUpload} className="flex items-center w-full justify-between px-4 py-2 bg-gray-700 rounded-lg focus:outline-none">
              <span>Operating Systems</span>
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M7 10l5 5m0 0l5-5m-5 5V5"></path>
              </svg>
            </button>
            {/* Upload section for OS */}
            {isOsUploadVisible && (
              <div className="mt-2">
                <input type="file" className="mt-2" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">Upload</button>
              </div>
            )}
          </li>
          {/* Subject 2: Database Management Systems */}
          <li className="py-2">
            <button onClick={toggleDbmsUpload} className="flex items-center w-full justify-between px-4 py-2 bg-gray-700 rounded-lg focus:outline-none">
              <span>Database Management Systems</span>
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M7 10l5 5m0 0l5-5m-5 5V5"></path>
              </svg>
            </button>
            {/* Upload section for DBMS */}
            {isDbmsUploadVisible && (
              <div className="mt-2">
                <input type="file" className="mt-2" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">Upload</button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;






















import React, { useState } from 'react';

function Sidebar() {
  const [isOsUploadVisible, setIsOsUploadVisible] = useState(false);
  const [isDbmsUploadVisible, setIsDbmsUploadVisible] = useState(false);

  // Function to toggle upload section visibility for Operating Systems
  const toggleOsUpload = () => {
    setIsOsUploadVisible(!isOsUploadVisible);
    setIsDbmsUploadVisible(false); // Close DBMS upload section if open
  };

  // Function to toggle upload section visibility for Database Management Systems
  const toggleDbmsUpload = () => {
    setIsDbmsUploadVisible(!isDbmsUploadVisible);
    setIsOsUploadVisible(false); // Close OS upload section if open
  };

  return (
    <aside className="bg-gray-800 text-white h-screen w-64 fixed top-0 left-0 overflow-y-auto md:relative md:h-auto md:w-auto">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 md:hidden">Subjects</h2>
        <ul className="md:ml-4">
          {/* Subject 1: Operating Systems */}
          <li className="py-2">
            <button onClick={toggleOsUpload} className="flex items-center w-full justify-between px-4 py-2 bg-gray-700 rounded-lg focus:outline-none">
              <span>Operating Systems</span>
              <svg className={`w-4 h-4 fill-current ${isOsUploadVisible && 'transform rotate-180'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M7 10l5 5m0 0l5-5m-5 5V5"></path>
              </svg>
            </button>
            {/* Upload section for OS */}
            {isOsUploadVisible && (
              <div className="mt-2">
                <input type="file" className="mt-2" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">Upload</button>
              </div>
            )}
          </li>
          {/* Subject 2: Database Management Systems */}
          <li className="py-2">
            <button onClick={toggleDbmsUpload} className="flex items-center w-full justify-between px-4 py-2 bg-gray-700 rounded-lg focus:outline-none">
              <span>Database Management Systems</span>
              <svg className={`w-4 h-4 fill-current ${isDbmsUploadVisible && 'transform rotate-180'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M7 10l5 5m0 0l5-5m-5 5V5"></path>
              </svg>
            </button>
            {/* Upload section for DBMS */}
            {isDbmsUploadVisible && (
              <div className="mt-2">
                <input type="file" className="mt-2" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">Upload</button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
