import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from 'react-toolbox/lib/input';
import theme from './SimpleForm.css';
import { Button } from 'react-toolbox/lib/button';
import Checkbox from 'react-toolbox/lib/checkbox';
import Dropdown from 'react-toolbox/lib/dropdown';

const renderField = ({ input, meta, ...props }) => (
    <Input
        { ...input }
        { ...props }
        error={meta.touched && meta.error} />
);

const renderCheckBox = ({ input, ...props }) => (
    <Checkbox
        { ...input }
        { ...props }
    />
);

/*const renderDropDown = ({ input, ...props }) => (
    <Dropdown
        { ...input }
        { ...props }
    />
);*/


const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit} className={theme.form}>
            <div>
                <label>First Name</label>
                <div>
                    <Field
                        name="firstName"
                        component={renderField}
                        type="text"
                        placeholder="First Name"
                    />
                </div>
            </div>
            <div>
                <label>Last Name</label>
                <div>
                    <Field
                        name="lastName"
                        component={renderField}
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
            </div>
            <div>
                <label>Email</label>
                <div>
                    <Field
                        name="email"
                        component={renderField}
                        type="email"
                        placeholder="Email"
                        icon='email'
                    />
                </div>
            </div>
            <div>
                <label>Phone</label>
                <div>
                    <Field
                        name="phone"
                        component={renderField}
                        type="tel"
                        placeholder="Phone"
                        icon='phone'
                    />
                </div>
            </div>


            <div>
                <label htmlFor="employed">Employed</label>
                <div>
                    <Field
                        name="employed"
                        id="employed"
                        component={renderCheckBox}
                        type="checkbox"
                    />
                </div>
            </div>
            <div>
                <label>Notes</label>
                <div>
                    <Field name="notes" component={renderField} />
                </div>
            </div>
            <div>
                <Button type='submit' disabled={pristine || submitting} primary raised >Submit</Button>
                <Button type='button' disabled={pristine || submitting} onClick={reset}>  Clear Values </Button>


            </div>
        </form>
    );
};

export default reduxForm({
    form: 'simple'
})(SimpleForm);
