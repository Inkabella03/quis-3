
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Quiz 3 | Inka Bella Nur Aisyah</h1>
          <div className="space-x-4">
            <button className="text-white">Home</button>
            <button className="text-white">Manage Data</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const SearchBar = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="container mx-auto">
        <input
          type="text"
          placeholder="Find your data that you need!"
          className="w-full p-2 rounded-md border border-gray-300"
        />
      </div>
    </div>
  );
};

const GameCard = ({ title, year, description, consoleInfo, price }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-500">{year}</p>
      <p className="text-gray-700">{description}</p>
      <p className="text-gray-500">{consoleInfo}</p>
      <p className="text-green-600 font-semibold">{price}</p>
      <button className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4">BELI SEKARANG</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <GameCard
          title="Rayman Legends"
          year="2019"
          description="Rayman, Globox, and the Teensies are off wandering through an enchanted forest when they discover a mysterious tent filled with a series of captivating paintings..."
          consoleInfo="Coaction: 3.6/12.6 GB"
          price="Rp. 175.000,-"
        />
        <GameCard
          title="Need For Speed - Most Wanted"
          year="2017"
          description="The twenty-first major installment of the popular Need for Speed racing series is dominated by the Black List, a highly illegal racing competition held at Rockport city’s open world..."
          consoleInfo="Size: 2.41 GB/10GB"
          price="Rp. 150.000,-"
        />
        <GameCard
          title="Spiderman - Edge of Time"
          year="2017"
          description="“Edge of Spider-Man” tells one of the earliest superhero tales by having two players alternately controlling Spider-Man as he meets his arch-nemesis..."
          consoleInfo="Adventure: CAE GJ/Android & iOS"
          price="Rp. 125.000,-"
        />
        <GameCard
          title="Grand Turismo"
          year="2010"
          description="“Gran Turismo” (GT) or “Grand Turismo” is a racing game series developed by Polyphony Digital. It is the best-selling PlayStation exclusive franchise, with over 80 million copies sold worldwide..."
          consoleInfo="PlayStation Portable (PSP)"
          price="Rp. 125.000,-"
        />
      </div>
    </div>
  );
};

export default App;
