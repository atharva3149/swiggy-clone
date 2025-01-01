import React, { useEffect, useRef, useState } from 'react'
import Card from './Card';

export default function OnlineDelivery() {

    
    const [data,setData] = useState([]);
    const componentRef = useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (componentRef.current) {
          const rect = componentRef.current.getBoundingClientRect();
          const isTop = rect.top <= 0;
          setIsAtTop(isTop);
        }
      };
  
      // Listen to scroll events
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup event listener on unmount
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    const fetchTopRestaurant = async()=>{
        const response = await fetch("http://localhost:5000/top-restaurant-chains");
        const apiData = await response.json();
        setData(apiData);  
    }
    
    useEffect(()=>{
           fetchTopRestaurant();
    },[]
    )
  return (
   <div  className='max-w-[1200px] mx-auto ' ref={componentRef}>    
       <div className='flex my-5 items-center justify-between'>
           <div className='text-[25px] font-bold'>Restaurants With Online Food Delivery In Dombivli </div>
       </div>
       <div   className={isAtTop ? "fixed top-0 z-[999999] bg-white w-full left-0" : ""}>
        <div className='max-w-[1200px] mx-auto flex my-4 gap-3 border border-red-500'>
            <div className='p-3 rounded-md bg-slate-300'>Filter</div>
            <div className='p-3 rounded-md bg-slate-300'>Sort By</div>

        </div>
       </div>
       <div className='grid grid-cols-4 gap-3'>
          {
            data.map(
                (d,i)=>{
                  return <Card {...d} key={i}/>
                }
            )
          }
       </div>

    </div>
  )
}
