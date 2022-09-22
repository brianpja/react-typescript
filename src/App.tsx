import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <h2 className="text-warning">App Component, nice job!</h2>
      <i className="fa fa-home" />
      <Customer name="Brian" age={30} />
      <Customer name="Ronnie"  />
    </>
  );
}

export default App;
