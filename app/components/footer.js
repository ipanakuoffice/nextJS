import React from 'react'

const footer = () => {
  return (
    <div className='grid grid-cols-4 gap-3 w-full'>
        <div className='flex flex-col'>
            <h1 className='mb-6'>
                Digivo <br/> Comuntiy
            </h1>
            <div>
                <h1 className=''>
                    Address
                </h1>
                <p>icikiwir jalan raya no 19</p>
            </div>

            <div>
                <h1>Contact</h1>
                <p>08123819239109</p>
            </div>
        </div>
        <div className='flex flex-col'>
            <b>Menu</b>
            <p>Home</p>
            <p>About Us</p>
            <p>Program</p>
            <p>Join</p>
        </div>
        <div>
        <b>Menu</b>
            <p>Home</p>
            <p>About Us</p>
            <p>Program</p>
            <p>Join</p>
        </div>
        <div>
            <div className='mb-12'>
                <b >Quic Action</b>
            </div>
            <div className='flex flex-row w-full gap-3'>
                <div className='bg-slate-500 rounded-2xl px-6 text-center flex items-center justify-center py-2'>
                    Join Comuntiy
                </div>
                <div className='bg-black rounded-2xl px-6 text-center flex items-center justify-center'>
                    Discuss Now
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer