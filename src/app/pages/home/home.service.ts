import {
    Injectable
} from '@angular/core';


export class Data2 {
    mois: string;
    taux: number;
}

let data2: Data2[] = [{
    mois: "Janvier",
    taux: 20
}, {
    mois: "Février",
    taux: 2
}, {
    mois: "Mars",
    taux: 93
}, {
    mois: "Avril",
    taux: 43
}, {
    mois: "Mai",
    taux:66
}, {
    mois: "Juin",
    taux: 11
}, {
    mois: "Juillet",
    taux: 20
}, {
    mois: "Août",
    taux: 10
}, {
    mois: "Septembre",
    taux: 28
}, {
    mois: "Octobre",
    taux: 13
}, {
    mois: "Novembre",
    taux: 43
}, {
    mois: "Décembre",
    taux: 23
}];


export class Data {
    mois: string;
    taux: number;
}

let data: Data[] = [{
    mois: "Lundi",
    taux: 20
}, {
    mois: "Mardi",
    taux: 2
}, {
    mois: "Mercredi",
    taux: 93
}, {
    mois: "Jeudi",
    taux: 43
}, {
    mois: "Vendredi",
    taux:66
}, {
    mois: "Samedi",
    taux: 11
}, {
    mois: "Dimanche",
    taux: 20
}];




export class PopulationByRegion {
    region: string;
    val: number;
}

let populationByRegions: PopulationByRegion[] = [{
    region: "Inaccessibles",
    val: 54
}, {
    region: "Accessibles",
    val: 32
}];



export class CountryInfo {
    country: string;
    hydro: number;
   // oil: number;
    /*gas: number;
    coal: number;
    nuclear: number;*/
}


export class EnergyDescription {
    value: string;
    name: string;
}


let energySources: EnergyDescription[] = [
  { value: "hydro", name: "Liens inaccessibles" },
 //   { value: "oil", name: "Liens accessibles" },
   /* { value: "gas", name: "Natural gas" },
    { value: "coal", name: "Coal" },
    { value: "nuclear", name: "Nuclear" }*/
];

let countriesInfo: CountryInfo[]  = [{
    country: "8:00",
    hydro: 60,
  // oil: 40,
   /* gas: 582,
    coal: 564.3,
    nuclear: 187.9*/
}, {
    country: "10:00",
    hydro: 75,
  //  oil: 25,
   /* gas: 35.1,
    coal: 956.9,
    nuclear: 11.3*/
}, {
    country: "12:00",
    hydro: 40,
  //  oil: 60,
   /* gas: 361.8,
    coal: 105,
    nuclear: 32.4*/
}, {
    country: "14/00",
    hydro: 22.6,
 // oil: 87.4,
  /*  gas: 64.9,
    coal: 120.8,
    nuclear: 64.8*/
}, {
    country: "16:00",
    hydro: 19,
//    oil: 81,
  /* gas: 28.9,
    coal: 204.8,
    nuclear: 3.8*/
}, {
    country: "18:00",
    hydro: 54,
 //   oil: 32,
    /*gas: 77.3,
    coal: 85.7,
    nuclear: 37.8*/
}, {
    country: "20:00",
    hydro: 4,
 //   oil: 32,
    /*gas: 77.3,
    coal: 85.7,
    nuclear: 37.8*/
}, {
    country: "22:00",
    hydro: 54,
 //   oil: 32,
    /*gas: 77.3,
    coal: 85.7,
    nuclear: 37.8*/
}, {
    country: "00:00",
    hydro: 94,
 //   oil: 32,
    /*gas: 77.3,
    coal: 85.7,
    nuclear: 37.8*/
}];



export class Customer {
    ID: number;
    CompanyName: string;
    Address: string;
    City: string;
    State: string;
    Zipcode: number;
    Phone: string;
    Fax: string;
    Website: string;
}

