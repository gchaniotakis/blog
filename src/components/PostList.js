import React from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';

class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPost();
    }
    render(){
        return<div>Post List</div>
    }
}

const mapStateToProps = state =>{
    return {posts: state.posts};
}

export default connect(mapStateToProps,{fetchPost})(PostList);