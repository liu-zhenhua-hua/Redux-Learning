import React, {Component} from 'react';
import CounterContainer from "./containers/counterContainer";

class App extends Component {
    render() {
        return (
            <div>
                <CounterContainer></CounterContainer>
            </div>
        );
    }
}
export default App;