import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Posts from './components/post_index';
import PostNew from './components/posts_new';

/*
Root path*
*/

export default (
<Route path="/" component={App} >
  <IndexRoute component={Posts} />
  <Route path="posts/new" component={PostNew}/>
</Route>
);
