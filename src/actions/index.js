export const addJob = payload => ({
    type: 'ADD_PROJECT',
    payload,
});

export const switchMenu = () => ({
    type: 'SWITCH_MENU'
});

export const viewportChange = payload => ({
        type: 'VIEWPORT_CHANGE',
        payload
})