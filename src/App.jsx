import "./App.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const buttonItem = [
    "AC",
    "DEL",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "×",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  const [calVal, setcalVal] = useState("0");

  const onButtonClick = (buttonName) => {
    if (buttonName === "AC") {
      setcalVal("0");
    }else if(buttonName === "DEL"){
      setcalVal(calVal.slice(0, -1));
    }else if (buttonName === "=") {
      try {
        const result = eval(calVal.replace("×", "*").replace("÷", "/"));
        setcalVal(result.toString());
      } catch {
        setcalVal("Error");
      }
    } else {
      const newDisplayValue = calVal === "0" ? buttonName : calVal + buttonName;
      setcalVal(newDisplayValue);
    }
  };

  return (
    <section className="bg-black text-white font-mono p-8 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 shadow-xl overflow-hidden border-4 border-white">
          <div className="p-6">
            <Display displayValue={calVal} />
            <ButtonContainer
              buttonItem={buttonItem}
              onButtonClick={onButtonClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
