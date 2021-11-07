import {INCREMENT,DECREMENT} from '../actionTypes';

let initState=0
function operaCount(preState=initState,action){
    console.log('------ Reducer 被调用了, action是: ',action);
    let {type,data} = action;
    let newState;
    switch (type){
        case INCREMENT:
            newState = preState + data;
            console.log(newState);
            return newState;
        case DECREMENT:
            newState = preState - data;
            console.log(newState);
            return newState;
        default:
            return preState;
    }
}


export default operaCount;