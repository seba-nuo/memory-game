import { useContext, useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import Card from "../components/Card";
import { difficultyContext } from "../services/DifficultyProvider";
import CardsDifficulties from "../services/CardsByDifficulty.json";

function Game() {
  const { difficulty } = useContext(difficultyContext);
  const [cardsClicked, setCardsClicked] = useState([]);
  const [displayedCards, setDisplayedCards] = useState([]);

  const addCardClicked = (value) => {
    if (cardsClicked.includes(value)) return;

    setCardsClicked([...cardsClicked, value]);
    checkForPairMatch([...cardsClicked, value]);
  };

  useEffect(() => {
    if (!difficulty) return;

    const GameDifficuly = CardsDifficulties[difficulty];
    const randomCards = ramdomizeCards(GameDifficuly.cards);
    setDisplayedCards(randomCards);
  }, [difficulty]);

  return (
    <>
      {!difficulty ? (
        <Navigate to="/" />
      ) : (
        <>
          <nav className="flex h-16 bg-red-500 items-center justify-center">
            <ul>
              <li>
                <Link
                  to="/"
                  className="p-2 bg-white rounded-md border-[3px] border-gray-300 hover:border-2"
                >
                  Select Difficulty
                </Link>
              </li>
            </ul>
          </nav>
          <main className="flex flex-col items-center">
            <h1 className="mt-8">
              DIFFICULTY: <span className="font-bold">{difficulty}</span>
            </h1>

            <div className="grid grid-cols-4 gap-3 mt-5 mb-10">
              {displayedCards.map((value, index) => (
                <Card
                  value={value}
                  addCardClicked={addCardClicked}
                  cardIndex={index}
                  isClicked={cardsClicked.includes(index)}
                  key={index}
                ></Card>
              ))}
            </div>
          </main>
        </>
      )}
    </>
  );
}

function checkForPairMatch(cardsClicked) {
  if (cardsClicked.length !== 2) return false;

  return true;
}

const ramdomizeCards = (cards) => {
  let newsCards = [...cards, ...cards];

  for (let i = newsCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newsCards[i], newsCards[j]] = [newsCards[j], newsCards[i]];
  }

  return newsCards;
};

export default Game;
