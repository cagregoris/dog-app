import React, {useState} from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

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
    <Router >
      <Routes>
          <Route path='/' exact element={<IntroForm checkedSize={checkedSize} setCheckedSize={setCheckedSize} checkedAge={checkedAge} setCheckedAge={setCheckedAge} />} />
          <Route path='/dogs' exact element={<ListDogs checkedSize={checkedSize} checkedAge={checkedAge} />} />
          
      </Routes>
    </Router>
    </div>
  );
}

export default App;