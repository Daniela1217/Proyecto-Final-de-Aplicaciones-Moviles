
export interface Business {
    business: BusinessData[];
}

export interface BusinessData {
    name: string;
    type: string;
    phone: string;
    address: string;
    latitude: number;
    longitude: number;
}

export interface Location {
    latitude: number;
    longitude: number;
}
