const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            return {
                ...state,
                jobs: [...state.projects, action.payload]
            }
        case 'SWITCH_MENU':
            return {
                ...state,
                menuIsVisble: window.innerWidth <= 768 ? (state.menuIsVisble ? false : true) : true
            }
        case 'VIEWPORT_CHANGE':
            return {
                ...state,
                menuIsVisble: action.payload.innerWidth <= 768 ? false : true
            }
        default:
            return state;
    }
}

export default reducer;