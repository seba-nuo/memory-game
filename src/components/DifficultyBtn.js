import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { difficultyContext } from "../services/DifficultyProvider";

function DifficultyBtn({ title }) {
  const { setDifficulty } = useContext(difficultyContext);
  const navigate = useNavigate();
  
  const handleSetDifficulty = () => {
    setDifficulty(title);
    navigate("/game")
  };

  return (
    <button
      type="button"
      onClick={handleSetDifficulty}
      className="bg-red-500 border-2 border-slate-800 w-40 text-white m-2 rounded-md h-8 font-bold hover:rotate-3 hover:transition-all"
    >
      {title}
    </button>
  );
}

export default DifficultyBtn;
