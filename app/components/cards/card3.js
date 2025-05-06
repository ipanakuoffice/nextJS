import React from 'react'

const card3 = () => {
  return (
    <a
    href="#"
    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <img
      className="object-cover w-full rounded-t-lg h-32 md:h-full md:w-48 md:rounded-none md:rounded-s-lg"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMckokHCFoDi-l3Q3B-cLjdOpXc9cWygKg-w&s"
      alt=""
    />
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Teaching Activity
      </h5>
      <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology
      </p>
    </div>
          </a>
  )
}

export default card3