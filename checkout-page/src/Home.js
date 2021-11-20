import React, { Component } from 'react';
import Header from './Header';
class Home extends Component {
    render() {
        return (
            <div>
                <Header landingpage={false} />
                <div className="h-screen bg">
                    <div className="h-full flex flex-col justify-center items-center">
                        <h1 className="text-3xl font-bold leading-3 m-3">THIS IS THE HOMEPAGE.</h1>
                        <p>click on <strong>cart symbol in navigation bar</strong> &gt; <strong> checkout </strong> </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;