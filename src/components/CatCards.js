import React from "react";

function CatCards({ cat, isFavorite, toggleFavorite }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <img
          src={cat.image}
          className="card-img"
          alt={cat.name}
        />
        <h5 className="card-title">{cat.name}</h5>
        <p className="card-text">
         <strong> Cat - ID:</strong> {cat.id} <br />
          <strong>Description:</strong> {cat.description} <br />
          <strong>Weight:</strong> {cat.weight} kg <br />
          <strong>Origin:</strong> {cat.origin} <br />
          <strong>Temperament:</strong> {cat.temperament}
        </p>
        <button
          className={`btn btn-${isFavorite ? "danger" : "success"}`}
          onClick={() => toggleFavorite(cat.id)}
        >
          {isFavorite ? (
            <span>
              <i className="fa-solid fa-heart"></i> Unsave
            </span>
          ) : (
            <span>
              <i className="fa-regular fa-heart"></i> Save
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

export default CatCards;
