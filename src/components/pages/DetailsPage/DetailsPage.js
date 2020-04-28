import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsPage extends Component {
  componentDidMount() {
    // dispatch to saga to call server API
    this.props.dispatch({
      type: 'GET_MOVIE',
      payload: this.props.match.params.id
    });
  }

  clickBackToList = (event) => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="algnLeft">
        <h2>Details</h2>

        <div>
          <button onClick={this.clickBackToList}>Back to List</button>
          <button>Edit</button>
        </div>

        <h3>{this.props.store.details.title}</h3>
        <p>{this.props.store.details.description}</p>
      </div>
    );
  }
}

const mapStoreToProps = store => ({ store });

export default connect(mapStoreToProps)(DetailsPage);
