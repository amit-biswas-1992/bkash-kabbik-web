// @ts-ignore
import jwt_decode from "jwt-decode";

export default function JwtTokenDecoder(): any {

    // var token: any = localStorage.getItem("user_token");
    // var decoded = jwt_decode(token);

    // console.log("Siam decode" ,decoded);

    try {
        // if (localStorage.getItem("user_token") === 'undefined' || localStorage.getItem("user_token") === '' || localStorage.getItem("user_token") === null)

        //     return false;

        // else
        //     return true;
        let token:any =  localStorage.getItem("user_token") === null || localStorage.getItem("user_token") === 'undefined' || localStorage.getItem("user_token") === ''? 'false' : localStorage.getItem("user_token") || '{}';
        return jwt_decode(token);

    } 
    
    catch (e) {
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
