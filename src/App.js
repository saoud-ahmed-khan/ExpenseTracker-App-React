import React from 'react';
import './App.css';
import {Header} from './header';
import {Blance} from './blance';
import {IncomeAndExpanse} from './IncomeAndExpanse';
import {Transection} from "./Transection";
import {AddTransection} from "./AddTransection";
import { GlobalProider } from "./globalcontext";
function App() {
  return (
    <GlobalProider>
    <div className="container">
      <div className="header"><Header></Header></div>
      <hr></hr>
      <div className="blance"><Blance></Blance></div>
      <div><IncomeAndExpanse></IncomeAndExpanse></div>
      <Transection></Transection>
      <AddTransection></AddTransection>
    </div>
    </GlobalProider>
  );
}

export default App;
