import React from 'react'
import Card1 from './cards/card1'

const sectionThree = () => {

  return (
<div className="flex flex-col w-full mb-48 justify-center items-center">
    <div className="flex flex-row w-full pb-8 justify-between items-center">
        <div className="sm:text-left text-4xl font-bold w-full mb-4 text-center">
            What Services & Content from Us
        </div>
       
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full justify-items-center">
        <Card1/> 
        <Card1/> 
        <Card1/> 
    </div>
</div>

  )
}

export default sectionThree