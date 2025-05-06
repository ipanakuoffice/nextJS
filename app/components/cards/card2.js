import React from 'react'

const card2 = () => {
  return (
    <div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full">
            <a href="#">
                <img
                    className="rounded-t-lg h-48 w-full object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYL85X1FPOZVntkPsu3J3Dp842I0INd7v8ew&s"
                    alt="Portfolio"
                />
            </a>
            <div className="p-5 flex flex-col flex-grow">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy Technology Acquisitions 2021
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 text-sm dark:text-gray-400 flex-grow">
                    Here are the biggest enterprise technology acquisitions of 2021 so far
                </p>
            </div>
        </div>
    </div>
  )
}

export default card2