import React, {useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [searchInput, setSearchInput] = useState("")

  return (
    <div className="app">
      <Header />
      <PlantPage 
        searchInput={searchInput} 
        setSearchInput={setSearchInput}/>
    </div>
  );
}

export default App;
