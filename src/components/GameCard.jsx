import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const GameCard = (game) => {
  const { name, year, genre } = game.game;
  return (
    <div className="border shadow rounded p-2 flex justify-between">
      <div>
        <h1 className="text-lg font-medium text-gray-900">{name}</h1>
        <p className="text-xs font-light text-gray-400">{year}</p>
        <p className="text-xs font-medium text-gray-600">{genre}</p>
      </div>
      <div className="flex flex-col gap-1">
        <button className="w-12 border rounded-md bg-yellow-500 text-white text-xl">
          <FaEdit className="mx-auto my-1" />
        </button>
        <button className="w-12  border rounded-md bg-red-500 text-white text-xl">
          <MdDeleteForever className="mx-auto my-1" />
        </button>
      </div>
    </div>
  );
};

export default GameCard;
