import React from 'react'


const sectionTwo = () => {
  return (
    <div className='flex flex-col justify-center h-screen'>
        <div className='row1 grid grid-cols-2 gap-4 '>
            <div>
                <h1 className='font-bold text-4xl'> Who Is Digivo Comunity </h1>
            </div>
            <div className='pb-8'>
                <p>
                    With a strong commitment to empowering individuals and communities, Diygta Foundation focuses on impactful small steps to create a better future. Through education, healthcare, and economic empowerment programs, we believe that every small step brings us closer to sustainable positive change.
                </p>
                <button>
                    See More
                </button>
            </div>
        </div>
        <div className='rounded-2xl h-64 text-center flex justify-center items-center'>
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