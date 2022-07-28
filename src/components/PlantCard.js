import React, {useState} from "react";

function PlantCard({ plant, handleDelete }) {

  const [isUnavailable, setIsUnavailable] = useState(false)

  function handleAvailabilityChange () {
    setIsUnavailable(!isUnavailable)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {!isUnavailable ? (
        <button className="primary" onClick={handleAvailabilityChange}>In Stock</button>
      ) : (
        <button onClick={handleAvailabilityChange}>Out of Stock</button>
      )}
      <button onClick={() => handleDelete(plant.id)}>X</button>
    </li>
  );
}

export default PlantCard;