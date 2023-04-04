import React from 'react'
import TestItem from './TestItems'

const data = [
    {
        name: "Rudy Y.",
        time: '10 Years',
        details: 'Here is a blurb for a past testimonial'
    },
    {
        name: "Jeff R.",
        time: '2 Years',
        details: 'Here is a blurb for a past testimonial'
    }
]



export default function Testimonials() {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Blurb about testimonials</h1>
            <h2 className='text-2xl  mb-10  text-center text-stone-500'>These are sample testimonials. if you want to put additional information here. </h2>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Testimonials</h1>
        {data.map((item, idx)=>(
            <TestItem 
            key={idx} 
            time={item.time} 
            name={item.name} 
            details={item.details}/>
        ))}
    </div>
  )
}
