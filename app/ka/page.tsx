'use client'
import Image from 'next/image'
import React from 'react'
import georgiaFlag from '../../public/georgia_flag.png'
import FormComponent from '../components/FormComponent/FormComponent'
import data from '@/data';
import CardElement from '../elements/CardElement/CardElement'

const MainPage = () => {

  console.log(data)
  return (
    <div className='w-full h-screen'>
      <div className='w-full h-10 bg-green-700 flex items-center px-7 justify-between'>
        <h2 className='text-white font-sans font-semibold'>Gadazide.ge</h2>
        <Image
        className='rounded-md w-7 cursor-pointer h-5'
        src={georgiaFlag.src}
        alt='flag'
        width={40}
        height={40}
        />
      </div>
      <div className='w-full min-h-screen px-7 pt-7'>
      <div id='search_box' className='rounded-md flex items-center justify-center px-7 flex-col gap-8'>
        <h1 className='text-white text-5xl'>Find your Gzavnili</h1>
        <FormComponent/>
      </div>
      <div id='list_txt' className='w-full min-h-screen py-12'>
      <h1 className='text-green-500 font-bebas text-7xl font-bold'>Find your Gzavnili</h1>
      <div className='w-full h-fit  flex flex-col gap-5 mt-12'>
      {data.map((item) => (
        <CardElement key={item.id} item={item} />
      ))}
      </div>
      </div>
      </div>

    </div>
  )
}

export default MainPage