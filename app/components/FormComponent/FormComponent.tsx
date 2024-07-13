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

const FormComponent = ({getData} : {getData : (data : ICompany, method : string | undefined) => void}) => {
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

  return (
    <form className='w-full flex justify-center h-16 bg-white rounded-full'>
      <DropDownElementCountry control={control} id={'country'} data={countryData as any} />
      <DropDownElementMethod placeholder={'Enter Method'} control={control} id={'method'} data={methodData} />
    </form>
  );
};

export default React.memo(FormComponent);
