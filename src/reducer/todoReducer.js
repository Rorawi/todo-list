let initialList = {
    list_items: []
}

const TodoReducer = (state = initialList, action) => {
    switch (action.type) {
        case 'ADD_LIST':
            return {...state ,list_items: action.payload}
            
            break;
    
        default:
            break;
    }
    return state
}

export default TodoReducer;
