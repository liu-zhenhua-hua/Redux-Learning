/**
 * combine all reducers
 */

import counterReducers from "./counterReducers";
import personReducers from "./personReducers";
import {combineReducers} from 'redux';


/**
 * store中保存了所有组件的状态 就是一个一般对象, 格式如下
 * {
 *     key1:value1,
 *     key2:value2,
 *     key3:value3
 * }
 * combineReducers 方法接受一个对象作为参数,
 * 对象中的key 就是store中保存该状态的key
 * 对象中的value 就是store中保存该状态的value
 */
export default combineReducers({
    count:counterReducers,
    person:personReducers
})

/**
 * 在store保存的state 如下
 * {
 *     count:0,
 *     person:[]
 * }
 */