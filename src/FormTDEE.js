import React, {useState} from 'react'
import Button from './components/Button';
import TextBox from './components/TextBox';
import Select from 'react-select';
import './FormTDEE.css';

function FormTDEE() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState("");
  const [gender, setGender] = useState("");
  const [intake, setIntake] = useState("");

  const [tdeeResult, setTdeeResult] = useState(null);

  function calculateTdee(e) {
    e.preventDefault();
    let bmr;
    if(gender === "Male"){
        bmr = Number(88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)).toFixed(0);
    } else {
        bmr = Number(447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)).toFixed(0);
    }
    setTdeeResult(bmr);

    let intake = getIntake(activity, bmr);

    setIntake(intake);
}


  function getIntake(activity, bmr) {
    if (activity === 'Sedentiary') return Number(bmr)+360;
    else if (activity === 'Light Exercise') return Number(bmr)+680;
    else if (activity === 'Moderate Exercise') return Number(bmr)+1000;
    else return Number(bmr)+1310;
  }

  return (
    <div className="form-content-right">
    <form className="form">
        <h1>
            Enter your details below and find out your Basic Metabolic Rate and suggested calories intake!
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
        <div className="form-inputs">
            <label htmlFor="age" className="form-label">
                Age
            </label>
            <TextBox 
                id="age" 
                type="text" 
                name="age" 
                placeholder="Age" 
                value={age} 
                onChange={(e) => setAge(e.target.value)}
            />
        </div>
        <div className="form-inputs">
            <label htmlFor="gender" className="form-label">
                Gender
            </label>
            <Select 
                id="gender" 
                name="gender" 
                options={[{ value: 'Male', label: 'Male' },
                            { value: 'Female', label: 'Female' }]} 
                onChange={(e) => setGender(e.value)}
            />
        </div>
        <div className="form-inputs">
            <label htmlFor="activity" className="form-label">
                Activity
            </label>
            <Select 
                id="activity" 
                name="activity" 
                options={[{ value: 'Sedentiary', label: 'Sedentiary' },
                            { value: 'Light Exercise', label: 'Light Exercise' },
                            { value: 'Moderate Exercise', label: 'Moderate Exercise' },
                            { value: 'Heavy Exercise', label: 'Heavy Exercise' }]} 
                onChange={(e) => setActivity(e.value)}
            />
        </div>
        <Button className="form-input-btn" text="Calculate" onClick={(e) => calculateTdee(e)}/>
        
        {tdeeResult && (
          <div>
            <p className="form-input-bmr">Your Basal Metabolic Rate is: {tdeeResult} calories/day</p>
            <p className="form-input-bmr">Based on your activity levels, your maintenance is: {intake} calories/day</p>
          </div>
        )}
    </form>
        
    </div>
  );
}

export default FormTDEE