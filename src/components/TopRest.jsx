import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong, FaArrowRight } from 'react-icons/fa6'
import Card from './Card';

export default function TopRest() {

const [slide , setSlide] = useState(0);

const [data,setData] = useState([]);

const fetchTopRestaurant = async()=>{
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData = await response.json();
    setData(apiData);  
}

useEffect(()=>{
       fetchTopRestaurant();
},[]
)
const prevSlide = () => {
    if (slide <= 0) return; // Prevent negative slide values
    setSlide(slide - 3); // Move back 3 slides
};

const nextslide = () => {
    const visibleCount = 4; // Adjust based on the number of visible items
    if (slide + visibleCount >= data.length) return; // Prevent exceeding data length
    setSlide(slide + 3); // Move forward 3 slides
};

    
  return (
    <div  className='max-w-[1200px] mx-auto'>
    <div className='flex my-5 items-center justify-between'>
        <div className='text-[25px] font-bold'> Top Restaurants In Dombivli </div>
        <div className='flex'>
           <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' 
           onClick={prevSlide}
           >
            <FaArrowLeftLong/>
            </div>
           <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' 
           onClick={nextslide}
           >
             <FaArrowRight />
             </div>
        </div>
    </div>
    <div className='flex gap-5 overflow-hidden'>
    {
        data.slice(slide, slide + 4).map((d, i) => {
            return <Card {...d} key={i} />;
        })
    }
</div>

           <hr className='my-4 border-[1px]'/>
    </div>
  )
}
