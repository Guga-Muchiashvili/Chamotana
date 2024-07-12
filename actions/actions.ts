import axios from "axios";

export const getDeliveryData = async ({countrie} : {countrie : string | undefined}) => {
    try {
        const response = await axios.get(`http://localhost:3000/company/${countrie?.toUpperCase()}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('manama')
        return response.data
    } catch (error) {
        console.error('Error:', error);
    }
};
