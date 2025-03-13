import Image from 'next/image'
import logo from '../../public/logo.png'


export default function NavBar() {
    return (
     <>
     <div id="navbar" className="flex flex-row justify-evenly w-full px-60 py-8">
          <div id="logo" className='flex flex-row w-full'>
               <b className='text-white'>Logoku</b>
          </div>
          <div id="menu" className="flex flex-row justify-between w-full">
             <p className=" text-lime-50 text-white">Tentang kami</p>
             <p className=" text-lime-50 text-white">Layanan </p>    
             <p className=" text-lime-50 text-white">Portofolo </p>
             <p className=" text-lime-50 text-white">Comunity</p>
          </div>
     </div>  
     
     </>
    )   
  }
  