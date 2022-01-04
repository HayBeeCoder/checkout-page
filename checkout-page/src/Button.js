import React from 'react';

function Button({ className, buttonFor }) {
    return (
        <div>
            {/* space after literal string before contatenation */}
            <button className={" text-sm px-4 py-2 rounded-md tracking-wider hover:opacity-90" + className}>
                {buttonFor}
            </button>
        </div>
    );
}

export default Button;