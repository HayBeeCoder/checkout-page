import React from 'react';
import Header from './components/header/Header';
import { Link} from "react-router-dom"
import Footer from './components/footer/Footer'
function NoContent(props) {
    return (
        <div>
            <Header landingpage={false}/>
            <div className="text-center py-20">
                <h2 className="heading-2 m-0 font-normal">Hmm. We can’t find the page you’re looking for.</h2>
                <p>Sorry for the inconvenience. Go to our <Link to="/" className="text-purple-800 border-purple-800 border-b-1 border-solid">Homepage</Link></p>
            </div>
            <Footer/>
        </div>
    );
}

export default NoContent;