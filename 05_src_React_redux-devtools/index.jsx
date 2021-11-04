import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import {Provider} from 'react-redux';
import App from './App';

//const rootNode = document.getElementById('root');




ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// const render =()=>{
//     ReactDOM.render(
//         <App store={store}/>,
//         rootNode
//     );
// }
//
// render();
// store.subscribe(render);
