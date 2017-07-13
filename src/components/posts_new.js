import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
  renderField(field){
    const {meta: {touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger': ''}`;
    return(
      <div className={ className }>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
          />
          <div className="text-help">
            { touched ? error : '' }
          </div>
      </div>
    )
  }

  onSubmit(values){
    console.log(values);
  }

  render(){
    const { handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <Field name="title" label="Title" component={this.renderField} />
        <Field name="categories" label="Categories" component={this.renderField} />
        <Field name="content" label="Content" component={this.renderField} />
        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    );
  }
}

function validate(fields){
  const errors = {};
  if(!fields.title){
    errors.title = "Falta el titulo";
  }

  return errors;

}

export default reduxForm({
  validate,
  form: "PostNewform"
})(PostsNew);
