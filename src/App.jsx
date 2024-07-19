import "./App.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
function App() {
  const buttonItem = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
 
  const [calVal , setcalVal] = useState("");
  const onButtonClick = (buttonName) =>{

  if(buttonName === 'C'){
    setcalVal('');
  }else if(buttonName === '='){
    const result = eval(calVal);
    setcalVal(result);
  }else{
    const newDisplayValue = calVal + buttonName;
    setcalVal(newDisplayValue);
  }
  }


  return (
    <div className="calculator">
      <Display displayValue = {calVal}></Display>
      <ButtonContainer buttonItem={buttonItem}
      onButtonClick = {onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
