import React from 'react';

function DowloadUi({ platform, children }) {
    return (
        <button className="bg-purple-800 flex gap-2 p-3 py-2 items-center rounded-lg">
            {children}
            <div className="text-white">
                <p className="text-xs">Download on</p>
                <p className="font-semibold text-sm leading-none"> {platform}</p>
            </div>
        </button>
    );
}

export default DowloadUi;