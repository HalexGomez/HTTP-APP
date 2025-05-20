import { User } from "../models/user";


/**
 * 
 * @param {User} user 
 * @returns {User}
 */
export const userToModelToLocalHost = (user) => {

    const {
        id,
        isActive,
        balance,
        avatar,
        firstName,
        lastName,
        gender,
    } = user;


    return {
        id,
        isActive,
        balance,
        avatar,
        first_name: firstName,
        last_name: lastName,
        gender,
    };
}