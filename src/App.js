import React, {useState} from 'react';
// import Button from './components/Button';
// import './App.css';
import Mathy from './components/Mathy/Mathy';
function App() {

  // const [counter, modifyCounter] = useState(0);

  return (
    <div className="App">
      <Mathy num1={1} operator = {"multiply"} num2={6}></Mathy>
    </div>
  );
}

export default App;


// {counter}
      
//      <Button float= {true} size={"large"} waveEffect={true} waveColor="light" color= "blue"><i onClick = {()=>{
//        console.log("hello")
//        let tempCounter = counter;
//        tempCounter++;
//        modifyCounter(tempCounter);
//        console.log(tempCounter);
//        } }className="material-icons">add</i></Button>
//      <Button float= {false} size={"small"} waveEffect={false} waveColor="dark" color= "red"><i className="material-icons">cloud</i></Button>