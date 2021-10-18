import React from 'react';

function inputelement({ col, label, children }) {
    const classes = `${col}`
    return (
        <li className={classes}>
            {children ||
                <div>
                    <label htmlFor={label.toLowerCase()} className="custom-label">
                        {label}
                    </label>
                    <input className=" w-full custom-input" type="text" name={label.toLowerCase()} id={label.toLowerCase()} />
                </div>
            }
        </li>

    );
}

export default inputelement;