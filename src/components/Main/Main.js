import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Header/Header'
import ShoppingList from '../ShoppingList/ShoppingList'


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Fragment>
        <Header></Header>
        <ShoppingList></ShoppingList>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);

