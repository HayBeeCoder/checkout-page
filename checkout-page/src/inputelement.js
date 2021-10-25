import React from 'react';

function inputelement({ className = "", label, children }) {
    // const className = `${className}`
    return (
        <li className={"list-none " + className}>
            {children ||
                <div>
                    {label && <label htmlFor={label ? label.toLowerCase() : ""} className="custom-label">
                        {label}
                    </label>}
                    
                    <input className=" w-full  custom-input" type="text" name={label ? label.toLowerCase() : ""} id={label ? label.toLowerCase() : ""} />
                </div>
            }
        </li>

    );
}

export default inputelement;