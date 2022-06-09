import { useContext, useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import Card from "../components/Card";
import { difficultyContext } from "../services/DifficultyProvider";
import CardsDifficulties from "../services/CardsByDifficulty.json";
import "../index.css";

function Game() {
  const { difficulty } = useContext(difficultyContext);
  const [cardsClicked, setCardsClicked] = useState([]);
  const [cardPairsFinded, setCardPairsFinded] = useState([]);
  const [displayedCards, setDisplayedCards] = useState([]);
  const [hasGameEnded, setHasGameEnded] = useState(false);

  const addCardClicked = (value, cardIndex) => {
    if (isCardInClicked(cardsClicked, cardIndex)) return;

    const cardsClickedArr = [...cardsClicked, { cardIndex, value }];

    if (cardsClickedArr.length > 2) {
      setCardsClicked([{ cardIndex, value }]);
      return;
    }

    if (checkForPairMatch(cardsClickedArr)) {
      const pairCards = [
        ...cardPairsFinded,
        cardIndex,
        cardsClickedArr[0].cardIndex,
      ];
      setCardPairsFinded(pairCards);

      const totalCards = CardsDifficulties[difficulty].cards.length * 2;
      if (pairCards.length === totalCards) {
        setHasGameEnded(true);
      }
    }
    setCardsClicked(cardsClickedArr);
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
            <h1 className="mt-8 mb-6">
              DIFFICULTY: <span className="font-bold">{difficulty}</span>
            </h1>

            <div className={`game-grid ${difficulty}`}>
              {displayedCards.map((value, index) => (
                <Card
                  addCardClicked={addCardClicked}
                  cardIndex={index}
                  isClicked={isCardInClicked(cardsClicked, index)}
                  pairFinded={cardPairsFinded.includes(index)}
                  key={index}
                >
                  {value}
                </Card>
              ))}
            </div>
          </main>
        </>
      )}
      {hasGameEnded && (
        <div className="flex flex-col items-center justify-center absolute top-1/3 left-1/2 -translate-x-1/2 bg-green-600 p-4">
          <h1 className="text-4xl font-bold text-white">You Win!</h1>
          <Link to="/" className="p-2 bg-white rounded-md border-[3px] border-gray-300 hover:border-white mt-4 font-bold text-white bg-transparent">
            Play Again
          </Link>
        </div>
      )}
    </>
  );
}

function checkForPairMatch(cardsClicked) {
  if (cardsClicked.length !== 2) return false;

  const isPair = cardsClicked[0].value === cardsClicked[1].value;
  return isPair;
}

const ramdomizeCards = (cards) => {
  let newsCards = [...cards, ...cards];

  for (let i = newsCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newsCards[i], newsCards[j]] = [newsCards[j], newsCards[i]];
  }

  return newsCards;
};

const isCardInClicked = (cardsClicked, cardIndex) =>
  cardsClicked.some((card) => card.cardIndex === cardIndex);

export default Game;
