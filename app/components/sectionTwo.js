import React from 'react'


const sectionTwo = () => {
  return (
    <div className='flex flex-col justify-center sm:w-full'>
        <div className='row grid-rows-1 sm:grid-cols-2 gap-4 w-full '>
            <div>
                <h1 className='font-bold text-4xl'> Who Is Digivo Comunity </h1>
            </div>
            <div className='pb-8'>
                <p>
                    With a strong commitment to empowering individuals and communities, Diygta 
                </p>
            </div>
        </div>
        <div className='rounded-2xl h-64 text-center flex justify-center items-center mb-12'>
        <video
            src="/videos/brnadVid.mp4"
            className="h-full object-cover w-3/4 rounded-2xl"
            controls
            autoPlay
            muted
            loop
        />
        </div>
    </div>
  )
}

export default sectionTwo