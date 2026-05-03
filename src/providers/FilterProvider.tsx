import { useState } from "react";
import { FilterContext } from "../context/FilterContext";

function FilterProvider({children}: {children: React.ReactNode}) {
    const [filter, setFilter] = useState("all");

    return (
        <FilterContext.Provider
        value={{filter, setFilter}}>
        </FilterContext.Provider>
    )
}