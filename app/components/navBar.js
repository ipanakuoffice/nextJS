import Image from 'next/image'
import logo from '../../public/logo.png'


export default function NavBar() {
    return (
        <>  
     <div id="logo"><b>Logoku</b></div>
        <div id="menu" className="flex-1 flex flex-row justify-evenly w-64">
             <h1 className="font-bold text-lime-50">Layanan </h1>    
             <h1 className="font-bold text-lime-50">Portofolo </h1>
             <h1 className="font-bold text-lime-50">Tentang kami </h1>
        </div>
        <div id="sosmed" className=" w-32 flex justify-center">
             instagram 
        </div>
        </>
    )   
  }
  