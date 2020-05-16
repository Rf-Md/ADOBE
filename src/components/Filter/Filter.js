import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateList } from '../../actions/ShoppingListAction'
import Slider from '@material-ui/core/Slider';


class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: [100, 100000]
    };
  }


  handleChange = (event, newValue) => {

    let shoppingList = this.props.shoppingList
    this.setState({
      sliderValue: newValue
    }, () => {
      let { sliderValue } = this.state
      let filteredList = shoppingList.filter((i) => {
        return (parseInt(i.price.actual) > sliderValue[0] && parseInt(i.price.actual) <= sliderValue[1])
      })
      this.props.updateList(filteredList)
    })
  }

  render() {

    let { sliderValue } = this.state
    return (
      <Fragment>
        <div className='filter'>
          <span className='filter-value-left'>&#x20b9;{sliderValue[0]}</span>
          <span className='filter-value-right'>&#x20b9;{sliderValue[1]}</span>
          <Slider
            value={sliderValue}
            onChange={this.handleChange}
            aria-labelledby="range-slider"
            min={100}
            max={100000}
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  updateList
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filter)
);

