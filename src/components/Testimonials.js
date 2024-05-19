import React from 'react'
import Card from './Card'
import { PiClockCounterClockwiseBold, PiClockClockwiseBold  } from "react-icons/pi";
import { useState } from 'react';


const Testimonials = (props) => {
    let reviews = props.reviews
    const[index, setIndex] = useState(0)
    function leftHandler(){
        if(index - 1 < 0){
            setIndex(reviews.length-1)
        }
        else{
            setIndex(index-1);
        }
    }
    function rightHandler(){
        if(index + 1>= reviews.length){
            setIndex(0)
        }
        else{
            setIndex(index+1);
        }
    }
    function surpriseHandler(){
        let random = Math.floor(Math.random() * reviews.length);
        setIndex(random);
    }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10
    transition-all duration-700 hover:shadow-2xl rounded-md'>
        
        <Card review = {reviews[index]}></Card>


        <div className='flex text-3xl mt-10 gap-10 font-bold text-violet-400 mx-auto'>
            <button onClick={leftHandler} className='cursor-pointer hover:text-violet-700'>
                <PiClockCounterClockwiseBold/>
            </button>
            <button onClick={rightHandler} className='cursor-pointer hover:text-violet-700'>
                <PiClockClockwiseBold/>
            </button>
        </div>

        <div className='mt-6'>
            <button onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-700 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold
            text-white text-lg'>Choose Random</button>
        </div>

    </div>
  )
}

export default Testimonials