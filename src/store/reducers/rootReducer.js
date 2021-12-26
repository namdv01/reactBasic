const initState = {
    users: [
        { id: 1, name: 'Nam' },
        { id: 2, name: 'Vinh' },
        { id: 3, name: 'Suon' }
    ]
}
const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'delete_user':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            };
            break;
        case 'create_user':
            let id = Math.floor(Math.random() * 101)
            let user = {
                id: id,
                name: 'random - ' + id
            }

            return {
                ...state, users: [...state.users, user]
            };
            break;
        default:
            return state;
    }
}
export default rootReducer;