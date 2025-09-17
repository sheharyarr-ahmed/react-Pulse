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
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    // alert("NEXT");
    if (step < 3) setStep(step + 1);
    // nameObj.name = "hamza"; this is not the right way instead use the setName function or the updater function always update the state variable using the updater function
    // setName({ name: "yoyo" }); // this the right way to uodate the nameObj by using its setName updater function
    // console.log(nameObj.name);
    // console.log(nameObj);
  }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2 </div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              // onClick={() => alert("you clicked on previous")}
              onClick={handlePrevious} //passing the function not calling it
            >
              PREVIOUS
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              NEXT
            </button>
          </div>
        </div>
      )}{" "}
    </div>
  );
}
