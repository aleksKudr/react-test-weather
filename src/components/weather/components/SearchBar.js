import React, { Component } from 'react';
// import {
//   Form, Label, Input,
// } from 'reactstrap';
import {
  Field, reduxForm
} from 'redux-form';

class SearchBar extends Component {
  renderError({
    error, touched
  }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      );
    }
  }

  renderInput = ({
    input, label, meta
  }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>
          {label}
        </label>
        <input
          {...input}
          autoComplete="off"
        />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="city"
          component={this.renderInput}
          label="Search City "
        />

        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate
})(SearchBar);

// class SearchBar extends React.Component {
//   state = { term: '' };

//   onInputChange = (event) => {
//     this.setState({ term: event.target.value });
//   };

//   onFormSubmit = (event) => {
//     event.preventDefault();

//     this.props.onFormSubmit(this.state.term);
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.onFormSubmit}>
//           <div>
//             <label>City Search  </label>
//             <input
//               type="text"
//               value={this.state.term}
//               onChange={this.onInputChange}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default SearchBar;
