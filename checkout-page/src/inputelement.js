import React from 'react';

function inputelement({ className = "", label, children, type = "text", important = false }) {
    // const className = `${className}`
    return (
        <li className={"list-none " + className}>
            {children ||
                <div>
                    {label && <label htmlFor={label ? label.toLowerCase() : ""} className="custom-label">
                        {label + (important ? "" : " (optional)")}
                    </label>}

                    <input className=" w-full  custom-input" type={type} name={label ? label.toLowerCase() : ""} id={label ? label.toLowerCase() : ""} >
                    </input>
                </div>
            }
        </li>

    );
}

export default inputelement;