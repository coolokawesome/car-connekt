const cars = [
    {
        id: 0,
        name: "2023-Chevrolet-Silverado",
        color: "Red",
        msrp: 45000,
        description: "2023-red-chevrolet-silverado-truck"
    },
    {
        id: 1,
        name: "2023-Ford-Mustang",
        color: "Black",
        msrp: 35000,
        description: "2023-black-ford-mustang-car"
    },
    {
        id: 2,
        name: "2023-Toyota-Camry",
        color: "White",
        msrp: 29000,
        description: "2023-white-toyota-camry-sedan"
    },
    {
        id: 3,
        name: "2023-Honda-Civic",
        color: "Blue",
        msrp: 22000,
        description: "2023-blue-honda-civic-sedan"
    },
    {
        id: 4,
        name: "2023-Jeep-Wrangler",
        color: "Green",
        msrp: 35000,
        description: "2023-green-jeep-wrangler-SUV"
    },
    {
        id: 5,
        name: "2023-Toyota-Corolla",
        color: "Silver",
        msrp: 24000,
        description: "2023-silver-toyota-corolla-sedan"
    },
    {
        id: 6,
        name: "2023-Ford-F-150",
        color: "Gray",
        msrp: 50000,
        description: "2023-gray-ford-f-150-truck"
    },
    {
        id: 7,
        name: "2023-Chevrolet-Silverado",
        color: "Blue",
        msrp: 47000,
        description: "2023-blue-chevrolet-silverado-truck"
    },
    {
        id: 8,
        name: "2023-Honda-Accord",
        color: "Red",
        msrp: 32000,
        description: "2023-red-honda-accord-sedan"
    },
    {
        id: 9,
        name: "2023-Jeep-Grand-Cherokee",
        color: "Black",
        msrp: 46000,
        description: "2023-black-jeep-grand-cherokee-SUV"
    },
    {
        id: 10,
        name: "2023-Chevrolet-Equinox",
        color: "Gray",
        msrp: 32000,
        description: "2023-gray-chevrolet-equinox-SUV"
    },
    {
        id: 11,
        name: "2023-Honda-Pilot",
        color: "White",
        msrp: 40000,
        description: "2023-white-honda-pilot-SUV"
    },
    {
        id: 12,
        name: "2023-Toyota-Rav4",
        color: "Black",
        msrp: 33000,
        description: "2023-black-toyota-rav4-SUV"
    },
    {
        id: 13,
        name: "2023-Ford-Explorer",
        color: "Blue",
        msrp: 38000,
        description: "2023-blue-ford-explorer-SUV"
    },
    {
        id: 14,
        name: "2023-Chevrolet-Camaro",
        color: "Red",
        msrp: 45000,
        description: "2023-red-chevrolet-camaro-car"
    },
    {
        id: 15,
        name: "2023-Toyota-Tacoma",
        color: "Silver",
        msrp: 32000,
        description: "2023-silver-toyota-tacoma-truck"
    },
    {
        id: 16,
        name: "2023-Honda-Ridgeline",
        color: "Gray",
        msrp: 42000,
        description: "2023-gray-honda-ridgeline-truck"
    },
    {
        id: 17,
        name: "2023-Jeep-Gladiator",
        color: "Red",
        msrp: 45000,
        description: "2023-red-jeep-gladiator-truck"
    },
    {
        id: 18,
        name: "2023-Ford-Ranger",
        color: "Blue",
        msrp: 35000,
        description: "2023-blue-ford-ranger-truck"
    },
    {
        id: 19,
        name: "2023-Toyota-4Runner",
        color: "Black",
        msrp: 44000,
        description: "2023-black-toyota-4runner-SUV"
    },
    {
        id: 20,
        name: "2023-Hyundai-Sonata",
        color: "White",
        msrp: 28000,
        description: "2023-white-hyundai-sonata-sedan"
    },
    {
        id: 21,
        name: "2023-Kia-Optima",
        color: "Black",
        msrp: 29000,
        description: "2023-black-kia-optima-sedan"
    },
    {
        id: 22,
        name: "2023-Nissan-Rogue",
        color: "Blue",
        msrp: 31000,
        description: "2023-blue-nissan-rogue-SUV"
    },
    {
        id: 23,
        name: "2023-Mazda-CX-5",
        color: "Red",
        msrp: 33000,
        description: "2023-red-mazda-cx-5-SUV"
    },
    {
        id: 24,
        name: "2023-Subaru-Outback",
        color: "Green",
        msrp: 34000,
        description: "2023-green-subaru-outback-SUV"
    },
    {
        id: 25,
        name: "2023-Audi-A4",
        color: "Silver",
        msrp: 42000,
        description: "2023-silver-audi-a4-car"
    },
    {
        id: 26,
        name: "2023-BMW-5-Series",
        color: "Gray",
        msrp: 50000,
        description: "2023-gray-bmw-5-series-car"
    },
    {
        id: 27,
        name: "2023-Mercedes-Benz-GLC",
        color: "Black",
        msrp: 45000,
        description: "2023-black-mercedes-benz-glc-SUV"
    },
    {
        id: 28,
        name: "2023-Lexus-RX",
        color: "White",
        msrp: 47000,
        description: "2023-white-lexus-rx-SUV"
    },
    {
        id: 29,
        name: "2023-Cadillac-Escalade",
        color: "Black",
        msrp: 80000,
        description: "2023-black-cadillac-escalade-SUV"
    },
    {
        id: 30,
        name: "2023-Toyota-Camry",
        color: "Silver",
        msrp: 29000,
        description: "2023-silver-toyota-camry-sedan"
    },
    {
        id: 31,
        name: "2023-Honda-Pilot",
        color: "Blue",
        msrp: 38000,
        description: "2023-blue-honda-pilot-SUV"
    },
    {
        id: 32,
        name: "2023-Ford-Explorer",
        color: "White",
        msrp: 41000,
        description: "2023-white-ford-explorer-SUV"
    },
    {
        id: 33,
        name: "2023-Chevrolet-Camaro",
        color: "Red",
        msrp: 38000,
        description: "2023-red-chevrolet-camaro-car"
    },
    {
        id: 34,
        name: "2023-GMC-Sierra",
        color: "Black",
        msrp: 45000,
        description: "2023-black-gmc-sierra-truck"
    },
    {
        id: 35,
        name: "2023-Dodge-Challenger",
        color: "Green",
        msrp: 35000,
        description: "2023-green-dodge-challenger-car"
    },
    {
        id: 36,
        name: "2023-Jeep-Wrangler",
        color: "Orange",
        msrp: 33000,
        description: "2023-orange-jeep-wrangler-SUV"
    },
    {
        id: 37,
        name: "2023-Ram-1500",
        color: "Blue",
        msrp: 45000,
        description: "2023-blue-ram-1500-truck"
    },
    {
        id: 38,
        name: "2023-Volvo-S60",
        color: "Gray",
        msrp: 40000,
        description: "2023-gray-volvo-s60-car"
    },
    {
        id: 39,
        name: "2023-Lincoln-Navigator",
        color: "Black",
        msrp: 82000,
        description: "2023-black-lincoln-navigator-SUV"
    },
    {
        id: 40,
        name: "2023-Hyundai-Elantra",
        color: "White",
        msrp: 23000,
        description: "2023-white-hyundai-elantra-sedan"
    },
    {
        id: 41,
        name: "2023-Kia-Sorento",
        color: "Gray",
        msrp: 32000,
        description: "2023-gray-kia-sorento-SUV"
    },
    {
        id: 42,
        name: "2023-Mazda-MX-5-Miata",
        color: "Red",
        msrp: 27000,
        description: "2023-red-mazda-mx-5-miata-car"
    },
    {
        id: 43,
        name: "2023-Subaru-Outback",
        color: "Blue",
        msrp: 28000,
        description: "2023-blue-subaru-outback-SUV"
    },
    {
        id: 44,
        name: "2023-Volkswagen-Golf",
        color: "Black",
        msrp: 24000,
        description: "2023-black-volkswagen-golf-hatchback"
    },
    {
        id: 45,
        name: "2023-Audi-A7",
        color: "White",
        msrp: 70000,
        description: "2023-white-audi-a7-sedan"
    },
    {
        id: 46,
        name: "2023-BMW-X5",
        color: "Black",
        msrp: 61000,
        description: "2023-black-bmw-x5-SUV"
    },
    {
        id: 47,
        name: "2023-Mercedes-Benz-C-Class",
        color: "Gray",
        msrp: 52000,
        description: "2023-gray-mercedes-benz-c-class-sedan"
    },
    {
        id: 48,
        name: "2023-Porsche-911",
        color: "Red",
        msrp: 115000,
        description: "2023-red-porsche-911-sports-car"
    },
    {
        id: 49,
        name: "2023-Tesla-Model-Y",
        color: "Blue",
        msrp: 53000,
        description: "2023-blue-tesla-model-y-EV"
    },
    {
        id: 50,
        name: "2023-Honda-Accord",
        color: "Black",
        msrp: 27000,
        description: "2023-black-honda-accord-sedan"
    },
    {
        id: 51,
        name: "2023-Toyota-Tacoma",
        color: "Silver",
        msrp: 32000,
        description: "2023-silver-toyota-tacoma-truck"
    },
    {
        id: 52,
        name: "2023-Lexus-ES",
        color: "White",
        msrp: 39000,
        description: "2023-white-lexus-es-sedan"
    },
    {
        id: 53,
        name: "2023-Ford-Mustang",
        color: "Blue",
        msrp: 32000,
        description: "2023-blue-ford-mustang-sports-car"
    },
    {
        id: 54,
        name: "2023-Chevrolet-Equinox",
        color: "Gray",
        msrp: 28000,
        description: "2023-gray-chevrolet-equinox-SUV"
    },
    {
        id: 55,
        name: "2023-Subaru-Impreza",
        color: "Red",
        msrp: 25000,
        description: "2023-red-subaru-impreza-hatchback"
    },
    {
        id: 56,
        name: "2023-Nissan-Rogue",
        color: "White",
        msrp: 29000,
        description: "2023-white-nissan-rogue-SUV"
    },
    {
        id: 57,
        name: "2023-Hyundai-Kona",
        color: "Black",
        msrp: 24000,
        description: "2023-black-hyundai-kona-SUV"
    },
    {
        id: 58,
        name: "2023-Kia-Optima",
        color: "Red",
        msrp: 28000,
        description: "2023-red-kia-optima-sedan"
    },
    {
        id: 59,
        name: "2023-Mazda-CX-5",
        color: "Gray",
        msrp: 30000,
        description: "2023-gray-mazda-cx-5-SUV"
    },
    {
        id: 60,
        name: "2023-Acura-MDX",
        color: "Silver",
        msrp: 47000,
        description: "2023-silver-acura-mdx-SUV"
    },
    {
        id: 61,
        name: "2023-Cadillac-XT5",
        color: "Black",
        msrp: 44000,
        description: "2023-black-cadillac-xt5-SUV"
    },
    {
        id: 62,
        name: "2023-Jeep-Wrangler",
        color: "Green",
        msrp: 34000,
        description: "2023-green-jeep-wrangler-SUV"
    },
    {
        id: 63,
        name: "2023-Tesla-Model-S",
        color: "White",
        msrp: 80000,
        description: "2023-white-tesla-model-s-EV"
    },
    {
        id: 64,
        name: "2023-Volvo-XC90",
        color: "Gray",
        msrp: 52000,
        description: "2023-gray-volvo-xc90-SUV"
    },
    {
        id: 65,
        name: "2023-Audi-Q5",
        color: "Red",
        msrp: 45000,
        description: "2023-red-audi-q5-SUV"
    },
    {
        id: 66,
        name: "2023-Porsche-911",
        color: "Black",
        msrp: 120000,
        description: "2023-black-porsche-911-sports-car"
    },
    {
        id: 67,
        name: "2023-Infiniti-QX50",
        color: "White",
        msrp: 38000,
        description: "2023-white-infiniti-qx50-SUV"
    },
    {
        id: 68,
        name: "2023-Lamborghini-Huracan",
        color: "Blue",
        msrp: 300000,
        description: "2023-blue-lamborghini-huracan-sports-car"
    },
    {
        id: 69,
        name: "2023-BMW-3-Series",
        color: "Black",
        msrp: 45000,
        description: "2023-black-bmw-3-series-sedan"
    },
    {
        id: 70,
        name: "2023-Jeep-Grand Cherokee",
        color: "Red",
        msrp: 36000,
        description: "2023-red-jeep-grand-cherokee-SUV"
    },
    {
        id: 71,
        name: "2023-Chevrolet-Tahoe",
        color: "White",
        msrp: 50000,
        description: "2023-white-chevrolet-tahoe-SUV"
    },
    {
        id: 72,
        name: "2023-Ford-Explorer",
        color: "Blue",
        msrp: 33000,
        description: "2023-blue-ford-explorer-SUV"
    },
    {
        id: 73,
        name: "2023-Honda-Accord",
        color: "Black",
        msrp: 25000,
        description: "2023-black-honda-accord-sedan"
    },
    {
        id: 74,
        name: "2023-Toyota-Tacoma",
        color: "Red",
        msrp: 32000,
        description: "2023-red-toyota-tacoma-pickup-truck"
    },
    {
        id: 75,
        name: "2023-Mercedes-Benz-S-Class",
        color: "Silver",
        msrp: 110000,
        description: "2023-silver-mercedes-benz-s-class-luxury-sedan"
    },
    {
        id: 76,
        name: "2023-Nissan-Rogue",
        color: "Gray",
        msrp: 29000,
        description: "2023-gray-nissan-rogue-SUV"
    },
    {
        id: 77,
        name: "2023-Kia-Soul",
        color: "Green",
        msrp: 20000,
        description: "2023-green-kia-soul-hatchback"
    },
    {
        id: 78,
        name: "2023-Volkswagen-Golf",
        color: "Black",
        msrp: 25000,
        description: "2023-black-volkswagen-golf-hatchback"
    },
    {
        id: 79,
        name: "2023-Ram-1500",
        color: "White",
        msrp: 35000,
        description: "2023-white-ram-1500-pickup-truck"
    },
    {
        id: 80,
        name: "2023-Toyota-4Runner",
        color: "Gray",
        msrp: 38000,
        description: "2023-gray-toyota-4runner-SUV"
    },
    {
        id: 81,
        name: "2023-Hyundai-Kona",
        color: "Blue",
        msrp: 26000,
        description: "2023-blue-hyundai-kona-SUV"
    },
    {
        id: 82,
        name: "2023-Ford-Fusion",
        color: "Black",
        msrp: 25000,
        description: "2023-black-ford-fusion-sedan"
    },
    {
        id: 83,
        name: "2023-Chevrolet-Equinox",
        color: "Silver",
        msrp: 28000,
        description: "2023-silver-chevrolet-equinox-SUV"
    },
    {
        id: 84,
        name: "2023-Audi-A6",
        color: "White",
        msrp: 55000,
        description: "2023-white-audi-a6-luxury-sedan"
    },
    {
        id: 85,
        name: "2023-BMW-X5",
        color: "Black",
        msrp: 60000,
        description: "2023-black-bmw-x5-luxury-SUV"
    },
    {
        id: 86,
        name: "2023-Mazda-Miata",
        color: "Red",
        msrp: 27000,
        description: "2023-red-mazda-miata-convertible"
    },
    {
        id: 87,
        name: "2023-Porsche-911",
        color: "Yellow",
        msrp: 100000,
        description: "2023-yellow-porsche-911-sportscar"
    },
    {
        id: 88,
        name: "2023-Lincoln-Navigator",
        color: "Black",
        msrp: 85000,
        description: "2023-black-lincoln-navigator-SUV"
    },
    {
        id: 89,
        name: "2023-Jaguar-F-Type",
        color: "Blue",
        msrp: 70000,
        description: "2023-blue-jaguar-f-type-sportscar"
    },
    {
        id: 90,
        name: "2023-Cadillac-Escalade",
        color: "White",
        msrp: 90000,
        description: "2023-white-cadillac-escalade-SUV"
    },
    {
        id: 91,
        name: "2023-GMC-Sierra",
        color: "Red",
        msrp: 40000,
        description: "2023-red-gmc-sierra-pickup-truck"
    },
    {
        id: 92,
        name: "2023-Honda-Civic",
        color: "Silver",
        msrp: 22000,
        description: "2023-silver-honda-civic-sedan"
    },
    {
        id: 93,
        name: "2023-Toyota-Camry",
        color: "Black",
        msrp: 28000,
        description: "2023-black-toyota-camry-sedan"
    },
    {
        id: 94,
        name: "2022-Jeep-Grand-Cherokee",
        color: "Red",
        msrp: 42000,
        description: "2022-red-jeep-grand-cherokee-SUV"
    },
    {
        id: 95,
        name: "2023-Ford-F150",
        color: "Black",
        msrp: 48000,
        description: "2023-black-ford-f150-truck"
    },
    {
        id: 96,
        name: "2021-Honda-Accord",
        color: "White",
        msrp: 32000,
        description: "2021-white-honda-accord-sedan"
    },
    {
        id: 97,
        name: "2022-Toyota-RAV4",
        color: "Blue",
        msrp: 33000,
        description: "2022-blue-toyota-rav4-SUV"
    },
    {
        id: 98,
        name: "2021-Chevrolet-Tahoe",
        color: "Silver",
        msrp: 59000,
        description: "2021-silver-chevrolet-tahoe-SUV"
    },
    {
        id: 99,
        name: "2022-Nissan-Rogue",
        color: "Black",
        msrp: 31000,
        description: "2022-black-nissan-rogue-SUV"
    },
    {
        id: 100,
        name: "2023-Ford-Bronco",
        color: "Orange",
        msrp: 32000,
        description: "2023-orange-ford-bronco-SUV"
    },
    {
        id: 104,
        name: "2022-Hyundai-Sonata",
        color: "Blue",
        msrp: 29000,
        description: "2022-blue-hyundai-sonata-sedan"
      },
      {
        id: 105,
        name: "2023-Toyota-Tacoma",
        color: "Red",
        msrp: 35000,
        description: "2023-red-toyota-tacoma-truck"
      },
      {
        id: 106,
        name: "2022-BMW-3-Series",
        color: "Silver",
        msrp: 42000,
        description: "2022-silver-bmw-3-series-sedan"
      },
      {
        id: 107,
        name: "2023-Ford-Explorer",
        color: "White",
        msrp: 37000,
        description: "2023-white-ford-explorer-SUV"
      },
      {
        id: 108,
        name: "2021-GMC-Yukon",
        color: "Black",
        msrp: 59000,
        description: "2021-black-gmc-yukon-SUV"
      },
      {
        id: 109,
        name: "2022-Volkswagen-Golf",
        color: "Gray",
        msrp: 23000,
        description: "2022-gray-volkswagen-golf-hatchback"
      },
      {
        id: 110,
        name: "2021-Ford-Mustang",
        color: "Yellow",
        msrp: 30000,
        description: "2021-yellow-ford-mustang-sportscar"
      },
      {
        id: 111,
        name: "2023-Chevrolet-Traverse",
        color: "Blue",
        msrp: 39000,
        description: "2023-blue-chevrolet-traverse-SUV"
      },
      {
        id: 112,
        name: "2021-Toyota-Camry",
        color: "White",
        msrp: 28000,
        description: "2021-white-toyota-camry-sedan"
      },
      {
        id: 113,
        name: "2022-Honda-Civic",
        color: "Black",
        msrp: 25000,
        description: "2022-black-honda-civic-sedan"
      },
      {
        id: 114,
        name: "2022-Lexus-RX",
        color: "Silver",
        msrp: 50000,
        description: "2022-silver-lexus-rx-SUV"
      },
      {
        id: 115,
        name: "2021-Mercedes-Benz-GLC",
        color: "Black",
        msrp: 42000,
        description: "2021-black-mercedes-benz-glc-SUV"
      },
      {
        id: 116,
        name: "2023-Audi-A4",
        color: "Red",
        msrp: 40000,
        description: "2023-red-audi-a4-sedan"
      },
      {
        id: 117,
        name: "2022-Nissan-Murano",
        color: "Gray",
        msrp: 36000,
        description: "2022-gray-nissan-murano-SUV"
      },
      {
        id: 118,
        name: "2021-BMW-X3",
        color: "White",
        msrp: 45000,
        description: "2021-white-bmw-x3-SUV"
      },
      {
        id: 119,
        name: "2022-Chevrolet-Bolt",
        color: "Blue",
        msrp: 31000,
        description: "2022-blue-chevrolet-bolt-EV"
      },
      {
        id: 120,
        name: "2023-Kia-Soul",
        color: "Green",
        msrp: 20000,
        description: "2023-green-kia-soul-hatchback"
      },
      {
        id: 121,
        name: "2021-Ford-Ranger",
        color: "Black",
        msrp: 35000,
        description: "2021-black-ford-ranger-truck"
      },
      {
        id: 122,
        name: "2022-Honda-Pilot",
        color: "White",
        msrp: 40000,
        description: "2022-white-honda-pilot-SUV"
      },
      {
        id: 123,
        name: "2021-Subaru-Crosstrek",
        color: "Orange",
        msrp: 25000,
        description: "2021-orange-subaru-crosstrek-SUV"
      },
];