import React from 'react';
import Header from '../../../components/header/Header';
// import Footer from '../../components/footer/Footer';
// import { Link } from 'react-router-dom';
// import InputElement  from "../../inputelement"
// import Button from '../../Button';
import AccountSidebar from "./AccountSidebar"
import Footer from "../../../components/footer/Footer"

function AccountTemplate({children}) {
    return (
        <div >
            <Header />
            <main className='grid grid-cols-12 py-20 px-48'>
                 {children}
            </main>
            <Footer />
        </div>
    );
}

export default AccountTemplate;