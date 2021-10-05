
export const addUser =  ( newUser ) => {
   // newUser.id = Math.random().toString();
    return(dispatch, state, {getFirestore})=>{
      getFirestore()
      .collection("users")
      .add({...newUser, timestamp: getFirestore().FieldValue.serverTimestamp()})
      .then(()=>{});
    };
}

export const editUser = (updatedUser)=> {
    console.log(updatedUser.id)
    return(dispatch, state, {getFirestore})=>{
      getFirestore().collection("users")
      .doc(updatedUser.id).update(updatedUser)
      .then(
          ()=> {
              console.log("Successfuly updated")
          }
      )
      .catch(
          (error)=> {
              console.error("Remove Users", error);
          }
      )      
        // type: "EDIT_USER",
        // updatedUser : updatedUser
    }
   
}

export const deleteUser = (userId)=>{
    return(dispatch,state, {getFirestore})=>{
      getFirestore().collection("users").doc(userId).delete()
      .then(()=>{})
    }
}

export const getAllUsers = () =>{
    return(dispatch,state, {getFirestore})=>{
        getFirestore().collection("users")
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot)=>{
            let users = [];
            snapshot.forEach((doc)=>{
                users.push({...doc.data(), id:doc.id})
            });

            dispatch({
                type: "SET_ALL_USERS",
                payload: users
            })
        })
    }
}