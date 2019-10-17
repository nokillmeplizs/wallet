import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage'


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Route exact path="/" render={() => <MainPage />} />
      <Route path="/graphs" render={() => <GraphsPage />} />
    </div>
  );
}



const GraphsPage = () => {
  return (
    <div>ТУт будет график страница -2</div>
  )
}

export default App;
