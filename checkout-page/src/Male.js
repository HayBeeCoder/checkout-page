import React, { Component } from 'react';
import Header from './Header';
// import { products } from ''
class Male extends Component {
    render() {
        return (
            <div>
                <Header landingpage={false} />
                <div className="p-7 bg-gray-500">
                    <div className="h-full flex flex-col justify-center items-center bg-orange">
                        <h1 className="text-3xl font-bold leading-3 m-3">THIS IS THE HOMEPAGE.</h1>
                        <p>click on <strong>cart symbol in navigation bar</strong> &gt; <strong> checkout </strong> </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Male;