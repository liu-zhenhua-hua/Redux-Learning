import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import App from './App';

const rootNode = document.getElementById('root');


ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

const render =()=>{
    ReactDOM.render(
        <App store={store}/>,
        rootNode
    );
}

render();
store.subscribe(render);
