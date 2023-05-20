export const ADDCASH = 'ADD_CASH';

export const GETCASH = 'GET_CASH';

// const action = { type: '', payload: '' };

export function addCash(cash) {
    return { type: ADDCASH, payload: cash };
}

export function getCash(cash) {
    return { type: GETCASH, payload: cash };
}