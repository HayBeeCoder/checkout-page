import React, { useEffect } from 'react';
import { slides } from "./slides"
import { useState } from 'react';

function Slider({ image }) {
    const [current, setCurrent] = useState(0)
    const { length } = slides
     // const goToNext = () => {
    //     setCurrent((current === length - 1 ? 0 : current + 1))
    //     // setCurrent((current + 1) )
    // }

    // useEffect(() => {

    //     setTimeout(goToNext, 1000)
    //     return function () {
    //         clearTimeout(goToNext)
    //     }
    // }
    // )
    const goToNext = (slider) => {
      
            slider.style.transform = "translate(-20%)"
        }

        
    useEffect(() => {
        const slider = document.querySelector(".slider")

  
        setTimeout(goToNext(slider), 1000)

        slider.addEventListener("transitionend" , function(){
            slider.appendChild(slider.firstElementChild)

   
        slider.style.transition = "none"
        slider.style.transform = "translate(0)"
        setTimeout(function(){
            slider.style.transition = "all 0.5s"
        })
    })
        return function () {
            clearTimeout(goToNext)
        }
    }
    )

    if (!Array.isArray(slides) || length <= 0) {
        return null
    }



    return (
    <div className="slider h-screen w-screen flex flex-row overflow-x-hidden ">
            {/* <div>{slides[0]}</div> */}
            {/* <div>{slides[1]}</div> */}
             {
                slides.map((slide,index) => (

                    <img src={slide} alt="" className={"object-cover block w-screen h-screen"  } />
                    ))
                } 
             {/* {
                slides.map((slide,index) => (

                    <img src={slide} alt="" className={index == current ? "opacity-100 object-cover block  w-full h-full transition ease-out" : "object-cover  w-full h-full opacity-0 hidden transition ease-out"  } />
                    ))
                }  */}

                {/* <img src={slides[current]} alt="" className="opacity-100 object-cover block  w-full h-full transition ease-out"  /> */}
        </div>
    );
}

export default Slider;