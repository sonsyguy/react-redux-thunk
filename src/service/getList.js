import {get} from 'axios'

export const getListData=()=>{
    return get('https://jsonplaceholder.typicode.com/posts');
}