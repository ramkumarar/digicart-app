import React from 'react';
import Input from 'react-toolbox/lib/input';
import theme from './UserForm.css';
import { Button } from 'react-toolbox/lib/button';

class UserForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      phone: '',
      email: '',
      hint: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };


  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

  }


  render() {
    return (
      <form className={theme.form} onSubmit={this.handleSubmit}>
        <div >
          <Input type='text' label='FirstName' name='fname' value={this.state.fname} onChange={this.handleChange.bind(this, 'fname')} maxLength={16} />
          <Input type='text' label='LastName' name='lname' value={this.state.lname} onChange={this.handleChange.bind(this, 'lname')} maxLength={16} />
          <Input type='email' label='Email address' icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
          <Input type='tel' label='Phone' name='phone' icon='phone' value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} />
          <Input type='text' value={this.state.hint} label='Required Field' hint='With Hint' required onChange={this.handleChange.bind(this, 'hint')} icon={<span>P</span>} />
          <Button type='submit' primary raised >Register </Button>

        </div>
      </form>
    );
  }
}

export default UserForm;
