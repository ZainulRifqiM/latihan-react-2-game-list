import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";

const GameCard = ({ game, handleEdit, handleDelete }) => {
  const { id, name, year, genre } = game;
  return (
    <div className="border shadow rounded p-2 flex justify-between">
      <div>
        <h1 className="text-lg font-medium text-gray-900">{name}</h1>
        <p className="text-xs font-light text-gray-400">{year}</p>
        <p className="text-xs font-medium text-gray-600">{genre}</p>
      </div>
      <div className="flex flex-col gap-1">
        <button
          className="w-12 border rounded-md bg-yellow-500 text-white text-xl"
          onClick={() => handleEdit(game)}
        >
          <FaEdit className="mx-auto my-1" />
        </button>
        <button
          className="w-12  border rounded-md bg-red-500 text-white text-xl"
          onClick={() => handleDelete(id)}
        >
          <MdDeleteForever className="mx-auto my-1" />
        </button>
      </div>
    </div>
  );
};

// Menambahkan validasi props
GameCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default GameCard;
