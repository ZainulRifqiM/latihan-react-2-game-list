import "./App.css";
import { useState } from "react";
import GameCard from "./components/gameCard";
import { v4 as uuidv4 } from "uuid";

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

  const [dataForm, setDataForm] = useState({
    id: null,
    name: "",
    year: "",
    genre: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // e.prevantDefault();
    e.preventDefault();

    // validasi jika teks kososng
    if (!dataForm.name || !dataForm.year || !dataForm.genre) {
      alert("Data tidak boleh kosong");
      return;
    }

    if (dataForm.id) {
      setGames((prevGames) =>
        prevGames.map((game) =>
          game.id === dataForm.id ? { ...dataForm } : game
        )
      );
    } else {
      // tambah data ke state games
      setGames((prevGames) => [
        ...prevGames,
        {
          id: uuidv4(),
          name: dataForm.name,
          year: dataForm.year,
          genre: dataForm.genre,
        },
      ]);
      // setGames((prevGames) => [...prevGames, dataForm]);
    }
    // membersihkan form setelah submit
    setDataForm({
      id: null,
      name: "",
      year: "",
      genre: "",
    });
  };

  const handleEdit = (game) => {
    setDataForm(game);
    console.log(game);
  };

  const handleDelete = (id) => {
    setGames((prevGames) => prevGames.filter((game) => game.id !== id));
  };

  return (
    <div className="flex flex-col md:flex-row m-8 max-w-screen-2xl gap-8">
      <div className="space-y-8 p-4 md:p-8 md:w-2/5 border shadow rounded-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">GameShelf</h1>
          <p className="text-xs font-medium text-gray-600">
            Rak digital untuk daftar dan koleksi game Anda.
          </p>
        </div>

        <form
          action=""
          onSubmit={handleSubmit}
          className="max-w-sm mx-auto space-y-2"
        >
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
              onChange={handleChange}
              value={dataForm.name}
              name="name"
              placeholder="Tuliskan nama game anda..."
              className="border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="">
            <label
              htmlFor="year-input"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Tahun Rilis
            </label>
            <input
              type="text"
              id="year-input"
              onChange={handleChange}
              value={dataForm.year}
              name="year"
              placeholder="Tuliskan tahun rilis game..."
              className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="genre-input"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Genre Game
            </label>
            <input
              type="text"
              id="genre-input"
              onChange={handleChange}
              value={dataForm.genre}
              name="genre"
              placeholder="Tuliskan genre dari game anda..."
              className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
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
            <GameCard
              key={game.id}
              game={game}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
