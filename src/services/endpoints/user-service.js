import { http } from "../interceptor";

export const loginService = (data) => {
    return http.post('/users/login',data)
}