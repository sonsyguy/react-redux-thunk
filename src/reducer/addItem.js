export default  function addItem(state={count:1},action){
    switch(action.type){
        case 'COUNTER_ADD':
            return {
                ...state,
                count:state.count+1
            }
        case 'COUNTER_REDUCE':
                return {
                    ...state,
                    count:state.count-1
                }
        default:
            return state
    }
}