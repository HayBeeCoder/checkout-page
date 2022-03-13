import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Redirect } from "react-router-dom";
import NoContent from "../../NoContent";
import Button from "../../Button";
import React from 'react';
import { selectAll } from "./productsSlice";
import {useGetSingleProductQuery} from "../api/apiSlice"

function SingleProductPage({ match }) {
    const products = useSelector(selectAll)
    //instead of location hook, i used match props. looks faster kinda
    const { productId } = match.params
    
    const product = products.filter(product => product.id == productId)[0]
    
  if (!product) {
    return (
      <section>
        {/* <h2>Post not found!</h2> */}
        <Redirect to="/404/" component={NoContent}/>
      </section>
    )
  }

    return (
        // <>

        <div>
            {/* <Header /> */}
            <div className="py-8 px-5 grid grid-cols-12 items-start gap-2">
                <div className="col-start-1 col-span-8 grid grid-cols-6 gap-2 ">
                    {
                        product.image
                            .map((image, index) => (
                                <div className={index % 2 ? " bg-red-300 col-start-4 col-span-3 pb-full relative overflow-hidden" : "col-start-1 col-span-3 pb-full relative overflow-hidden bg-red-300"} >
                                    <img src={image} alt="" className="absolute top-0 left-0  w-full" />
                                </div>
                            ))
                    }
                </div>
                <div className="col-start-9 col-span-4 sticky top-5 p-2 py-1 min-h-screen">
                    <>
                        <div className="font-normal flex items-center heading-3 justify-between border-b-1 border-purple-300 pt-4 pb-2">
                            <h2 className=" ">KIDS CHELSEA BOOT</h2>
                            <p>₦78000</p>
                        </div>
                        <div className="border-b-1 border-purple-300 py-4 ">
                            <p className="text-sm pb-1">Color</p>
                            <div className="flex gap-2">

                                <button className="p-1 border-1 border-black rounded-full">
                                    <div className="w-4 h-4 rounded-full bg-black  ">

                                    </div>
                                </button>
                                <button className="rounded-full border-1 border-purple-300 p-1 border-none">
                                    <div className="w-4 h-4 rounded-full bg-purple-300">

                                    </div>
                                </button>
                                <button className="rounded-full border-1 border-yellow-300 p-1 border-none">
                                    <div className="w-4 h-4 rounded-full bg-yellow-500">

                                    </div>
                                </button>
                            </div>

                        </div>
                        <>
                            <Button className="text-white bg-purple-800 w-full my-4 mt-8 py-4 px-16" buttonFor="Add To Cart" />
                        </>
                    </>
                </div>
            </div>
            {/* <Footer /> */}

        </div>

    );
}

export default SingleProductPage;