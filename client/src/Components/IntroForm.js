import React, {useState, useEffect} from 'react'

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

    // console.log("checked age in introform component", checkedAge);


  return (
    <div>
      <form>
        <div className="size-options">
          <h3>Select size preference</h3>
          <input
            id="checkbox--0"
            type="checkbox"
            name={'small'}
            value={'small'}
            checked={checkedSize[0]}
            onChange={() => handleOnChange(0)}
          />
          <label htmlFor='checkbox--0'>Small</label>
          <input
            id="checkbox--1"
            type="checkbox"
            name={'medium'}
            value={'medium'}
            checked={checkedSize[1]}
            onChange={() => handleOnChange(1)}
          />
          <label htmlFor='checkbox--1'>Medium</label>
          <input
            id="checkbox--2"
            type="checkbox"
            name={'large'}
            value={'large'}
            checked={checkedSize[2]}
            onChange={() => handleOnChange(2)}
          />
          <label htmlFor='checkbox--2'>Large</label>
        </div>

        <div className="age-options">
          <h3>Select age preference</h3>
          <input
            id="checkbox--0"
            type="checkbox"
            name={'puppy'}
            value={'puppy'}
            checked={checkedAge[0]}
            onChange={() => handleOnChangeAge(0)}
          />
          <label htmlFor='checkbox--0'>Puppy (0 - 11 months)</label>
          <input
            id="checkbox--1"
            type="checkbox"
            name={'adult'}
            value={'adult'}
            checked={checkedAge[1]}
            onChange={() => handleOnChangeAge(1)}
          />
          <label htmlFor='checkbox--1'>Adult (1 - 8 yrs)</label>
          <input
            id="checkbox--2"
            type="checkbox"
            name={'senior'}
            value={'senior'}
            checked={checkedAge[2]}
            onChange={() => handleOnChangeAge(2)}
          />
          <label htmlFor='checkbox--2'>Senior (over 8 yrs)</label>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default IntroForm