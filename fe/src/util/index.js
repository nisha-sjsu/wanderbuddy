import { isEmpty } from "lodash";

export const setLocalStorage = (response) => {
    localStorage.setItem('userToken', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
};

export function isUserSignedIn() {
    return !isEmpty(localStorage.getItem('userToken'));
}

export function getToken() {
    return localStorage.getItem('userToken');
}

export function getUser() {
    const userString = localStorage.getItem('user');
    return JSON.parse(userString);
}

export function isAdmin() {
    const userString = localStorage.getItem('user');
    return JSON.parse(userString).admin;
}
export function generatePrompt(placeArray) {
    let prompt = "Please suggest the top 3 places to visit in ";

    for (let i = 0; i < placeArray.length; i++) {
        prompt += placeArray[i];

        if (i < placeArray.length - 1) {
            prompt += ", followed by the top 3 places to visit in ";
        }
    }

    prompt += ".";

    return prompt;
}
