import { createStore , compose , applyMiddleware } from "redux";
import usersReducer from "../Reducers/usersReducer";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import  thunk  from "redux-thunk"
import  firebase  from '../firebase/config'

const store = createStore( usersReducer, 
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore })),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase),
)  )


export default store;