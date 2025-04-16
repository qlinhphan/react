import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './component/MyComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
const App = () => {

  const click = () => {
    alert("you are clicked !")
  }

  return (
    <div>
      helloworld
      <button className='btn btn-primary' onClick={() => { click() }}>Ok, Fine</button>
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <MyComponent></MyComponent>
//       </div>
//     )
//   }
// }

export default App;


