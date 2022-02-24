import React, { useEffect, useState } from 'react'

// IMAGES
import lab from '../images/lab.jpg';
import aussie from '../images/Aussie.jpg';
import poodle from '../images/poodle.jpg';
import defaultPic from '../images/default.jpg';
import pug from '../images/pug.jpg';
import rottweiler from '../images/rottie.jpg';
import basset from '../images/basset.jpg';
import bernese from '../images/bernese.jpg';
import yorkie from '../images/yorkie.jpg';
import dobermann from '../images/dobermann.jpg';
import vizsla from '../images/vizsla.jpg';
import dashchund from '../images/dachshund.jpg';

import { Link } from 'react-router-dom';

const ListDogs = ({checkedSize, checkedAge}) => {
  const [dogs, setDogs] = useState([]);

  const getDogs = async () => {
    try {
      const response = await fetch('http://localhost:5000/dogs');
      const jsonData = await response.json();
      setDogs(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getDogs();
  }, []);

  let newArray = [];
  if (checkedSize[0] === true) {
    newArray.push("small");
  }
  if (checkedSize[1] === true) {
    newArray.push("medium");
  }
  if (checkedSize[2] === true) {
    newArray.push("large");
  }
  if (checkedSize[0] === false && checkedSize[1] === false && checkedSize[2] === false) {
    newArray.push("small", "medium", "large");
  }


  let newAgeArray = [];
  if (checkedAge[0] === true) {
    newAgeArray.push("puppy");
  }
  if (checkedAge[1] === true) {
    newAgeArray.push("adult");
  }
  if (checkedAge[2] === true) {
    newAgeArray.push("senior");
  }
  if (checkedAge[0] === false && checkedAge[1] === false && checkedAge[2] === false) {
    newAgeArray.push("puppy", "adult", "senior");
  }

    let arr = [];
    let finalArray = [];
    dogs.filter((dog) => dog.size === newArray[0] || dog.size === newArray[1] || dog.size === newArray[2]).map(filteredDog => (
      arr.push(filteredDog)
    ))
    arr.filter((pup) => pup.age === newAgeArray[0] || pup.age === newAgeArray[1] || pup.age === newAgeArray[2]).map(finalDog => {
      finalArray.push(finalDog)
    })


    
    const picture = function(dog) {
         switch(dog.breed) {
           case 'Lab':
            return <img style={{width: "400px"}} src={lab}></img>; 
           case 'Australian Shepherd':
            return <img style={{width: "400px"}} src={aussie}></img>;
           case 'Miniature Poodle':
            return <img style={{width: "400px"}} src={poodle}></img>;
           case 'Pug':
            return <img style={{width: "400px"}} src={pug}></img>;
           case 'Rottweiler':
            return <img style={{width: "400px"}} src={rottweiler}></img>;
           case 'Basset Hound':
            return <img style={{width: "400px"}} src={basset}></img>;
           case 'Bernese Mountain Dog':
            return <img style={{width: "400px"}} src={bernese}></img>;
           case 'Yorkie':
            return <img style={{width: "400px"}} src={yorkie}></img>;
           case 'Dachshund':
            return <img style={{width: "400px"}} src={dashchund}></img>;
           case 'Dobermann':
            return <img style={{width: "400px"}} src={dobermann}></img>;
           case 'Vizsla':
            return <img style={{width: "400px"}} src={vizsla}></img>;
           default:
            return <img style={{width: "400px"}} src={defaultPic}></img>;
         } 
    } 
  

  
  return (
    <div>
      <div>
        <Link to="/"> <button>Go Back</button> </Link>
      </div>
      {finalArray.map(dog => (
        <div>
          {picture(dog)}
          <h2>{dog.dog_name}</h2>
          <h3>{dog.breed}</h3>
          <span><b>Shelter:</b> {dog.shelter}</span>
          <br></br>
          <span><b>About me:</b> {dog.bio}</span>
          <h4>{dog.fact_title}</h4>
          <span>{dog.fact_desc}</span>
        </div>
      ))}
      
    </div>
  )
}

export default ListDogs