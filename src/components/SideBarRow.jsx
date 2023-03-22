import React from 'react'

function SideBarRow(props) {
  return (
    <div  className='flex max-w-fit cursor-pointer item-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100
    transition-all duration-200 group '>
        <props.Icon className='h-6 w-6'/>
        <p className='hidden md:inline-flex group-hover:text-twitter text-base font-bold-900 lg:text-xl'>{props.title}</p>
    </div>
  )
}

export default SideBarRow