'use client'
import React, { useEffect } from 'react'
import schema from './schema'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ISearchForm } from './formtypes';
import DropDownElementCountry from '@/app/elements/dropdownElementCountry/DropDownElementCountry';
import { methodData } from '@/data';
import { countryData } from '@/data';
import DropDownElementMethod from '@/app/elements/dropdownElementMethod/DropDownElementMethods';
import TextInputElement from '@/app/elements/textinputElement/TextInputElement';
import { getDeliveryData } from '@/actions/actions';

const FormComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ISearchForm>({
    resolver: yupResolver(schema),
  });

  const defaultValue : ISearchForm = {
    country : "China",
    method : "Air"
  }

  useEffect(() => {
    reset(defaultValue)
  },[])
  
  const submit = async (e : any) => {
    console.log(e)
    const ml = await getDeliveryData()
    console.log(ml)
  }

  console.log('xula')
  
  return (
    <form className='w-full flex h-16 bg-white rounded-full' onSubmit={handleSubmit(submit)}>
      <DropDownElementCountry control={control} id={'country'} data={countryData}/>
      <DropDownElementMethod placeholder={'Enter Method'} control={control} id={'method'} data={methodData}/>
      <DropDownElementMethod placeholder={'sort by'} control={control} id={'sortby'} data={['Sort By $', 'Sort by delivery time']}/>
      <button className='w-1/4 bg-[#4FC0E0] rounded-r-full text-white text-2xl hover:bg-opacity-80 duration-300 ease-in  ' type='submit'>მოძებნა</button>
    </form>
  )
}

export default React.memo(FormComponent)
