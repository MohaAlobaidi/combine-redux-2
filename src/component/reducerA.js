

const initState = {
    A:1,
}

const reducerA = (state=initState , action) =>{
    if(action.type === 'UPDATE_A'){
        return{
            ...state,
            A:state.A + action.b
        }
    }

    return state
}
export default reducerA