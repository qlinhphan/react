import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';

import React from 'react';
import Header from './component/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className='container-content'>
        <Header></Header>
        <div className='main-contain'>
          <Outlet></Outlet>
        </div>
      </div>
    )
  }
}

export default App;


// <Link to="/admin">
//             <button>to Admin</button>
//           </Link>
//           <Link to="/user">
//             <button>to User</button>
//           </Link>

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Count = {count}</div>
        <button onClick={() => dispatch(increaseCounter())}>Increase</button>
        <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
      </header> */}
