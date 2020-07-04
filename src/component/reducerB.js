


const initState = {
    B:1
}

const reducerB = (state=initState , action) =>{
 
 if (action.type === 'UPDATE_B'){
        return{
            ...state,
            B: state.B + action.a
        }
    }

    return state
}
export default reducerB