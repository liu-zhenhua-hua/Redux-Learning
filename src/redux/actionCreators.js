import {INCREMENT,DECREMENT} from './actionTypes';

export const createIncrement=value=>({type:INCREMENT,data:value});
export const createDecrement=value=>({type:DECREMENT,data:value});