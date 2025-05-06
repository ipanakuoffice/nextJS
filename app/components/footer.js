import React from 'react'

const footer = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-9 sm:gap-3 w-full'>
        <div className='flex flex-col items-center justify-center w-full'>
            <h1 className='mb-6 font-bold'>
                Digivo Comuntiy
            </h1>
            <div>
                <h1 className='flex flex-col justify-center items-center'>
                    Address
                </h1>
                <p className='flex flex-col justify-center items-center align-middle w-full text-center'>icikiwir jalan raya no 19</p>
            </div>

            <div>
                <h1 className='flex flex-col justify-center items-center'>Contact</h1>
                <p>08123819239109</p>
            </div>
        </div>
        <div className='flex flex-col items-center'>
            <b className='mb-6 font-bold'>Menu</b>
            <p>Home</p>
            <p>About Us</p>
            <p>Program</p>
            <p>Join</p>
        </div>
        <div className='flex flex-col items-center'>
        <b className='mb-6'>Menu</b>
            <p>Home</p>
            <p>About Us</p>
            <p>Program</p>
            <p>Join</p>
        </div>
        <div className='mb-12 flex flex-col justify-center items-center w-full'>
            <div className='mb-6'>
                <b >Quick Action</b>
            </div>
            <div className='flex flex-col lg:flex-row w-full sm:w-full gap-3'>
                <div className='bg-slate-500 rounded-2xl px-6 text-sm text-center flex items-center justify-center py-1'>
                    Join Comuntiy
                </div>
                <div className='bg-black rounded-2xl px-6 py-1 text-sm text-center flex items-center justify-center'>
                    Discuss Now
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer