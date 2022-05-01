import React, { createContext, useState, useMemo } from "react";

export const HeightContext = createContext();

function HeightStore({ children }) {
  const [cardListHeight, setCardListHeight] = useState(0);
  const HeightMemo = useMemo(
    () => ({
      cardListHeight,
      setCardListHeight,
    }),
    [cardListHeight]
  );

  return (
    <HeightContext.Provider value={HeightMemo}>
      {children}
    </HeightContext.Provider>
  );
}

export default HeightStore;
