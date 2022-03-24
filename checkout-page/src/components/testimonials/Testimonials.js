import React from 'react';
import Image from "../../assets/images/B29-sneaker/pic1.webp"
import { FaStar, FaRegStar, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { useState } from "react"
const customer = []

const getStars = (value) => {
    return Array(5).fill('').map((item, index) => {
        if (index + 1 <= value) return <FaStar className='inline-block mr-2' />
        else return <FaRegStar className='inline-block mr-2' />
    })

}
function Testimonials({ }) {
    const getWidth = () => window.innerWidth
    const [state, setState] = useState({
        translate: 0,
        activeIndex: 0,
        transition: 0.4
    })
    const { activeIndex, translate } = state
    console.log(translate)
    const handleClick = (e) => {
        const { direction } = e.target.dataset
        if (direction == 'left') {
            if (activeIndex == 0) {
                return setState({
                    ...state,
                })
            }
            setState({
                ...state,
                activeIndex: activeIndex - 1,
                translate: (activeIndex - 1) * getWidth()
            })
        }

        if (direction == 'right') {
            if (activeIndex == 1) {
                return setState({
                    ...state,
                })
            }
            setState({
                ...state,
                activeIndex: activeIndex + 1,
                translate: (activeIndex + 1) * getWidth()
            })
        }
        console.log(translate)
    }

    return (
        <div className='relative w-scren'>
            <div className='absolute bottom-0 transform -translate-y-32 pl-18 z-50' >
                <FaChevronLeft className='mr-3 inline-block px-4 cursor cursor-pointer hover:bg-purple-100 py-6 box-content text-3xl' onClick={handleClick} data-direction="left" />
                <FaChevronRight className='inline-block px-4  py-6 hover:bg-purple-100 cursor-pointer  box-content text-3xl font-thin ' onClick={handleClick} data-direction="right" />
            </div>

            < div className='bg-purple-200 py-28 w-full relative overflow-hidden' >
        <div className="flex w-full " style={{ transform: `translateX(-${translate}px)`, width: `${getWidth()}px` , transition: "transform ease-out 0.45s" , scrollSnapType: "both mandatory"}} >

                    <div className='flex-shrink-0 w-full  px-14 inline-flex gap-8 justify-between relative' style={{scrollSnapAlign: "center"}}>

                        <div className=' w-3/6 flex-shrink'>
                            <p className='text-base font-semibold'>From the people</p>
                            <div>
                                {getStars(4)}
                            </div>
                            <p className='my-3 text-3xl'>
                                <q className='not-italic'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat animi totam vero voluptate ea assumenda, cupiditate labore? Minima sit perferendis praesentium vitae explicabo nobis, tempore optio doloribus. Enim, aperiam.</q>
                            </p>
                        </div>
                        <div className='w-2/6 flex-shrink-0 bg-purple '>
                            {/* <Image /> */}
                            <div className='w-full relative h-auto'>

                                <img src={Image} alt="product" className='w-full' />
                            </div>
                            <Link >
                                <p className='font-semibold text-base underline my-3'>
                                    shop B29 sneaker
                                </p>
                            </Link>
                            {/* <img src="../../assets/images/B29-sneaker/pic1.webp" alt="product"/> */}
                        </div>
                    </div>
                    <div className='flex-shrink-0 w-full flex-grow  px-14 inline-flex gap-8 justify-between relative' style={{scrollSnapAlign: "center"}}>

                        <div className=' w-3/6 flex-shrink'>
                            <p className='text-base font-semibold'>From the people</p>
                            <div>
                                {getStars(4)}
                            </div>
                            <p className='my-3 text-3xl'>
                                <q className='not-italic'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat animi totam vero voluptate ea assumenda, cupiditate labore? Minima sit perferendis praesentium vitae explicabo nobis, tempore optio doloribus. Enim, aperiam.</q>
                            </p>
                        </div>
                        <div className='w-2/6 flex-shrink-0 bg-purple '>
                            {/* <Image /> */}
                            <div className='w-full relative h-auto'>

                                <img src={Image} alt="product" className='w-full' />
                            </div>
                            <Link >
                                <p className='font-semibold text-base underline my-3'>
                                    shop B29 sneaker
                                </p>
                            </Link>
                            {/* <img src="../../assets/images/B29-sneaker/pic1.webp" alt="product"/> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Testimonials;