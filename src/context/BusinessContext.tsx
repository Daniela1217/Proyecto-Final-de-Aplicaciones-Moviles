import React, { createContext, useReducer } from "react";
import { Business, BusinessData } from "../interfaces/businessInterface";
import { businessReducer } from "./businessReducer";


export const initialState: Business  = {
    business: [ 
        {
            name: 'Plaza Lama',
            type: 'Comercial',
            phone: '809-645-7733',
            address: 'AV. Churchill - Santo Domingo Oeste',
            latitude: 18.4619978,
            longitude: -69.938304,
        }
    ],
}

interface BusinessContextProps {
    businessState: Business;   
    addBusiness: (businessObj: BusinessData) => void;
}


export const BusinessContext = createContext({} as BusinessContextProps);

export const BusinessProvider = ({ children }: { children: JSX.Element }) => {

    const [state, dispatch] = useReducer(businessReducer, initialState);

    const addBusiness = ( businessObj: BusinessData ) => {
        dispatch({
            type: 'save_business',
            payload: businessObj
        })
    }

    return (
        <BusinessContext.Provider value={{
            businessState: state,
            addBusiness,
        }}>
            { children }
        </BusinessContext.Provider>
    )
}