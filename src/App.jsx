import React,{Component} from 'react';

class App extends Component{
  state={
    count:0
  }
  render(){
    let {count} = this.state;
    return(
        <div>
          <h3>当前计数为{count}</h3>
        </div>
    )
  };
}
export default App;
