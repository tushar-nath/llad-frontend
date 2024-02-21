import { createContext, useCallback, useState } from "react";

interface CardContextProps {
  card: {
    _id: string;
    englishWord: string;
    englishExample: string;
    norwegianWord: string;
    norwegianExample: string;
    note: string;
    tags: string[];
  } | null;
  storeCard: (cardData: {
    _id: string;
    englishWord: string;
    englishExample: string;
    norwegianWord: string;
    norwegianExample: string;
    note: string;
    tags: string[];
  }) => void;
  removeCard: () => void;
}

export const CardContext = createContext<CardContextProps>({
  card: null,
  storeCard: () => {},
  removeCard: () => {},
});

export const CardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [card, setCard] = useState<{
    _id: string;
    englishWord: string;
    englishExample: string;
    norwegianWord: string;
    norwegianExample: string;
    note: string;
    tags: string[];
  } | null>(null);

  const storeCard = useCallback(
    (cardData: {
      _id: string;
      englishWord: string;
      englishExample: string;
      norwegianWord: string;
      norwegianExample: string;
      note: string;
      tags: string[];
    }) => {
      setCard(cardData);
    },
    []
  );

  const removeCard = useCallback(() => {
    setCard(null);
  }, []);

  return (
    <CardContext.Provider value={{ card, storeCard, removeCard }}>
      {children}
    </CardContext.Provider>
  );
};
