/*
New posts component
*/

import React from 'react';
import { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostNew extends Component {
  render() {
    const  {
      handleSubmit,
      fields: { title, categories, content }
     } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
         <h3>Create A New Post</h3>
         <div className={`form-group ${title.touched && title.error ? 'has-danger' : ''}`}>
           <label>Title</label>
           <input type="text" className="form-control" {...title} />
           <div className="text-help">
             { title.touched ? title.error : "" }
           </div>
         </div>
         <div className={`form-group ${categories.touched && categories.error ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            { categories.touched ? categories.error : "" }
          </div>
         </div>
         <div className={`form-group ${content.touched && content.error ? 'has-danger' : ''}`}>
           <label>Content</label>
           <textarea className="form-control" {...content} />
           <div className="text-help">
             { content.touched ? content.error : "" }
           </div>
         </div>

         <button type="submit" className="btn btn-primary">Submit</button>
         <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}
// Form validations
function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = "Please enter a Title";
  }
  if (!values.categories) {
    errors.categories = "Please enter a Category"
  }
  if (!values.content) {
    errors.content = "Please enter some content"
  }
  return errors;
}

export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostNew);
