export let state = {
    currentColor: ''
}

export const store = function store(initialState = state){
    return function(){
        return {
            getStore: () => initialState,
            setStore: (state) => initialState = state
        }
    }
}