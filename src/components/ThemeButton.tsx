import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeButton() {
    const themeContext = useContext(ThemeContext);

    const toggleTheme = themeContext.toggleTheme;

    return (
        <button onClick={toggleTheme} >
            Toggle Theme
        </button>
    )
}

export default ThemeButton;