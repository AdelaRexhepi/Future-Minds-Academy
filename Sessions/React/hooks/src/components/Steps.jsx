import { useState } from "react";
import "./assets/Styles/style.css"

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true)
  
  function incremeant(){
    step < 3 && setStep(prev=> prev+1) 
  }
  // if(step < 3){
  //   setStep(prev=> prev+1)
  // }
  function decremeant(){
    step > 1 && setStep(prev=> prev-1)
  }
  // if(step > 1){
  //   setStep(prev=> prev-1)
  // }

  function hide(){
    setIsOpen((open) => !open)
  }
  return (
    <>
    <button onClick={hide} className="close">&times;</button>
    {isOpen && (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">Step {step} 'Message:{messages[step -1]}'</p>

      <div className="buttons">
        <button onClick={decremeant}
        style={{ backgroundColor: "#7950f2", color: "#fff" }}
          // disabled={step === 1}
        >
          Previous
        </button>
        <button onClick={incremeant} 
        style={{ backgroundColor: "#7950f2", color: "#fff" }}
        // disabled={step === 3}
        >
          Next
        </button>
      </div>
    </div>
  )}
    </>
  );
}

export default App;