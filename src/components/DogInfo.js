import React from 'react';

function DogInfo({selectedDog, onGoodBad}) {

    function handleClick () {
        toggleGoodBad();
    }

function toggleGoodBad () {
    fetch(`http://localhost:3001/pups/${selectedDog.id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            isGoodDog: !selectedDog.isGoodDog
        }),
    })
    .then(resp => resp.json())
    .then(onGoodBad)
}

  return <div>
      <img src={selectedDog.image} alt={selectedDog.name} />
      <h2>{selectedDog.name}</h2>
      <button onClick={handleClick}>{selectedDog.isGoodDog? "Good Dog" : "Bad Dog"}</button>
  </div>;
}

export default DogInfo;
