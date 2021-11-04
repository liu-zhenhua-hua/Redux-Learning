import React,{Component} from 'react';

class Counter extends Component{


    selectNumber = React.createRef();

    componentDidMount() {
        console.log(this.props);
        console.log(this.selectNumber);
    }

    increment=()=>{
        let {value} = this.selectNumber.current;
        //this.props.store.dispatch(createIncrement(value*1));
        this.props.increment(value*1);
    };

    decrement=()=>{
        let {value} = this.selectNumber.current;
        //this.props.store.dispatch(createDecrement(value*1));
        this.props.decrement(value*1);
    }

    incrementIfOdd=()=>{
        let {value} = this.selectNumber.current;
        let currentState = this.props.count;
        if(currentState%2 === 1){
            //this.props.store.dispatch(createIncrement(value*1));
            this.props.increment(value*1);
        }
    }

    incrementAsync=()=>{
        let {value} = this.selectNumber.current;
        // setTimeout(()=>{
        //     //this.props.store.dispatch(createIncrement(value*1));
        //     this.props.increment(value*1);
        // },3000);
        this.props.incrementAsync(value*1,3000);
    }

    render(){
        return(
            <div>
                <h3>显示计数为{this.props.count} </h3>
                <select ref={this.selectNumber}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>increment If Odd</button>&nbsp;
                <button onClick={this.incrementAsync}>increment Async</button>
            </div>
        );
    }

}

export default Counter;