import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

import { addToCart } from '../../actions/CartAction'


class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  addTocart = item => {
    this.props.addToCart(item)
  }
  render() {
    return (
      <Fragment>
        {/* <Grid item xs={6} > */}
        <img src={this.props.item.image} alt={this.props.item.name}></img>
        <div>{this.props.item.name}</div>
        <div>
          <span><b> &#x20b9; {this.props.item.price.actual}</b></span>
          &nbsp;&nbsp;
          <strike>{this.props.item.price.display}</strike>
          &nbsp;&nbsp;
          <span className='dicount-tag'>{this.props.item.discount}% off</span>
        </div>
        <Button variant="contained" color="primary" component="span" type="button" onClick={() => this.addTocart(this.props.item)} >
          Add to cart
        </Button>
        {/* </Grid> */}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  addToCart
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Item)
);

