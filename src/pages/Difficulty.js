import { useNavigate } from "react-router-dom";
import DifficultyBtn from "../components/DifficultyBtn";

function Difficulty() {
  const navigate = useNavigate();

  const handleSetDifficulty = (difficulty) => {
    navigate(`/game?difficulty=${difficulty}`);
  };

  return (
    <div className="grid place-content-center h-screen">
      <DifficultyBtn title="EASY" onClick={handleSetDifficulty} />
      <DifficultyBtn title="MEDIUM" onClick={handleSetDifficulty} />
      <DifficultyBtn title="HARD" onClick={handleSetDifficulty} />
    </div>
  );
}

export default Difficulty;
