import {INCREMENT,DECREMENT} from '../actionTypes';

export const createIncrement=value=>({type:INCREMENT,data:value});
export const createDecrement=value=>({type:DECREMENT,data:value});
export const createIncrementAsync = (value,delay)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrement(value));
        },delay)
    }
}