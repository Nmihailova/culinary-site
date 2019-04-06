import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestGetRecipesApi } from './js/actions';

import { Header } from './components/header/HeaderComponent';
import MainInfo from './components/main/MainInfoComponent';

import './App.css';

const mapDispatchToProps = dispatch => {
  return {
      requestGetRecipesApi: () => dispatch(requestGetRecipesApi()),
  }
};

class AppComponent extends Component {
  componentWillMount() {
    this.props.requestGetRecipesApi()
  }
  render() {
    return (
      <div className="App">
        <Header />
        <MainInfo />
      </div>
    );
  }
}

const App = connect(null, mapDispatchToProps)(AppComponent);

export default App;
