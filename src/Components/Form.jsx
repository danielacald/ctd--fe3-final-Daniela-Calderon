import { useState } from "react";

const Form = () => {
    //Aqui deberan implementar el form completo con sus validaciones
    const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
    setNewUser({
        ...newUser,
        [e.target.name]: e.target.value,
    });
    };

    const validate = (newUser) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const error = { nameError: "", emailError: "" };

    if (!newUser.name || newUser.name.length < 5) {
        error.nameError =
        "El nombre es requerido y debe tener al menos 5 caracteres";
    }

    if (!newUser.email || !emailRegex.test(newUser.email)) {
        error.emailError = "El email debe ser válido";
    }

    if (error.nameError || error.emailError) {
        setErrors(error);
        return false;
    }

    setErrors({});
    return true;
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate(newUser);

    if (!isValid) {
        return;
    }

    setNewUser({
        name: "",
        email: "",
    });
    setErrors({});
    e.target.classList.add("inputSuccess");
    alert(
        `¡Gracias! ${newUser.name}, nos pondremos en contacto contigo lo antes posible por correo electrónico a  ${newUser.email}`
    );

      // Agregar la alerta de envío exitoso
    const successAlert = document.createElement("div");
    successAlert.classList.add("successAlert");
    successAlert.innerText = "¡Los datos fueron enviados correctamente!";
    document.body.appendChild(successAlert);
    setTimeout(() => {
        successAlert.remove();
    }, 2000);
    };

    return (
    <div>
        <form>
        <input
            className={errors.nameError ? "inputError" : ""}
            name="name"
            type="text"
            placeholder="Introduce tu nombre"
            value={newUser.name}
            onChange={handleInputChange}
        />
        {errors.nameError && <label> ⚠ {errors.nameError}</label>}
        <input
            className={errors.emailError ? "inputError" : ""}
            name="email"
            type="email"
            placeholder="Introduce tu email"
            value={newUser.email}
            onChange={handleInputChange}
        />
        {errors.emailError && <label> ⚠ {errors.emailError}</label>}
        <button className="submitButton" onClick={handleSubmit}>
            Enviar
        </button>
        </form>
    </div>
    );
};

export default Form;
