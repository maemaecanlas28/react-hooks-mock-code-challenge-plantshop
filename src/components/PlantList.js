import React, { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants, searchInput }) {

  function handleDelete (id) {
    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      } 
    }
    fetch(`http://localhost:6001/plants/${id}`, configObj)
    .then(data => data.json())
    .then(data => {
      const newPlants= [...plants]
      let plantIndex = 0
      for (let i=0; i < newPlants.length; i++) {
        const currPlant = newPlants[i]
        if (currPlant.id === id) {
          plantIndex = i;
          break;
        }
      }
      newPlants.splice(plantIndex, 1)
      setPlants(newPlants);
    })
  }

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(data => data.json())
    .then(data => setPlants(data))
  }, [setPlants])

  const displayPlants = plants
  .filter(plant => {
    const lowerCasePlantName = plant.name.toLowerCase()
    const lowerCaseInput = searchInput.toLowerCase()

    return lowerCasePlantName.includes(lowerCaseInput)
  })
  .map(plant => {
    return (<PlantCard 
      key={plant.id} 
      plant={plant}
      handleDelete={handleDelete} />
  )})
  

  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
