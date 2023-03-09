// @ts-ignore
import jwt_decode from "jwt-decode";
// import { postApiWithoutTokenWithFormData } from "../services/api.service";

export default function JwtTokenDecoder(): any {
    
    try {
        if (localStorage.getItem("user_token"))
            return true;
        else
            return false;
        // let token:any =  localStorage.getItem("user_token") === null || localStorage.getItem("user_token") === ''? 'false' : localStorage.getItem("user_token") || '{}';
        // return jwt_decode(token)
    } catch (e) {
        return false;
    }
};

export function addLog(data: any): any {
    try {

        let body = data
        console.log(body);
        // const response = postApiWithoutTokenWithFormData('/logs/createLogs', body);
    } catch (e) {
        return null
    }
};
