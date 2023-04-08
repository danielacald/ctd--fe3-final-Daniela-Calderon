import React from "react";
import Form from "../Components/Form";
import { useGlobalStatesContext } from "../Components/utils/global.context";

const Contact = () => {
const { theme } = useGlobalStatesContext();

return (
    <div className={theme.color}>
    <h1>¿Quiere saber más?</h1>
    <p className="centered-questions">Envíanos tus consultas y nos pondremos en contacto contigo</p>
    <Form />
    </div>
);
};

export default Contact;