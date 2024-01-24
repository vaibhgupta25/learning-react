import {configureStore} from "@reduxjs/toolkit"
import { countReducer } from "./reducers/countReducer";

const store = configureStore({
    reducer:{
        count : countReducer
    },
})
export default store;