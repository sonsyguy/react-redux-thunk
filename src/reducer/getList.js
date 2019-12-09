const initState = {
    data:[]
}

export default function getList(state=initState,action){
    console.log(action);
    switch(action.type){
       
        case 'GET_LIST':
            return {
                ...state,
                data:action.payload
            }
        default:
            return state
    }
}