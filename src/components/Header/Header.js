import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import StarIcon from '@material-ui/icons/Star';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Grid from '@material-ui/core/Grid'

import Search from '../Search/Search'

import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  openCart = () => {
    this.props.history.push('cart')
  }

  render() {
    return (
      <Fragment>
        <Grid container className='Header'>
          <Grid item xs={3}>
            <StarIcon className='Header-Star-Icon'></StarIcon>
          </Grid>
          <Grid item xs={6} >
            <Search />
          </Grid>
          <Grid item xs={3} >
            <ShoppingCartIcon className='Header-Cart-Icon' onClick={this.openCart}></ShoppingCartIcon>
            <span className='cart-number'>{this.props.cartList.length}</span>
          </Grid>
        </Grid>
      </Fragment >
    );
  }
}

const mapStateToProps = state => ({
  cartList: state.cartList.cartList

});

const mapDispatchToProps = {
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);

