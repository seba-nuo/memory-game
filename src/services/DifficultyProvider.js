import { createContext } from "react";
import { useSearchParams } from "react-router-dom";

export const difficultyContext = createContext(null);

export function DifficultyProvider({ children }) {
  const [searchParams ] = useSearchParams();
  const difficulty = searchParams.get("difficulty");

  return (
    <difficultyContext.Provider value={{ difficulty }}>
      {children}
    </difficultyContext.Provider>
  );
}
