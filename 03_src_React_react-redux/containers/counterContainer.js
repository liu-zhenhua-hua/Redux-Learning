import Counter from '../components/counter';
import {createIncrement,createDecrement} from '../redux/actionCreators';
import {connect} from 'react-redux';

//完整写法
// function mapStateToProps(state){
//     return {count:state};
// }

//简写方式
//let mapStateToProps = state=>({count:state})

//完整写法
// function mapDispatchToProps(dispatch){
//     return{
//         increment:(value)=>{dispatch(createIncrement(value))},
//         decrement:(value)=>{dispatch(createDecrement(value))}
//     };
// }

//简写方式
// let mapDispatchToProps = dispatch =>({
//     increment:(value)=>{dispatch(createIncrement(value))},
//     decrement:(value)=>{dispatch(createDecrement(value))}
// })


//完整写法
//export default connect(mapStateToProps,mapDispatchToProps)(Counter);

//简写方法
export default connect(
    state=>({count:state}),
    {increment:createIncrement,
        decrement:createDecrement})(Counter);


//简写方式说明
//increment:createIncrement
/*
  function connect(createIncrement){
    return (value)=>{dispatch(createIncrement(value)} 在函数内又包了一层返回给组件
  }

 */