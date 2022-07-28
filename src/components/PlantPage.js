import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ searchInput, setSearchInput }) {

  const [plants, setPlants] = useState([])

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants}/>
      <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
      <PlantList plants={plants} setPlants={setPlants} searchInput={searchInput} />
    </main>
  );
}

export default PlantPage;
