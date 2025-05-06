import React from 'react'
import Card1 from './cards/card1'

const sectionThree = () => {

  return (
<div className="flex flex-col w-full pb-12 max-h-screen ">
    <div className="flex flex-row w-full pb-8 justify-between items-center">
        <div className="text-left text-4xl font-bold w-1/2">
            What Services & Content from Us
        </div>
        <div className="w-1/2 flex items-center justify-end">
            <button className="bg-black-500 text-white px-6 py-2 rounded-lg">See More</button>
        </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-h-full overflow-auto">
        <Card1/> 
        <Card1/> 
        <Card1/> 
        <Card1/> 
    </div>
</div>

  )
}

export default sectionThree