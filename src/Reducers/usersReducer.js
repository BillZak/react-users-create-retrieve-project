const initialState = {
    users :[]
};

var usersReducer = ( state = initialState ,action) => {
    switch(action.type){
        case "ADD_USER":
        return {...state.users, users: [...state.users, action.payload]};
        
        case "DELETE_USER":
            const savedusers = state.users.filter( 
                (user)=>{
                   return user.id !== action.payload;
                })
        return {...state,users: savedusers}

        case "EDIT_USER":
        return{...state,users: state.users.map((user) =>
            user.id === action.payload.id ? action.payload : user )}

        case "SET_ALL_USERS":
        return {...state, users: action.payload}

        default: return state; 
    }
}

export default usersReducer;