import React, {useState, useEffect} from "react";
import DogName from "./DogName";
import DogInfo from "./DogInfo";

function App() {
  const [dogs, setDogs] = useState([])
  const [selectedDog, setSelectedDog] = useState({})
  const [appear, setAppear] = useState(false)
  const [toggleFilter, setToggleFilter] = useState(false)

  function handleAppear() {
    setAppear(true)
  }

  useEffect(() => {
    fetch("http://localhost:3001/pups")
    .then(resp => resp.json())
    .then(data => setDogs(data))
  },[])

  function handleDogInfo (id) {
    const clickedDog = dogs.find(dog => {
      return dog.id === id
    })
    setSelectedDog(clickedDog)
  }

  function handleGoodBad (updatedDog) {
    setSelectedDog(updatedDog)
  }

  function handleToggleFilter () {
    setToggleFilter(toggleFilter=>!toggleFilter)
  }

  const filteredDogs = dogs.filter(dog => {
    return toggleFilter ? dog.isGoodDog === true : dog.isGoodDog === false
  })

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={handleToggleFilter}>Filter good dogs: {toggleFilter ? "ON" : "OFF"}</button>
      </div>
      <div id="dog-bar">
      {filteredDogs.map(dog => {
            return <DogName key={dog.id} dog={dog} onDogInfo={handleDogInfo} onAppear={handleAppear}/>
          })}
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          {appear ? <DogInfo selectedDog={selectedDog} onGoodBad={handleGoodBad}/> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
