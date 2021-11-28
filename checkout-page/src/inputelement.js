import React from 'react';

function inputelement({ inputClassName, className = "", label, children, type = "text", important = false, placeholder = "" }) {
    // const className = `${className}`
    return (
        <li className={"list-none " + className}>
            {children ||
                <div>
                    {label && <label htmlFor={label ? label.toLowerCase() : ""} className="custom-label">
                        {label + (important ? "" : " (optional)")}
                    </label>}

                    <input className={" w-full  custom-input " + inputClassName} type={type} name={label ? label.toLowerCase() : ""} id={label ? label.toLowerCase() : ""} placeholder={placeholder} />

                </div>
            }
        </li >

    );
}

export default inputelement;