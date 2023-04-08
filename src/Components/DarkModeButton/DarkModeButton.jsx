import React from "react";
import "./DarkModeButton.css";

const DarkModeButton = ({ onClick }) => {
return (
    <div className="toggleDark">
    <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onClick={onClick}
    />
    <label htmlFor="checkbox" className="label">
        <span className="bat">🌘</span>
        <span className="flash">☀️</span>
        <div className="ball" />
    </label>
    </div>
);
};

export default DarkModeButton;