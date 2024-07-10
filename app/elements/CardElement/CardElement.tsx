'use client'
import Image from 'next/image'
import React from 'react'
import usa2 from '../../../public/usa2.png'

const CardElement = ({item} : any) => {
    console.log(item.services[0].methods.map((item : any) => console.log(item)))
  return (
    <div className='w-full flex h-72 bg-gray-100 rounded-xl text-sm overflow-hidden' style={{boxShadow : "2px 2px 5px 1px green"}}>
        <Image 
        className='h-full w-1/5'
        src={usa2.src}
        width={400}
        height={400}
        alt='usa2'
        />
        <div className='w-4/5 flex flex-col h-full  text-gray-600 font-mono py-2  font-bold text-3xl px-5'>
        <div className='w-full h-1/4 flex justify-between'>
        {item.services.map((item : any) => (
            <p>{item.country}</p>
            ))}
        </div>
        <div className='w-full h-1/4 flex justify-between'>
        {item.services?.map((item : any) => (
            item.methods.map((damapuli : any) => (
                <>
                <p>{damapuli.method}</p>
                </>
            ))
        ))}
        </div>
        <div className='w-full h-1/4 flex justify-between'>
        {item.services?.map((item : any) => (
            item.methods.map((damapuli : any) => (
                <>
                <p>{damapuli.price}</p>
                </>
            ))
        ))}
        </div>
        <div className='w-full h-1/4 flex justify-between'>
        {item.services?.map((item : any) => (
            item.methods.map((damapuli : any) => (
                <>
                <p>{damapuli.delay}</p>
                </>
            ))
        ))}
        </div>
        
        {/* <div className='h-full w-1/4 flex-col  flex justify-between items-center py-5 text-gray-600 font-mono  font-bold text-3xl'>
            <h1>method</h1>
            <h2>dalal</h2>
        </div>
        <div className='h-full w-1/4 flex flex-col  justify-between items-center py-5 text-gray-600 font-mono  font-bold text-3xl'>
            <h1 className='h-1/3'>Counties</h1>
            <div className='h-2/3 justify-between flex flex-col text-center'>
            {item.services.map((item : any) => (
                <p>{item.country}</p>
            ))}
            </div>
           
        </div>
        <div className='h-full w-1/4 flex flex-col   justify-between items-center py-5 text-gray-600 font-mono  font-bold text-3xl'>
            <h1>Delivery time</h1>
        </div>
        <div className='h-full w-1/4 flex flex-col   justify-between items-center py-5 text-gray-600 font-mono  font-bold text-3xl'>
            <h1>Cost $</h1>
        </div> */}
        </div>
    </div>
  )
}

export default CardElement