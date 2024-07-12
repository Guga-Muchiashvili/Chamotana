
import { getDeliveryData } from "@/actions/actions";
import { useQuery } from "@tanstack/react-query";


const getCountryDataQuery = ({countrie} : {countrie : string | undefined}) => {
  console.log('countrie', countrie)
    return useQuery<any>({
      queryFn: () => getDeliveryData({countrie}),
      queryKey: ['getDelivertData',countrie || ''],
    });
  };
  
  export default getCountryDataQuery;