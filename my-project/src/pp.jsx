// App.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import GameCard from './GameCard';
import React, from App,js;


const App = () => {
  const [showManageData, setShowManageData] = useState(false);

  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {/* Existing GameCards */}
        {/* ... */}

        {/* Toggle Manage Data Section */}
        {showManageData ? (
          <div className="bg-white p-4 shadow-md rounded-md">
            {/* Render your Manage Data content here */}
            {/* ... */}
          </div>
        ) : (
          <button
            className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4"
            onClick={() => setShowManageData(true)}
          >
            Manage Data
          </button>
        )}

        {/* ... Other GameCards */}
      </div>
    </div>
  );
};

export default App;
