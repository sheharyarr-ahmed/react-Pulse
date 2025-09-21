import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  // this use state returns the state variable and the function, in the parathesis pf use state is the current value of the state variable hta tis step and the setStep is the updater function,, use state is also known as react hook as it reuturns an array of two values, the state variable and the updater function
  const [step, setStep] = useState(1);
  // const [nameObj, setName] = useState({ name: "sheharyar" });
  // const step = 1;
  function handlePrevious() {
    // alert("PREVIOUS");
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    // alert("NEXT");
    if (step < 3) setStep((s) => s + 1);
    // nameObj.name = "hamza"; this is not the right way instead use the setName function or the updater function always update the state variable using the updater function
    // setName({ name: "yoyo" }); // this the right way to uodate the nameObj by using its setName updater function
    // console.log(nameObj.name);
    // console.log(nameObj);
  }
  // here children represents an child prop which is an ore defined keyword
  function Button({ textColor, bgColor, onClick, children }) {
    return (
      <button
        style={{ backgroundColor: bgColor, color: textColor }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  function StepMessage({ step, children }) {
    return (
      <div className="message">
        <h3>Step {step}</h3>
        {children}
      </div>
    );
  }

  return (
    <>
      {/* the fragment’s purpose here was to allow you to return both the button and the steps container as siblings */}
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        {/* this is called chanigng state based on current data, When the button is clicked, take the latest value of isOpen, flip it, and update the state with that new value.” */}
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2 </div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <Button
              bgColor="#e7e7e7"
              textColor="#333"
              onClick={() => alert(`LEARN HOW TO ${messages[step - 1]}`)}
            >
              LEARN HOW
            </Button>
          </StepMessage>
          <div className="buttons">
            {/* now here comes the fun part now here we will implement the child prop part */}
            <Button
              textColor="#fff"
              bgColor="#7950f2"
              onClick={handlePrevious}
              // text="Previous"
              // emoji="👈🏻"
            >
              <span>👈🏻</span>Previous
            </Button>
            {/* implementation of teh child prop */}
            <Button
              textColor="#fff"
              bgColor="#7950f2"
              onClick={handleNext}
              // text="Next"
              // emoji="👉🏻"
            >
              <span>👉🏻</span>Next
            </Button>
          </div>
        </div>
      )}{" "}
    </>
  );
}
