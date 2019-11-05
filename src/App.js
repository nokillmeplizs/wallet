import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import { ChartsPage } from "./components/ChartsPage/ChartsPage";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Route exact path="/" render={() => <MainPage />} />
      <Route path="/charts/:coinId" render={() => <ChartsPage />} />
    </div>
  );
}

export default App;
