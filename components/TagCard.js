import React from 'react'

export default function TagCard({value, color}) {
  return (
    <div className=' bg-green-500 w-fit px-1 rounded-md 
    text-dark_primary my-2 mx-1
    font-medium
    font-inter 
    flex justify-center
    items-center
    '>

        {value}
    </div>
  )
}
