'use client'
import React from 'react'
import schema from './schema'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ISearchForm } from './formtypes';
import DropDownElementCountry from '@/app/elements/dropdownElementCountry/DropDownElementCountry';
import { methodData } from '@/data';
import { countryData } from '@/data';
import DropDownElementMethod from '@/app/elements/dropdownElementMethod/DropDownElementMethods';
import TextInputElement from '@/app/elements/textinputElement/TextInputElement';

const FormComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ISearchForm>({
    resolver: yupResolver(schema),
  });

  const submit = (e : any) => {
    console.log(e)
  }
  
  return (
    <form className='w-full flex h-16 bg-white rounded-full overflow-hidden' onSubmit={handleSubmit(submit)}>
      <DropDownElementCountry control={control} id={'country'} data={countryData}/>
      <DropDownElementMethod placeholder={'Enter Method'} control={control} id={'method'} data={methodData}/>
      <DropDownElementMethod placeholder={'sort by'} control={control} id={'sortby'} data={['Sort By $', 'Sort by delivery time']}/>
      {/* <TextInputElement placeholder={'enter amount of days'} control={control} id={'time'}/>
      <TextInputElement placeholder={'enter maximum price $'} control={control} id={'price'}/> */}

      <button className='w-1/4 bg-green-500 text-white ' type='submit'>Submit</button>
    </form>
  )
}

export default FormComponent