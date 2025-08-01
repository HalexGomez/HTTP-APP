import { localHostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async(page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    // console.log(url);
    const res = await fetch(url);
    const data = await res.json();

    const usersMap = data.map(userLike => localHostUserToModel(userLike));

    return usersMap;    
}