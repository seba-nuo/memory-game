import { createContext, useState } from "react";

export const difficultyContext = createContext(null);

export function DifficultyProvider({ children }) {
  const [difficulty, setDifficulty] = useState(null);

  return (
    <difficultyContext.Provider value={{ difficulty, setDifficulty }}>
      {children}
    </difficultyContext.Provider>
  );
}
