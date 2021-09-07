import { createStore , compose , applyMiddleware } from "redux";
import usersReducer from "../Reducers/usersReducer";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import  thunk  from "redux-thunk"
import  firebase  from '../firebase/config'

const store = createStore( usersReducer, 
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore })),
    reactReduxFirebase(firebase),
    reduxFirestore(getFirestore),
)  )


export default store;