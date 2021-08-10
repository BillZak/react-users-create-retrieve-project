import { createStore } from "redux";
import usersReducer from "../Reducers/usersReducer";

const store = createStore( usersReducer )


export default store;