import React from 'react';
import FormTDEE from './FormTDEE';
import './FormTDEE.css';

const FormOne = () => {

    return (
        <>
            <div className="form-container">
                <div className="form-content-left">
                    <img src="img/img2.svg" alt="blue-meditating" className="form-img"/>
                </div>
                <FormTDEE/>
            </div>
        </>
    )
} 

export default FormOne
