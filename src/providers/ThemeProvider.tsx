import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeProvider({children}: {children: React.ReactNode}) {
    const [theme, setTheme] = useState("light")

    function toggleTheme() {
        setTheme(
            theme === "light"
            ? "dark"
            : "light"
        )
    }

    return (
        <ThemeContext.Provider
        value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;