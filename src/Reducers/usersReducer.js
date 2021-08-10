const initialState = {
    users :[
        {name: 'Bill', email: 'Bill@gmail.com', gen: '22'},
        {name: 'Zack', email: 'zac@gmail.com', gen: '87'}
    ]
};
var usersReducer = ( state = initialState ,action) => {
    switch(action.type){
        case "SET_USER":
        return {...state, username:action.payload};

        default: return state;
    }
}

export default usersReducer;