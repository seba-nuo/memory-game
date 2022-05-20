import { useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import Card from "../components/Card";
import { difficultyContext } from "../services/DifficultyProvider";
import CardsDifficulties from "../services/CardsByDifficulty.json";

function Game() {
  const { difficulty } = useContext(difficultyContext);

  if (!difficulty) {
    return <Navigate to="/" />;
  }

  const gameDifficulty = CardsDifficulties[difficulty];
  console.log(gameDifficulty);

  return (
    <>
      <nav className="flex h-16 bg-red-500 items-center justify-center">
        <ul>
          <li>
            <Link to="/" className="p-2 bg-white rounded-md">
              Select Difficulty
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex flex-col items-center">
        <h1 className="mt-8">
          DIFFICULTY: <span className="font-bold">{difficulty}</span>
        </h1>

        <div className="grid grid-cols-4 gap-3 mt-5">
          {gameDifficulty.cards.map((value) => (
            <Card value={value} key={value}></Card>
          ))}
        </div>
      </main>
    </>
  );
}

export default Game;
