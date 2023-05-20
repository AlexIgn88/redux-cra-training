// import logo from './logo.svg';
import './App.css';

import { useDispatch, useSelector } from "react-redux";
import { addCash, getCash } from './actions.js'

function App() {
  const dispatch = useDispatch();

  const cash = useSelector(state => state.cash);
  console.log(cash);

  return (
    <div className="training">
      <div>
        <div className="big">${cash}</div>
        <button className="big" onClick={() => dispatch(addCash(+prompt()))}>Пополнить счет</button>
        <button className="big" onClick={() => dispatch(getCash(+prompt()))}>Снять со счета</button>
      </div>
    </div>);
}

export default App;

{/* {return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */}