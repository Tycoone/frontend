import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Cards.styles';

class Cards extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Cards will mount');
  }

  componentDidMount = () => {
    console.log('Cards mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Cards will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Cards will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Cards did update');
  }

  componentWillUnmount = () => {
    console.log('Cards will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="CardsWrapper">
        Test content
      </div>
    );
  }
}

Cards.propTypes = {
  // bla: PropTypes.string,
};

Cards.defaultProps = {
  // bla: 'test',
};

export default Cards;
