import React from "react";

function Header({ onDarkModeClick ,isDarkMode}) {
    return (
        <header>
            <h1>Shopster</h1>
            <button onClick={onDarkModeClick}>
                {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    );
}

export default Header;