import Image from 'next/image'
import Logo from '../../public/whiteLogo.png'


export default function NavBar() {
    return (
     <>
     <div id="navbar" className="flex w-full">
          <div id="logo" className='w-24 text-white text-center'>
          <Image
               src={Logo}
               width={42}
               height={42}
               alt="Picture of the author"
          />
          </div>
          <div id="menu" className="flex flex-row justify-center gap-6 flex-grow text-white">
             <p className="text-white">About Us</p>
             <p className="text-white">Services</p>    
             <p className="text-white">Portofolo </p>
             <p className="text-white">Join With Us</p>
             <p className="text-white">Contact US</p>
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
  