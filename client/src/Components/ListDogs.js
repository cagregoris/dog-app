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
            return <img src={lab}></img>; 
           case 'Australian Shepherd':
            return <img src={aussie}></img>;
           case 'Miniature Poodle':
            return <img src={poodle}></img>;
           case 'Pug':
            return <img src={pug}></img>;
           case 'Rottweiler':
            return <img src={rottweiler}></img>;
           case 'Basset Hound':
            return <img src={basset}></img>;
           case 'Bernese Mountain Dog':
            return <img src={bernese}></img>;
           case 'Yorkie':
            return <img src={yorkie}></img>;
           case 'Dachshund':
            return <img src={dashchund}></img>;
           case 'Dobermann':
            return <img src={dobermann}></img>;
           case 'Vizsla':
            return <img src={vizsla}></img>;
           default:
            return <img src={defaultPic}></img>;
         } 
    } 
  

  
  return (
    <div className='dogs-page'>
       <div class="blob">
          {/* <!-- This SVG is from https://codepen.io/Ali_Farooq_/pen/gKOJqx --> */}
          <svg xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
          </svg>
        </div>
      <div className='back-btn'>
        <Link to="/"> <button>Go Back</button> </Link>
      </div>
      <div className='dog-wrapper'>
        {finalArray.map(dog => (
          <div className='info-box'>
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
      
    </div>
  )
}

export default ListDogs