import { SET_COMPANY, LOADING_UI, CLEAR_ERRORS, SET_EMPLOYEE } from "../types";


export const setCompanyData = (companyData: any) => (dispatch: any) => {
 
    dispatch({ type: LOADING_UI })
    dispatch(setCompany(companyData));
    dispatch({ type: CLEAR_ERRORS });


}

// set company here
export const setCompany = (companyData: any) => (dispatch: any) => {

    dispatch({
        type: SET_COMPANY,
        payload: companyData
    });
}

export const setEmployee = (employeeData: any) => (dispatch: any) => {

    dispatch({ type: SET_EMPLOYEE, payload: employeeData })
}




