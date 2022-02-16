import React, {useState} from "react";

// COMPONENTS
import IntroForm from "./Components/IntroForm";
import ListDogs from "./Components/ListDogs";

function App() {
  const [checkedSize, setCheckedSize] = useState(
    new Array(3).fill(false)
  )
  const [checkedAge, setCheckedAge] = useState(
    new Array(3).fill(false)
  )

  return (
    <div className="App">
      <IntroForm checkedSize={checkedSize} setCheckedSize={setCheckedSize} checkedAge={checkedAge} setCheckedAge={setCheckedAge}/>
      <ListDogs checkedSize={checkedSize} checkedAge={checkedAge} />
    </div>
  );
}

export default App;