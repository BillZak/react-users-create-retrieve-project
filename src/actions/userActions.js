export const addUser =  ( newUser )=>{
     return{
         type: "ADD_USER",
         payload: newUser,
     }
}