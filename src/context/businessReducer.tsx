import { Business, BusinessData } from "../interfaces/businessInterface"

type businessAction = 
    | { type: 'save_business', payload: BusinessData }

export const businessReducer = ( state: Business, action: businessAction ): Business => {
    switch (action.type) {
        case 'save_business': 
            return {
                ...state,
                business: [ ...state.business, action.payload ]
            }
    
        default:
            return state;
    }
}