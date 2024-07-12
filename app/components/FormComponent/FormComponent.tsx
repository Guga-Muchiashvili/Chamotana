'use client'
import React, { useEffect } from 'react';
import schema from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ISearchForm } from './formtypes';
import DropDownElementCountry from '@/app/elements/dropdownElementCountry/DropDownElementCountry';
import { methodData, countryData } from '@/data';
import TextInputElement from '@/app/elements/textinputElement/TextInputElement';
import { getDeliveryData } from '@/actions/actions';
import CreditswithMovide from '@/queries/getDeliveryData/GetDeliveryData';
import DropDownElementMethod from '@/app/elements/dropdownElementMethod/DropDownElementMethods';
import getCountryDataQuery from '@/queries/getDeliveryData/GetDeliveryData';

const FormComponent = ({getData} : any) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch
  } = useForm<ISearchForm>({
    resolver: yupResolver(schema),
  });

  const defaultValue: ISearchForm = {
    country: "China",
    method: "AIR"
  };

  const country = watch('country');
  const method = watch('method');

  const {data} = getCountryDataQuery({countrie : country})

  useEffect(() => {
    getData(data, method)
  },[data, method])

  useEffect(() => {
    reset(defaultValue);
  }, []);

  const submit = async (e: ISearchForm) => {
    console.log(e);
    try {
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <form className='w-full flex justify-center h-16 bg-white rounded-full' onSubmit={handleSubmit(submit)}>
      <DropDownElementCountry control={control} id={'country'} data={countryData} />
      <DropDownElementMethod placeholder={'Enter Method'} control={control} id={'method'} data={methodData} />
      {/* <DropDownElementMethod placeholder={'sort by'} control={control} id={'sortby'} data={['Sort By $', 'Sort by delivery time']} />
      <button className='w-1/4 bg-[#4FC0E0] rounded-r-full text-white text-2xl hover:bg-opacity-80 duration-300 ease-in' type='submit'>მოძებნა</button> */}
    </form>
  );
};

export default React.memo(FormComponent);
