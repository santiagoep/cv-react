const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            return {
                ...state,
                jobs: [...state.projects, action.payload]
            }
        default:
            return state;
    }
}

export default reducer;