import React from "react";
import { useGlobalStatesContext } from "./utils/global.context";
import { Link } from "react-router-dom";
import { links } from "./utils/links";
import DarkModeButton from "./DarkModeButton/DarkModeButton";

const Navbar = () => {
const { theme, dispatchTheme } = useGlobalStatesContext();
const { home, contact, favs, dentista } = links;

const handleTheme = () => {
    dispatchTheme({ type: theme.color === "light" ? "SET_DARK" : "SET_LIGHT" });
};

return (
    <nav className={theme.color}>
    <div className="logo-container">
    <img src="./images/clinica.png" alt="Logo" className="logo-image" />
        <h2 className="logo-d">D</h2>
        <h2 className="logo-h">H</h2>
        <h2 className="logo-text">Odonto</h2>
    </div>
    <div className="nav-links">
    <Link to={home.path}>{home.name}</Link>
    <Link to={contact.path}>{contact.name}</Link>
    <Link to={favs.path}>{favs.name}</Link>
    <DarkModeButton onClick={handleTheme} />
    </div>
    </nav>
);
};

export default Navbar;