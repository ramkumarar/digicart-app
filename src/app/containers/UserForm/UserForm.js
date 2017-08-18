import React from 'react';

import SimpleForm from './SimpleForm';
import showResults from './showResults';
import { Values } from 'redux-form-website-template';

class UserForm extends React.Component {

  render() {
    return (
      <div style={{ padding: 15 }}>
        <h2>Simple Form</h2>
        <SimpleForm onSubmit={showResults} />
        <Values form="simple" />
      </div>
    );
  }
}

export default UserForm;
