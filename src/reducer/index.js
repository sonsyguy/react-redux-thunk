import {combineReducers} from 'redux'
import addItem from './addItem'
import getList from './getList'

const rootReducers = combineReducers({
    counter:addItem,
    post:getList
})

export default rootReducers



