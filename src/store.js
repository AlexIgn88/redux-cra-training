import { legacy_createStore as createStore } from 'redux'
import { ADDCASH, GETCASH } from './actions.js'

const defaultState = {
    cash: 0
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADDCASH:
            return { ...state, cash: state.cash + action.payload }
        case GETCASH:
            return { ...state, cash: state.cash - action.payload }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;