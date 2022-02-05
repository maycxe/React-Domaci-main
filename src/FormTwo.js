import React from 'react';
import FormBMI from './FormBMI';
import './FormBMI.css';

const FormTwo = () => {

    return (
        <>
            <div className="form-container">
                <FormBMI/>
                <div className="form-content-left-bmi">
                    <img src="img/img1.svg" alt="green-meditating" className="form-img"/>
                </div>
            </div> 
        </>
    )
}

export default FormTwo