import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Feed.styles';

class Feed extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Feed will mount');
  }

  componentDidMount = () => {
    console.log('Feed mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Feed will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Feed will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Feed did update');
  }

  componentWillUnmount = () => {
    console.log('Feed will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="FeedWrapper">
        Test content
      </div>
    );
  }
}

Feed.propTypes = {
  // bla: PropTypes.string,
};

Feed.defaultProps = {
  // bla: 'test',
};

export default Feed;
