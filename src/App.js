import React, { Component } from 'react';

import { Header } from './components/header/HeaderComponent';
import MainInfo from './components/main/MainInfoComponent';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainInfo />
      </div>
    );
  }
}