import { SET_COMPANY, SET_UNAUTHENTICATED, LOADING_COMPANY, SET_EMPLOYEE } from "../types"
const initialState = {
    loading: false,
    companies: [] as any,
    employees: [] as any
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action: any) {
    switch (action.type) {
        case SET_UNAUTHENTICATED:
            return initialState;
        case SET_COMPANY:
            return {
                ...state,
                companies: [...state.companies, action.payload],
                loading: false,

            };
        case SET_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload]
            }
        case LOADING_COMPANY:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}