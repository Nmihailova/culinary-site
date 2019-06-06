import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipe } from '../../js/actions';

import { SideBar } from './sidebar/SideBarComponent';
import CommonDisplay from './commonDisplay/CommonDisplayComponent';

import './main.scss';

const mapDispatchToProps = dispatch => {
  return {
    getRecipe: () => dispatch(getRecipe()),
  }
};

class MainInfoComponent extends Component {
  componentWillMount () {
    this.props.getRecipe()
  }
  render () {
    return (
      <main className="main-info">
        <SideBar />
        <CommonDisplay />
      </main>
    )
  }
};

const MainInfo = connect(null, mapDispatchToProps)(MainInfoComponent);
export default MainInfo;
