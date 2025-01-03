import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";

export default function Header() {

    const [ toggle , setToggle ] = useState(false);

    const showSideMenu = () =>{
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    const links = [
        {
            icons :<IoIosSearch/>,
            name:"Search"

        },
        {
            icons :<CiDiscount1/>,
            name:"Offers",
            sup:"New"
        },
        {
            icons :null,
            name:"Help"
        },
        {
            icons :null,
            name:"SignIn"
        },
        {
            icons :null,
            name:"Cart",
            sup:"0"
        }

    ]

  return (
    <>
    <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
        opacity : toggle ? 1 :0,
        visibility: toggle ? 'visible' : 'hidden'
    }} >
        <div onClick={(e)=>{
            e.stopPropagation();
        }} className='w-[500px] bg-white h-full absolute duration-[600ms] '
        style={{
            left: toggle ? '0%' : '-100%',
        }}
        ></div>
    </div>
   <header className='p-[15px] shadow-xl sticky top-0 bg-white z-[9999]' >
     <div className='max-w-[1200px] mx-auto flex items-center'>
        <div className='w-[100px] '>
            <img src="images/logo.png" className='w-full' alt="" />
        </div>
        <div className=''>
        <span className='font-bold border-b-[3px] border-[black]'>Dombivli</span>  Mumbai , Maharashtra , India
        <RxCaretDown onClick={showSideMenu} fontSize={25} className='font-bold inline text-[#fc8019] '/>
        </div>
     <nav className='flex list-none gap-10 ml-auto text-[18px] font-semibold '>
        
      {
        links.map(
            (link,index) =>{
               return <li key={index} className='flex hover:text-[#fc8019] items-center gap-2'>
                    {link.icons}
                    {link.name}
                    <sup>{link.sup}</sup>
                </li>
            }
        )
      }
     </nav>
     </div>
   </header>
   </>
  )
}
