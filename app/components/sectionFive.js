import React from 'react'
import Card3 from './cards/card3'

const sectionFive = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-auto'>
        <div className='text-4xl pb-10 font-bold'>
            Join With 
        </div>
    <div className='items-center  grid grid-rows-1 w-1/2 sm:grid-cols-3 gap-4 sm:w-full mb-12'>
      <Card3/>
      <Card3/>
      <Card3/>
    </div>
            <div className='grid grid-rows-1 sm:grid-cols-2 gap-4 w-full h-full '>
                <div className=' w-full sm:w-1/2 flex items-start text-sm justify-center flex-col'>
                  <p className='font-bold sm:text-left sm:justify-left justify-center w-full text-xl text-center'> Become A Comunity </p>
                  <p className='sm:text-left sm:justify-left justify-center w-full text-xl text-center'>You can join with Digivo as Comunity </p>
                </div>
                <div className='flex h-full w-full justify-center items-center '>
                <button className='bg-white text-black px-8 rounded-xl'>
                    Join Now
                </button>
                </div>
                
            </div>
        </div>
  )
}

export default sectionFive
