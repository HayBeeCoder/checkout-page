import React, { Component } from 'react';
// import Header from './Header';
import { useLocation } from 'react-router';
// import Products from './Products';
import { useSelector } from "react-redux"
import { useGetProductsQuery } from '../api/apiSlice';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { selectAll } from './productsSlice';
import { Link } from "react-router-dom"

function Products(props) {

    const {
        data = [],
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetProductsQuery()

    console.log(" This is the server response: " , data)
    console.log("is it loading? " , isLoading)
    const products = useSelector(selectAll)
    // console.log(products)
    const location = useLocation();
    const category = location.pathname.split("/")[2]
    // console.log(category)
    // const filtered_products = products.filter(product => product.category == category)
    // const filtered_products = data.data.filter(product => product.category == category)
    // console.log(products)
    return (
        <div>
            {!isLoading && "currently loading shit man damn!"}
            {/* <Header landingpage={false} /> */}
            <div className="py-7 ">
                <div className="sm:px-2 px-5">
                    {/* <h1 className="text-3xl font-bold leading-3 m-3">THIS IS THE HOMEPAGE.</h1>
                        <p>click on <strong>cart symbol in navigation bar</strong> &gt; <strong> checkout </strong> </p>   
                 */}
                    <div className="uppercase text-3xl font-normal py-10 ">{category + '\'s clothing and apparel'}</div>

                    <div className=" w-full  grid lg:grid-cols-3 md:grid-cols-2  grid-cols-4  gap-two">
                        {/* <div className="w-full"> */}


                        {/* {filtered_products */}
                        {!isLoading && data.data.map((product) =>
                        // collection_in={filtered_products}
                                <div key={product.id} className="rounded overflow-hidden drop-shadow-sm mb-5 sm:w-full " >
                                    {/* <Link to={'/collections/' + product.category + '/product/' + product.id} > */}
                                    <Link to={`/collections/${product.categories[0]}/product/${product._id}`} >
                                        {/* <Link to={'/collections/' + product.category + '/' + product.id} > */}
                                        <span>{product.categories[0]}</span>
                                        <span>{product._id}</span>
                                        <div className="relative w-full">
                                            <div className="relative pb-full bg-purple-400 overflow-hidden">
                                                <img src={product.images[0]} alt={product.title} className="absolute top-0 left-0 " />
                                            </div>
                                            <div className="absolute top-0 right-0 p-3">
                                                <AiOutlineHeart className="text-2xl" />
                                                {/* <AiFillHeart className="text-2xl" /> */}
                                            </div>
                                            <div className="absolute bottom-0 left-0 font-bold text-xs bg-white p-1 px-2">
                                                {/* <p>calculated discount</p> */}
                                                <p>${product.price}</p>
                                            </div>
                                        </div>
                                        <div className="p-4 ">
                                            <p className="text-sm font-semibold">{product.title}</p>
                                            <p className="font-light text-sm">4 colors available</p>

                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    </div >
                </div>
            </div>
        </div>
    );
}

export default Products;