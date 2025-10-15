"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type DetailsType = {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  size: string;
  setSize: Dispatch<SetStateAction<string>>;
  qty: string;
  setQty: Dispatch<SetStateAction<string>>;
};

const DetailsContext = createContext<DetailsType | null>(null);

export function DetailsProvider({ children }: { children: React.ReactNode }) {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [qty, setQty] = useState("");

  return (
    <DetailsContext.Provider
      value={{ color, setColor, size, setSize, qty, setQty }}
    >
      {children}
    </DetailsContext.Provider>
  );
}

export function useDetails() {
  const ctx = useContext(DetailsContext);
  if (!ctx) throw new Error("useFilter must be use with FilterProvider");
  return ctx;
}