let customers: Customer[] = [{
    "ID": 1,
    "CompanyName": "Super Mart of the West",
    "Address": "702 SW 8th Street",
    "City": "Bentonville",
    "State": "Arkansas",
    "Zipcode": 72716,
    "Phone": "(800) 555-2797",
    "Fax": "(800) 555-2171",
    "Website": "http://www.nowebsitesupermart.com"
}, {
    "ID": 2,
    "CompanyName": "Electronics Depot",
    "Address": "2455 Paces Ferry Road NW",
    "City": "Atlanta",
    "State": "Georgia",
    "Zipcode": 30339,
    "Phone": "(800) 595-3232",
    "Fax": "(800) 595-3231",
    "Website": "http://www.nowebsitedepot.com"
}, {
    "ID": 3,
    "CompanyName": "K&S Music",
    "Address": "1000 Nicllet Mall",
    "City": "Minneapolis",
    "State": "Minnesota",
    "Zipcode": 55403,
    "Phone": "(612) 304-6073",
    "Fax": "(612) 304-6074",
    "Website": "http://www.nowebsitemusic.com"
}, {
    "ID": 4,
    "CompanyName": "Tom's Club",
    "Address": "999 Lake Drive",
    "City": "Issaquah",
    "State": "Washington",
    "Zipcode": 98027,
    "Phone": "(800) 955-2292",
    "Fax": "(800) 955-2293",
    "Website": "http://www.nowebsitetomsclub.com"
}, {
    "ID": 5,
    "CompanyName": "E-Mart",
    "Address": "3333 Beverly Rd",
    "City": "Hoffman Estates",
    "State": "Illinois",
    "Zipcode": 60179,
    "Phone": "(847) 286-2500",
    "Fax": "(847) 286-2501",
    "Website": "http://www.nowebsiteemart.com"
}, {
    "ID": 6,
    "CompanyName": "Walters",
    "Address": "200 Wilmot Rd",
    "City": "Deerfield",
    "State": "Illinois",
    "Zipcode": 60015,
    "Phone": "(847) 940-2500",
    "Fax": "(847) 940-2501",
    "Website": "http://www.nowebsitewalters.com"
}, {
    "ID": 7,
    "CompanyName": "StereoShack",
    "Address": "400 Commerce S",
    "City": "Fort Worth",
    "State": "Texas",
    "Zipcode": 76102,
    "Phone": "(817) 820-0741",
    "Fax": "(817) 820-0742",
    "Website": "http://www.nowebsiteshack.com"
}, {
    "ID": 8,
    "CompanyName": "Circuit Town",
    "Address": "2200 Kensington Court",
    "City": "Oak Brook",
    "State": "Illinois",
    "Zipcode": 60523,
    "Phone": "(800) 955-2929",
    "Fax": "(800) 955-9392",
    "Website": "http://www.nowebsitecircuittown.com"
}, {
    "ID": 9,
    "CompanyName": "Premier Buy",
    "Address": "7601 Penn Avenue South",
    "City": "Richfield",
    "State": "Minnesota",
    "Zipcode": 55423,
    "Phone": "(612) 291-1000",
    "Fax": "(612) 291-2001",
    "Website": "http://www.nowebsitepremierbuy.com"
}, {
    "ID": 10,
    "CompanyName": "ElectrixMax",
    "Address": "263 Shuman Blvd",
    "City": "Naperville",
    "State": "Illinois",
    "Zipcode": 60563,
    "Phone": "(630) 438-7800",
    "Fax": "(630) 438-7801",
    "Website": "http://www.nowebsiteelectrixmax.com"
}, {
    "ID": 11,
    "CompanyName": "Video Emporium",
    "Address": "1201 Elm Street",
    "City": "Dallas",
    "State": "Texas",
    "Zipcode": 75270,
    "Phone": "(214) 854-3000",
    "Fax": "(214) 854-3001",
    "Website": "http://www.nowebsitevideoemporium.com"
}, {
    "ID": 12,
    "CompanyName": "Screen Shop",
    "Address": "1000 Lowes Blvd",
    "City": "Mooresville",
    "State": "North Carolina",
    "Zipcode": 28117,
    "Phone": "(800) 445-6937",
    "Fax": "(800) 445-6938",
    "Website": "http://www.nowebsitescreenshop.com"
}, {
    "ID": 13,
    "CompanyName": "TV Shop",
    "Address": "1000 Lowes Blvd",
    "City": "Mooresville",
    "State": "North Carolina",
    "Zipcode": 28117,
    "Phone": "(800) 445-6937",
    "Fax": "(800) 445-6938",
    "Website": "http://www.nowebsitescreenshop.com"
}, {
    "ID": 14,
    "CompanyName": "Dog Shop",
    "Address": "1000 Lowes Blvd",
    "City": "Mooresville",
    "State": "North Carolina",
    "Zipcode": 28117,
    "Phone": "(800) 445-6937",
    "Fax": "(800) 445-6938",
    "Website": "http://www.nowebsitescreenshop.com"
}, {
    "ID": 15,
    "CompanyName": "Cat Shop",
    "Address": "1000 Lowes Blvd",
    "City": "Mooresville",
    "State": "North Carolina",
    "Zipcode": 28117,
    "Phone": "(800) 445-6937",
    "Fax": "(800) 445-6938",
    "Website": "http://www.nowebsitescreenshop.com"
}, {
    "ID": 16,
    "CompanyName": "Numeric Shop",
    "Address": "1000 Lowes Blvd",
    "City": "Mooresville",
    "State": "North Carolina",
    "Zipcode": 28117,
    "Phone": "(800) 445-6937",
    "Fax": "(800) 445-6938",
    "Website": "http://www.nowebsitescreenshop.com"
}, {
    "ID": 17,
    "CompanyName": "Esiea Shop",
    "Address": "1000 Lowes Blvd",
    "City": "Mooresville",
    "State": "North Carolina",
    "Zipcode": 28117,
    "Phone": "(800) 445-6937",
    "Fax": "(800) 445-6938",
    "Website": "http://www.nowebsitescreenshop.com"
}, {
    "ID": 18,
    "CompanyName": "Ivry Shop",
    "Address": "1000 Lowes Blvd",
    "City": "Mooresville",
    "State": "North Carolina",
    "Zipcode": 28117,
    "Phone": "(800) 445-6937",
    "Fax": "(800) 445-6938",
    "Website": "http://www.nowebsitescreenshop.com"
}, {
    "ID": 19,
    "CompanyName": "Europe Shop",
    "Address": "1000 Lowes Blvd",
    "City": "Mooresville",
    "State": "North Carolina",
    "Zipcode": 28117,
    "Phone": "(800) 445-6937",
    "Fax": "(800) 445-6938",
    "Website": "http://www.nowebsitescreenshop.com"
}, {
    "ID": 20,
    "CompanyName": "Boat Shop",
    "Address": "1000 Lowes Blvd",
    "City": "Mooresville",
    "State": "North Carolina",
    "Zipcode": 28117,
    "Phone": "(800) 445-6937",
    "Fax": "(800) 445-6938",
    "Website": "http://www.nowebsitescreenshop.com"
}];














@Injectable()
export class Service {
    getPopulationByRegions(): PopulationByRegion[] {
        return populationByRegions;
    }
    getCountriesInfo(): CountryInfo[] {
        return countriesInfo;
    }
    getEnergySources(): EnergyDescription[] {
        return energySources;
    }
    getCustomers() {
        return customers;
    }
    getData(): Data[] {
        return data;
    }
    getData2(): Data2[] {
        return data2;
    }
}











