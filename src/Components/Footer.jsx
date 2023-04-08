import React from "react";
import { useGlobalStatesContext } from "./utils/global.context";
import { faFacebook, faTiktok, faInstagram, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const { theme } = useGlobalStatesContext();
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("/");
    }

    return (
        <footer className={theme.color}>
            <div>
                <button className={`back-btn ${theme.color === "dark" ? "dark" : ""}`} onClick={handleBackButtonClick}>« Volver</button>
            </div>
            <div className="dh-logo">
                <p>Powered by</p>
                <img src="../images/DH.png" alt="DH-logo" />
                <div className="icon-footer">
                    <span className="icon">
                        <a href="https://www.youtube.com/channel/UCKkPOtW8gQPgIUaxF4Og7PA/" target="blank"><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href="https://www.facebook.com/digitalhouseschool/?locale=es_LA/" target="blank"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://www.tiktok.com/foryou/" target="blank"><FontAwesomeIcon icon={faTiktok} /></a>
                        <a href="https://www.instagram.com/_digitalhouse/" target="blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    </span>
                </div>
            </div>
            <p>Desarrollado por Daniela Andrea Calderón Roa, ENTREGABLE FRONTEND III</p>
        </footer>
    );
};

export default Footer;
