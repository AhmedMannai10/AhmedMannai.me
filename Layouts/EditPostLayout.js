import React from 'react'

export default function EditPostLayout({ children }) {
    return (
        <div className=' mx-auto flex flex-col-reverse justify-evenly md:flex-row lg:gap-6 lg:px-0 mb-8'>
            {children}
        </div>
    )
}
