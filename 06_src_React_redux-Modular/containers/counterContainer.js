import Counter from '../components/counter';
import {createIncrement,createDecrement,createIncrementAsync} from '../redux/actions/counterActions';
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
    /*  state
        {
           count:0
           person:[]
        }
     */
    state=>({count:state.count,person:state.person}),//这里的state保存的是store中所管理的那个超级超级超级大的对象, 里面包含所有的状态
    {increment:createIncrement,
        decrement:createDecrement,
        incrementAsync:createIncrementAsync})(Counter);


//简写方式说明
//increment:createIncrement
/*
  function connect(createIncrement){
    return (value)=>{dispatch(createIncrement(value)} 在函数内又包了一层返回给组件
  }

 */