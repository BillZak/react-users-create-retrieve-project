import { getFirestore } from "redux-firestore"

export const addUser =  ( newUser ) => {
   // newUser.id = Math.random().toString();
    return(dispatch, state, {getFirestore})=>{
      getFirestore()
      .collection('users')
      .add(newUser).then((docs)=>{
          console.log(docs);
      });
    };
    // return{
     //    type: "ADD_USER",
      //   payload: newUser,
    // }
}

export const editUser = ( updatedUser )=>{
    return{
        type: "EDIT_USER",
        payload: updatedUser,
    }
}

export const deleteUser = (userId)=>{
    return{
       type: "DELETE_USER",
       payload: userId,
    }
}