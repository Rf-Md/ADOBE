import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getShoppingList, updateList } from '../../actions/ShoppingListAction'
import ShoppingItem from './ShoppingItem';
import Sort from '../Sort/Sort'


import Grid from '@material-ui/core/Grid'

import './shopping.css'
import Filter from '../Filter/Filter';


class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: this.props.shoppingList.listToShow.length > 0 ? this.props.shoppingList.listToShow : [],
    };
  }

  componentDidMount() {
    this.props.getShoppingList()
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    let newState = { ...prevState };
    if (nextProps.shoppingList.listToShow.length !== newState.length) {
      return {
        shoppingList: nextProps.shoppingList.listToShow
      }
    } else return newState
  }

  priceLowToHigh = () => {
    let { shoppingList } = this.state
    let sortedArray = []
    sortedArray = Sort.priceLowToHigh(shoppingList)
    this.props.updateList(sortedArray)
  }

  priceHighToLow = () => {
    let { shoppingList } = this.state
    let sortedArray = []
    sortedArray = Sort.priceHighToLow(shoppingList)
    this.props.updateList(sortedArray)
  }

  dicountHighToLow = () => {
    let { shoppingList } = this.state
    let sortedArray = []
    sortedArray = Sort.discountHighToLow(shoppingList)
    this.props.updateList(sortedArray)
  }

  render() {
    let { shoppingList } = this.state
    let shoppingListToDisplay
    if (shoppingList.length > 0) {
      shoppingListToDisplay = shoppingList.map((item, index) =>
        <div id={index} key={index} className={'shopping-item'}>
          <ShoppingItem item={item}></ShoppingItem>
        </div>
      );
    }
    return (
      <Fragment>
        <Grid container className={'shopping-List'}>
          <Grid item xs={2}>
            <span ><b>Filters</b></span>
            <Filter shoppingList={this.props.shoppingList.shoppingList} />
          </Grid>
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={3}>
                <span ><b>Sort By</b></span>
              </Grid>
              <Grid item xs={3}>
                <span className="sort-item" onClick={this.priceLowToHigh}>Price: Low to High</span>
              </Grid>
              <Grid item xs={3}>
                <span className="sort-item" onClick={this.priceHighToLow}>Price: High to Low</span>
              </Grid>
              <Grid item xs={3}>
                <span className="sort-item" onClick={this.dicountHighToLow}>Discount</span>
              </Grid>
            </Grid>
            {shoppingList.length > 0 ? shoppingListToDisplay : <p className="no-items">No Items  </p>}
          </Grid>

        </Grid >
      </Fragment >
    );
  }
}

const mapStateToProps = state => ({
  shoppingList: state.shoppingList
});

const mapDispatchToProps = {
  getShoppingList,
  updateList
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShoppingList)
);

