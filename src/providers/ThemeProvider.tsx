import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeProvider({ children }: { children: React.ReactNode; }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    function toggleTheme() {
        const newTheme = theme === "light"
            ? "dark"
            : "light";

        setTheme(newTheme);

        localStorage.setItem("theme", newTheme);
    }

    return (
        <ThemeContext.Provider
            value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;