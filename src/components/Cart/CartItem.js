import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { removeFromCart } from '../../actions/CartAction'

import './cart.css'


class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: this.props.item ? this.props.item : {},
      actualPrice: this.props.item ? this.props.item.price.actual : 0,
      displayPrice: this.props.item ? this.props.item.price.display : 0
    };
  }

  removeFromcart = item => {
    this.props.removeFromCart(item)
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    let newState = { ...prevState }
    /* if (this.state.currentItem.itemsCount != newState.currentItem.itemsCount) {
      console.log("aaaaaaaaaaaaa")
      return newState

    } */

    if (newState.currentItem.itemsCount > 1) {
      return newState
    }
    console.log('arif......1......nextProps, prevState', nextProps, prevState)
    if (nextProps.item && prevState.name !== nextProps.item.name) {
      newState.currentItem = nextProps.item ? nextProps.item : {}
      newState.actualPrice = nextProps.item ? nextProps.item.price.actual : 0
      newState.displayPrice = nextProps.item ? nextProps.item.price.display : 0
      return newState;
    }
  }

  addOrRemoveItem = (item, addOrRemove) => {
    let { actualPrice, displayPrice } = this.state
    let count = item.itemsCount
    if (addOrRemove === 'add')
      count++
    else if (count <= 1)
      return
    else
      count--
    let multipliedActualPrice = actualPrice * count
    let multipliedDisplayPrice = displayPrice * count
    let currentItem = { ...this.state.currentItem }
    currentItem.itemsCount = count;
    currentItem.price['actual'] = multipliedActualPrice
    currentItem.price['display'] = multipliedDisplayPrice
    this.setState({ currentItem }, () => { this.props.updateItem(this.state.currentItem) })
  }


  render() {
    let { currentItem } = this.state
    return (
      <Fragment>
        <div className='cart-item-wrapper'>
          <Grid container >
            <Grid item xs={4}>
              <img src={currentItem.image} alt={currentItem.name}></img>
            </Grid>
            <Grid item xs={8} >
              <div>{currentItem.name}</div>
              <div>
                <span>{currentItem.price.actual}</span>
                &nbsp;&nbsp;
                <strike>{currentItem.price.display}</strike>
                &nbsp;&nbsp;
                <span>{currentItem.discount}% off</span>
              </div>
              <div>
                <RemoveCircleOutlineIcon onClick={() => this.addOrRemoveItem(currentItem, 'remove')}></RemoveCircleOutlineIcon>
                <Box bgcolor="grey.300" mx={0.5} width={20} display="inline-block">
                  {currentItem.itemsCount}
                </Box>
                {/*    <input value={currentItem.itemsCount} ></input> */}
                <AddCircleOutlineIcon onClick={() => this.addOrRemoveItem(currentItem, 'add')}></AddCircleOutlineIcon>
              </div>
              <Button variant="contained" color="primary" component="span" type="button" onClick={() => this.removeFromcart(currentItem)} >
                Remove
              </Button>

            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cartList: state.cartList.cartList

});

const mapDispatchToProps = {
  removeFromCart
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartItem)
);

