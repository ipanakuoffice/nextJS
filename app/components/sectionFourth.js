import React from 'react'
import Card2 from './cards/card2'

const sectionFourth = () => {
  return (
<div className='flex flex-col w-full mb-12 h-screen justify-center items-center'>
    <div className='flex justify-center items-center font-bold text-4xl pb-12'>
        Portfolios & Clients
    </div>

    {/* Clients Section */}
    <div className='client px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pb-12'>
  {/* Card Client */}
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

    {/* Portfolios Section */}
    <div className='portfolios grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 '>
        {/* Portfolio Card */}
        <Card2/>
        <Card2/>
        <Card2/>
    </div>
</div>

  )
}

export default sectionFourth