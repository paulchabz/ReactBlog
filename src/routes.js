import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Posts from './components/post_index';

/*
Root path*
*/

export default (
<Route path="/" component={App} >
  <IndexRoute component={Posts} />
</Route>
);
