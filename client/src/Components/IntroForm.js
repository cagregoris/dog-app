import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const IntroForm = ({checkedSize, setCheckedSize, checkedAge, setCheckedAge}) => {


  const handleOnChange = (position) => {
    const updatedCheckedSize = checkedSize.map((item, index) =>
      index === position ? !item : item
      )
      setCheckedSize(updatedCheckedSize);
    };

    const handleOnChangeAge = (position) => {
      const updatedCheckedAge = checkedAge.map((item, index) =>
      index === position ? !item : item
      )
      setCheckedAge(updatedCheckedAge);
    };

  return (
    <div className="intro-form--page">
      <div class="blob">
        {/* <!-- This SVG is from https://codepen.io/Ali_Farooq_/pen/gKOJqx --> */}
        <svg xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
        <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
        </svg>
      </div>
      <form className='intro-form'>
        <div className="size-options">
          <h3>Select size preference</h3>
          <label htmlFor='checkbox--0'>
            <input
              id="checkbox--0"
              type="checkbox"
              name={'small'}
              value={'small'}
              checked={checkedSize[0]}
              onChange={() => handleOnChange(0)}
            />Small
          </label>
          <label htmlFor='checkbox--1'>
          <input
            id="checkbox--1"
            type="checkbox"
            name={'medium'}
            value={'medium'}
            checked={checkedSize[1]}
            onChange={() => handleOnChange(1)}
          />
          Medium</label>
          <label htmlFor='checkbox--2'>
          <input
            id="checkbox--2"
            type="checkbox"
            name={'large'}
            value={'large'}
            checked={checkedSize[2]}
            onChange={() => handleOnChange(2)}
          />
          Large</label>
        </div>

        <div className="age-options">
          <h3>Select age preference</h3>
          <label htmlFor='checkbox--0'>
            <input
              id="checkbox--0"
              type="checkbox"
              name={'puppy'}
              value={'puppy'}
              checked={checkedAge[0]}
              onChange={() => handleOnChangeAge(0)}
            />
          Puppy (0 - 11 months)</label>
          <label htmlFor='checkbox--1'>
            <input
              id="checkbox--1"
              type="checkbox"
              name={'adult'}
              value={'adult'}
              checked={checkedAge[1]}
              onChange={() => handleOnChangeAge(1)}
            />
          Adult (1 - 8 yrs)</label>
          <label htmlFor='checkbox--2'>
            <input
              id="checkbox--2"
              type="checkbox"
              name={'senior'}
              value={'senior'}
              checked={checkedAge[2]}
              onChange={() => handleOnChangeAge(2)}
            />
          Senior (over 8 yrs)</label>
        </div>
        <div className='btn-div'>
          <Link to="/dogs" ><button>submit</button> </Link>
        </div>
      </form>
    </div>
  )
}

export default IntroForm