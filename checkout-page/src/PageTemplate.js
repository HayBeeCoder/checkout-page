import React from 'react';
import Header from "./Header";
import Summary from "./summary";
import Progress from './progress';
function PageTemplate({ children }) {
    return (
        <div className="font-display h-screen  mx-auto">
            <Header />
            {children}
        </div>
    );
}

export default PageTemplate;