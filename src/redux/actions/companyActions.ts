import { SET_COMPANY, LOADING_UI, CLEAR_ERRORS, SET_EMPLOYEE } from "../types";


export const setCompanyData = (companyData: any) => (dispatch: any) => {
    console.log("here")
    console.log(companyData);
    dispatch({ type: LOADING_UI })
    dispatch(setCompany(companyData));
    dispatch({ type: CLEAR_ERRORS });
    console.log("success");


}

// set company here
export const setCompany = (companyData: any) => (dispatch: any) => {
    console.log("setting company")
    dispatch({
        type: SET_COMPANY,
        payload: companyData
    });
}

export const setEmployee = (employeeData: any) => (dispatch: any) => {
   
    console.log(employeeData)
    dispatch({ type: SET_EMPLOYEE, payload: employeeData })
}




