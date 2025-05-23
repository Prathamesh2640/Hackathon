import axios from "axios";
import { baseUrl } from "./apiconfig";

function getConfig() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    let config = {};
    if (user?.token) {
        config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };
    }
    return config;
}

// export async function getCategories() {
// 	//debugger;
// 	const url = `${baseUrl}/books/categories`;
// 	const resp = await axios.get(url, getConfig());
// 	if (resp.status !== 200)
// 		// check axios resp status (200 or else)
// 		throw new Error("Axios API call Error");
// 	// get axios resp data - result
// 	const result = resp.data;
// 	if (result.status !== "success")
// 		// if api status is not success ("error"), then get the message
// 		throw new Error(result.message);
// 	const data = result.data;
// 	return data;
// }

export async function getAllQuotes() {
    const url = `${baseUrl}/quote`;
    const resp = await axios.get(url, getConfig());
    if (resp.status !== 200)
        throw new Error("Axios API call Error");
    const result = resp.data;
    if (result.status !== "success")
        throw new Error(result.message);
    const data = result.data;
    return data;
}

export async function getMyQuotes() {
    const url = `${baseUrl}/quote/my`;
    const user = sessionStorage.getItem("user");
    console.log(user);
    const resp = await axios.get(url, user.id, getConfig());
    if (resp.status !== 200)
        throw new Error("Axios API call Error");
    const result = resp.data;
    if (result.status !== "success")
        throw new Error(result.message);
    const data = result.data;
    return data;
}


