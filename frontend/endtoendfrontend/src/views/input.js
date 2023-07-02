import React from 'react'
import Download from './download'
let button=<div></div>
export default function input({parenttochild}) {
  if(parenttochild)
  button=<Download/>
  return (
    <div className='relative right-64 bottom-60'>
    <label
      className="block mb-2 font-medium text-gray-900 dark:text-white text-4xl p-6 text-center"
      htmlFor="file_input"
    >
      Upload file
    </label>
    <input
      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      id="file_input"
      type="file"
    />
    <div>
  <label
    htmlFor="first_name"
    className="block mb-2 font-medium text-gray-900 dark:text-white text-4xl pt-14 pb-3 text-center"
  >
    Key
  </label>
  <input
    type="text"
    id="first_name"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Enter Encryption key"
    required=""
  />
  {button}
</div>

  </div>
  ) 
}