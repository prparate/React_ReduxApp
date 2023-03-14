import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware} from "redux";
import thunk from "redux-thunk";
import amountReducer from "./reducers/amountReducer";

export const store = configureStore({
    reducer :{
        amount : amountReducer
    }}, {}, applyMiddleware(thunk))