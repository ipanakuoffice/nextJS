import React from 'react'

const sectionFourth = () => {
  return (
    <div className='flex flex-col w-full py-8'>
        <div className='flex justify-center items-center font-bold text-5xl pb-12'>
            Portofolios & Clients
        </div>
        <div className='client px-12 grid grid-cols-4 gap-3 pb-12'>
            <p className='text-center'>client 1</p>
            <p className='text-center'>client 1</p>
            <p className='text-center'>client 1</p>
            <p className='text-center'>client 1</p>
        </div>
        <div className='portofolios grid grid-cols-4 gap-3'>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img
      className="rounded-t-lg"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYL85X1FPOZVntkPsu3J3Dp842I0INd7v8ew&s"
      alt=""
    />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
    <a
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
</div>

        </div>
    </div>
  )
}

export default sectionFourth