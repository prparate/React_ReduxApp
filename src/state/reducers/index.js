import { combineReducers } from "redux";
import amountReducer from "./amountReducer";


//This class is not used.
//With configureStore in store.js, list of reducer should be passed in reducers parameter
const reducers = combineReducers({
    amount : amountReducer//This file is used for combining reducers. Multiple reducers can be combined by comma separtor in this.
})

export default reducers