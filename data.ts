import china from './public/china.svg'
import usa from './public/usa.svg'
import uk from './public/uk.svg'
import turkey from './public/turkey.svg'

const data = [
    {
      "id": 1,
      "name": "SpaceCargo",
      "website": "https://www.spacecargo.ge/",
      "services": [
        {
          "country": "china",
          "methods": [
            {
              "method": "AIR",
              "price": 12.85,
              "delay": 14
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "wejet",
      "website": "https://wejet.ge/",
      "services": [
        {
          "country": "china",
          "methods": [
            {
              "method": "AIR",
              "price": 9.45,
              "delay": 14
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "name": "china2me",
      "website": "https://www.china2me.ge/ka",
      "services": [
        {
          "country": "china",
          "methods": [
            {
              "method": "AIR",
              "price": 12.5,
              "delay": 14
            },
            {
              "method": "ROAD",
              "price": 5.9,
              "delay": 66
            }
          ]
        }
      ]
    },
    {
      "id": 4,
      "name": "inex.ge",
      "website": "https://inex.ge/",
      "services": [
        {
          "country": "china",
          "methods": [
            {
              "method": "AIR",
              "price": 12.5,
              "delay": 14
            }
          ]
        }
      ]
    }
  ]

  export default data

  export const countryData = [
    {
      name : "China",
      img : china
    },
    {
      name : "Uk",
      img : uk
    },
    {
      name : "USA",
      img : usa
    },
    {
      name : 'Turkey',
      img : turkey
    },
  ]

  export const methodData = ['AIR', 'ROAD', 'WATER' ]

  export const CardDisplays = ['კომპანია','ქვეყანა', 'მეთოდი',  'მიწოდება', 'ფასი', 'მოტანის დრო']
  