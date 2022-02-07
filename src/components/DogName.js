import React from 'react';

function DogName({dog, onDogInfo, onAppear}) {

    function handleClick () {
        onDogInfo(dog.id)
        onAppear()
    }

  return(<span onClick={handleClick}>
    {dog.name}
  </span>)
}

export default DogName;
