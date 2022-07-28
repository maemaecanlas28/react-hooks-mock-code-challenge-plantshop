import React, {useState} from "react";

function NewPlantForm({ plants, setPlants }) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0)

  function handleNameChange (event) {
    setName(event.target.value)
  }

  function handleImageChange (event) {
    setImage(event.target.value)
  }

  function handlePriceChange (event) {
    setPrice(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault();
    const formData = {
      name: name,
      image: image,
      price: price
    }
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }
    fetch("http://localhost:6001/plants", configObj)
    .then(data => data.json())
    .then(data => {
      const dataArray = [...plants, data]
      setPlants(dataArray)
      setName("")
      setImage("")
      setPrice(0)
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name"
          onChange={handleNameChange}
          value={name} />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL"
          onChange={handleImageChange}
          value={image} />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price"
          onChange={handlePriceChange}
          value={price} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
