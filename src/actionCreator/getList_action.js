import {getListData} from '../service/getList'

export const getListAction = async (dispatch) =>{
    const res= await getListData();
    dispatch({
        type:'GET_LIST',
        payload: res.data
    })
}