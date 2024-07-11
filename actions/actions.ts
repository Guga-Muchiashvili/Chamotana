import axios from "axios";

export const getDeliveryData = async () => {
    try {
        const response = await axios.post('http://localhost:3000/company', {
            name: "akaki",
            website: "Internal server error",
            delivery: 6,
            services: [
                {
                    country: "USA",
                    methods: [
                        {
                            method: "AIR",
                            price: 25,
                            delay: 14
                        }
                    ]
                }
            ]
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
};
