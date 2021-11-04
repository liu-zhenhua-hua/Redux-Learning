//支持Redux开发者调试工具的包依赖
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));




//yarn add redux-devtools-extension  Redux Developer Tools