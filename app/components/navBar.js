'use client';

import Image from 'next/image'
import Logo from '../../public/whiteLogo.png'
import React, { useState } from "react";


export default function NavBar() {
     const [isOpen, setIsOpen] = useState(false);

    return (
     <>
     <div id="navbar" className="sm:flex hidden sm:w-full">
          <div id="logo" className='w-24 text-white text-center items-center'>
          <Image
               src={Logo}
               width={42}
               height={42}
               alt="Picture of the author"
          />
          </div>
          <div id="menu" className="flex flex-row justify-center gap-6 flex-grow text-white items-center">
             <p className="text-white">About Us</p>
             <p className="text-white">Services</p>    
             <p className="text-white">Portofolo </p>
             <p className="text-white">Join With Us</p>
          </div>
          <div className='w-34 text-right'>
               <button className='text-white px-4 py-1 bg-blue-500  rounded-xl'>
                    Contact Us 
               </button>
          </div>
     </div>  
     
     </>
    )   
  }
  