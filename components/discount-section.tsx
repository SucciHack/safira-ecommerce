import React from 'react'
import { Button } from './ui/button'

export default function DiscountSection() {
  return (
    <div className='hidden h-[300px] bg-[url(/block3-home1.jpg)] md:flex flex-col justify-start items-start px-24 py-24 space-y-3'>
      <p className='text-green-700 text-3xl'>Black Fridays !</p>
      <h2 className='text-5xl'>Sale 50% OFF</h2>
      <p className='text-3xl'>all vegetable products</p>
      <Button className='bg-green-800 px-6 py-3'>
        Discover Now
      </Button>
    </div>
  )
}
