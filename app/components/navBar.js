import Image from 'next/image'
import logo from '../../public/logo.png'


export default function NavBar() {
    return (
     <>
     <div id="navbar" className="flex w-full">
          <div id="logo" className='w-24 text-white text-center'>
               <b className='text-white'>Logoku</b>
          </div>
          <div id="menu" className="flex flex-row justify-center gap-6 flex-grow text-white">
             <p className=" text-lime-50 text-white">About Us</p>
             <p className=" text-lime-50 text-white">Services</p>    
             <p className=" text-lime-50 text-white">Portofolo </p>
             <p className=" text-lime-50 text-white">Join With Us</p>
             <p className=" text-lime-50 text-white">Contact US</p>
          </div>
          <div className='w-24 text-right'>
               <button className='text-white'>
                    login 
               </button>
          </div>
     </div>  
     
     </>
    )   
  }
  