import React,{Component} from 'react';

/** React statement with Redux 不使用Redux的状态管理 */
class App extends Component{

  selectNumber = React.createRef();
  state={
    count:0
  }

  increment=()=>{
      let {value} = this.selectNumber.current;
      let {count} = this.state;
      this.setState({count:count + value*1})
  };

  decrement=()=>{
      let {value} = this.selectNumber.current;
      let {count} = this.state;
      this.setState({count:count - value*1});
  };

  incrementIfOdd=()=>{
      let {value} = this.selectNumber.current;
      let {count} = this.state;
      if(count%2===1){
          this.setState({count:count+value*1});
      }
  };

  incrementAsync=()=>{
      let {value} = this.selectNumber.current;
      let {count} = this.state;
      setTimeout(()=>{
          this.setState({count:count+value*1});
      },3000)
  };

  render(){
    let {count} = this.state;
    return(
        <div>
            <h3>当前计数为{count}</h3>
            <select ref={this.selectNumber}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={this.increment}>+</button>&nbsp;
            <button onClick={this.decrement}>-</button>&nbsp;
            <button onClick={this.incrementIfOdd}>increment if Odd</button>&nbsp;
            <button onClick={this.incrementAsync}>increment Async</button>
        </div>
    )
  };
}
export default App;