import React from 'react'

const TextBox = ({id, type, name, placeholder, value, onChange}) => {
    return (
        <input
                        id={id} 
                        type={type} 
                        name={name} 
                        className="form-input"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
    )
} 

export default TextBox
