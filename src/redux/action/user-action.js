import { loginService } from "../../services/endpoints/user-service";
import { loginReducer } from "../reducer/user-reducer";

export const loginAction = (data,navigate) => {
    return async(dispatch)=> {
        try {
            let result = await loginService(data) 
            localStorage.setItem('accessToken',result.accessToken)
            localStorage.setItem('refreshToken',result.refreshToken)
            navigate('/home')
            console.log(result)
            dispatch(loginReducer(result))
        } catch (error) {
            console.log(error)
        }
    }
}