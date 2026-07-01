import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeButton() {
    const themeContext = useContext(ThemeContext);

    const toggleTheme = themeContext.toggleTheme;

    return (
        <button className="control-btn" onClick={toggleTheme} >
            Toggle Theme
        </button>
    )
}

export default ThemeButton;