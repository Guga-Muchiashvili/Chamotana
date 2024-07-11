import { getDelivertData } from "@/actions/actions";
import { useQuery } from "@tanstack/react-query";


const CreditswithMovide = (id: string | undefined, type : string | undefined) => {
    return useQuery<any>({
      queryFn: () => getDelivertData(),
      queryKey: ['getDelivertData',id],
    });
  };
  
  export default CreditswithMovide;