import React from 'react'
import Card2 from './cards/card2'

const sectionFourth = () => {
  return (
<div className='flex flex-col w-full sm:w-full justify-center items-center min-h-screen' id='portofolio'>
    <div className='flex justify-center items-center font-bold text-4xl pb-12'>
        Portfolios & Clients
    </div>

    {/* Clients Section */}
    <div className='client pb-12 w-full  '>
      <div className='flex flex-row justify-evenly w-full '>
  {[1, 2, 3, 4].map((i) => (
    <div
      key={i}
      className="flex justify-center items-center bg-white rounded-lg shadow border p-4 hover:shadow-md transition"
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ercDncGsEV9NkGdp78EyagH6U3ZFKiLyfQ&s"
        alt={`Client ${i}`}
        className="h-10 object-contain"
      />
    </div>
  ))}

      </div>
</div>

    {/* Portfolios Section */}
    <div className='portfolios grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center w-full '>
        {/* Portfolio Card */}
        <Card2/>
        <Card2/>
        <Card2/>
    </div>
</div>

  )
}

export default sectionFourth