// 引入createStore，用于创建redux中最为核心的sotre对象
import {createStore, combineReducers} from "redux"
import articleDesc from "./reducer/articleDesc"
export default createStore(combineReducers({
    articleDesc,
}))
