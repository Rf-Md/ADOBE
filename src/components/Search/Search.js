import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';


import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

import { updateList } from '../../actions/ShoppingListAction'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  searchList = (e) => {
    let newList, list
    list = this.props.shoppingList.shoppingList
    if (e.target.value.length > 0) {
      newList = this.filterItems(list, e.target.value.trim());
    } else {
      newList = list;
    }
    this.props.updateList(newList)
  }

  filterItems = (items, searchVal) => {
    return items.filter(o =>
      Object.keys(o).some(k => o[k].toString().toLowerCase().includes(searchVal.toLowerCase())));
  }

  render() {
    return (
      <Fragment>
        <form noValidate autoComplete="off">
          <TextField
            onChange={this.searchList}
            label="search"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  shoppingList: state.shoppingList
});

const mapDispatchToProps = {
  updateList
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);

