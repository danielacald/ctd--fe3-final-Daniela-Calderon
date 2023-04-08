import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useGlobalStatesContext } from "../Components/utils/global.context";

const Favs = () => {
const { theme } = useGlobalStatesContext();
const favs = JSON.parse(localStorage.getItem("favorites")) || [];

return (
    <div className={theme.color}>
    <h1>Dentistas Favoritos</h1>
    <p className="centered">Aquí hay una lista de sus dentistas favoritos</p>

    <div className="card-grid">
        {favs.length ? (
        favs.map((fav) => (
            <Card
            key={fav.id}
            name={fav.name}
            username={fav.username}
            id={fav.id}
            />
        ))
        ) : (
        <p>No se encontraron favoritos 🥺 </p>
        )}
    </div>
    </div>
);
};

export default Favs;
