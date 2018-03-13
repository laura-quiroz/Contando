import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import './index.css';
import App from './App.Container';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
  title: 'CONTADOR',
  num: 0,
}

//INICIA EL REDUCER
const reducerToCount = (state=initialState, action) =>{
  switch (action.type) {
    case 'INCREMENT':
      return{
        ...state,
         num: state.num + 1
       }
    case 'DECREMENT':
      return{
        ...state,
        num: state.num - 1,
        amigo: "Bozo el payaso"
      }
    default:
      return state
  }
}
//FIN DEL REDUCER

const store = createStore(
   reducerToCount,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
)
registerServiceWorker()
