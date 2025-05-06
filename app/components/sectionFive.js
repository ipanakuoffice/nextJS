import React from 'react'
import Card3 from './cards/card3'

const sectionFive = () => {
  return (
    <div className='flex flex-col w-full h-auto'>
        <div className='text-4xl pb-10 font-bold'>
            Join With Digivo Comunity
        </div>
    <div className='grid grid-cols-3 gap-4 w-full mb-12'>
      <Card3/>
      <Card3/>
      <Card3/>
    </div>
        <div className='joinWithUs px-8 rounded-2xl bg-blue-500 flex flex-col items-center justify-center h-24'>
            <div className='grid grid-cols-2 gap-4 w-full h-full '>
                <div className='w-1/2 flex items-start text-sm justify-center flex-col'>
                  <p className='font-bold text-left justify-left w-full text-xl'> Become A Comunity </p>
                  <p>You can join with Digivo as Comunity </p>
                </div>
                <div className='flex h-full w-full justify-center items-center '>
                <button className='bg-white text-black px-8 rounded-xl'>
                    Join Now
                </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default sectionFive
