import React from 'react';
import { useLocation } from 'react-router';
import {products} from './models/data'
function Product({}) {
  const location = useLocation();
  const id = location.pathname.split("/")[2]
  const product = products.filter(product => product.id == id)[0]

    return (
        <div>
      <h1 className="flex place-items-center bg-purple-300">OGUNTADE ABASS</h1>  
        </div>
    );
}

export default Product;