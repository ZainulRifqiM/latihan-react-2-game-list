import "./App.css";
import { useState } from "react";
import GameCard from "./components/gameCard";

function App() {
  const [games, setGames] = useState([
    {
      id: 1,
      name: "Dota 2",
      year: 2013,
      genre: "Multiplayer Online Battle Arena",
    },
    {
      id: 2,
      name: "Dragon Nest",
      year: 2010,
      genre: "Action MMORPG",
    },
    {
      id: 3,
      name: "Valorant",
      year: 2020,
      genre: "First-Person Shooter",
    },
  ]);
  // console.log(games);

  return (
    <div className="flex flex-col md:flex-row m-8 max-w-screen-2xl gap-8">
      <div className="space-y-8 p-4 md:p-8 md:w-2/5 border shadow rounded-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">GameShelf</h1>
          <p className="text-xs font-medium text-gray-600">
            Rak digital untuk daftar dan koleksi game Anda.
          </p>
        </div>

        <form action="" className="max-w-sm mx-auto space-y-2">
          <div className="">
            <label
              htmlFor="name-input"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Nama Game
            </label>
            <input
              type="text"
              id="name-input"
              placeholder="Tuliskan nama game anda..."
              className="border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="">
            <label
              htmlFor="kategory-input"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Kategory Game
            </label>
            <input
              type="text"
              id="kategory-input"
              placeholder="Tuliskan kategori game anda..."
              className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="desc-input"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Deskripsi Game
            </label>
            <textarea
              type="text"
              id="desc-input"
              placeholder="Deskripsikan game anda..."
              className="block w-full p-4  border  rounded-lg  text-base  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 resize-none h-40"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 border-b-4 border-gray-900 hover:border-gray-700 rounded w-full"
          >
            Button
          </button>
        </form>
      </div>
      <div className="md:w-3/5 p-4 md:p-8 border shadow rounded-lg space-y-8">
        <h1 className="text-2xl font-semibold text-gray-900 text-center">
          Game List
        </h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
