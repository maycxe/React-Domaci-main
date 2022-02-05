import React, {useState} from 'react'
import Button from './components/Button';
import TextBox from './components/TextBox';
import './FormBMI.css';

function FormBMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmiResult, setBmiResult] = useState(null);

  const [status, setStatus] = useState("");

  function calculateBMI(e) {
    e.preventDefault();
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

  }

  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
  }

  return (
    <div className="form-content-right-bmi">
      <form className="form">
          <h1>
              Enter your details below and find out your Body Mass Index and BMI category!
          </h1>
          <div className="form-inputs">
              <label htmlFor="height" className="form-label">
                  Height
              </label>
              <TextBox 
                  id="height" 
                  type="text" 
                  name="height" 
                  placeholder="Height in cm" 
                  value={height} 
                  onChange={(e) => setHeight(e.target.value)}
              />
          </div>
          <div className="form-inputs">
              <label htmlFor="weight" className="form-label">
                  Weight
              </label>
              <TextBox 
                  id="weight" 
                  type="text" 
                  name="weight" 
                  placeholder="Weight in kg" 
                  value={weight} 
                  onChange={(e) => setWeight(e.target.value)}
              />
          </div>
          <Button className="form-input-btn-bmi" text="Calculate" onClick={(e) => calculateBMI(e)}/>
          <span className="form-input-bmi">
              Note: resulting values shouldn't be taken too seriously. For more accurate results, go and see a doctor!
          </span>
          
          {bmiResult && (
            <div className="mt-4">
              <p className="form-input-bmi">Your BMI is: <b>{bmiResult}</b> </p>
              <p className="form-input-bmi">You are currently: <b>{status}</b></p>
            </div>
          )}
      </form>
        
    </div>
  );
}

export default FormBMI
