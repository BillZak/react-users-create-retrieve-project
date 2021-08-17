const initialState = {
    users :[]
};
var usersReducer = ( state = initialState ,action) => {
    switch(action.type){
        case "ADD_USER":
        return {...state.users, users: [...state.users, action.payload]};

        default: return state;
    }
}

export default usersReducer;