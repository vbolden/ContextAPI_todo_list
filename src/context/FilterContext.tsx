import { createContext } from "react";

export type Filter = "all" | "active" |"completed";

export const FilterContext = createContext<any>("all");