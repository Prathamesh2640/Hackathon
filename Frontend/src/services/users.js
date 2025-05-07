import axios from "axios";
import { baseUrl } from "./apiconfig";

export async function userSignIn(email, password) {
    const url = `${baseUrl}/users/signin`;
    const reqbody = { email, password };
    const resp = await axios.post(url, reqbody);
    console.log(resp);
    if (resp.status !== 200)
        throw new Error("Axios API call Error");
    const result = resp.data;
    if (result.status !== "success")
        throw new Error(result.message);
    const data = result.data;
    return data;
}

export async function userSignUp(firstName, lastName, email, password, phoneno, address) {
    const url = `${baseUrl}/users/signup`;
    const reqbody = { firstName, lastName, email, password, phoneno, address };
    const resp = await axios.post(url, reqbody);
    console.log(resp);
    if (resp.status !== 200)
        throw new Error("Axios API call Error");
    const result = resp.data;
    if (result.status !== "success")
        throw new Error(result.message);
    const data = result.data;
    return data;
}
