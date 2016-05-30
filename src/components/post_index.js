/*
Posts component to show posts
*/
import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts(); // coming from fetchposts in map dispatch
  }
  render() {
    return (
      <div>List of Blog posts</div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts}, dispatch)
}
export default connect(null, mapDispatchToProps)(Posts);
