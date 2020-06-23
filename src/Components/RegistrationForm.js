import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class RegistrationForm extends React.Component {
    render() {
        return (
            <Formik
                initialValues={{
                    firstName:'',
                    lastName:'',
                    email:'',
                    password:'',
                    confirmPassword:'',
                }}
                validationSchema={Yup.object().shape({
                    firstName:Yup.string()
                        .required('First Name is required'),
                    lastName:Yup.string()
                        .required('Last Name is required'),
                    email:Yup.string()
                        .email('Email is required')
                        .required('Email is required'),
                    password:Yup.string()
                        .min(8, 'Password must be 8 characters')
                        .required('Password is required'),
                    confirmPassword:Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required')
                })}

                onSubmit={fields => {
                    alert('Sucess!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    console.log(fields);
                }}

                >
                    {({ errors, status, touched }) => (
                        <Form>
                            <div className='login'>
                                <div className='first-name'>
                                    <label htmlFor='firstName'>First Name</label>
                                        <Field 
                                            name="firstName" 
                                            type='text'
                                            className={'form-control' + (errors.firstName && touched.firstName ? ' is-valid': '')} />
                                        <ErrorMessage name= 'firstName' component='div' className='invalid-feedback' />
                                </div>
                                <div className='last-name'>
                                    <label htmlFor='lastName'>Last Name</label>
                                        <Field 
                                            name="lastName" 
                                            type='text'
                                            className={'form-control' + (errors.lastName && touched.lastName ? ' is-valid': '')} />
                                        <ErrorMessage name= 'lastName' component='div' className='invalid-feedback' />
                                </div>
                                <div className='email'>
                                    <label htmlFor='email'>Email</label>
                                        <Field 
                                            name="email" 
                                            type='text'
                                            className={'form-control' + (errors.email && touched.email ? ' is-valid': '')} />
                                        <ErrorMessage name= 'email' component='div' className='invalid-feedback' />
                                </div>
                                <div className='password'>
                                    <label htmlFor='password'>Password</label>
                                        <Field 
                                            name="password" 
                                            type='password'
                                            className={'form-control' + (errors.password && touched.password ? ' is-valid': '')} />
                                        <ErrorMessage name= 'password' component='div' className='invalid-feedback' />
                                </div>
                                <div className='confirm-password'>
                                    <label htmlFor='confirmPassword'>Confirm Password</label>
                                        <Field 
                                            name="confirmPassword" 
                                            type='password'
                                            className={'form-control' +  (errors.confirmPassword && touched.confirmPassword ? ' is-valid': '')} />
                                        <ErrorMessage name= 'confirmPassword' component='div' className='invalid-feedback' />
                                </div>
                                <div className='form-group'>
                                    <button 
                                        type='submit'
                                        className='button-1'>
                                            Register
                                    </button>
                                    <button 
                                        type='reset'
                                        className='button-2'>
                                            Reset
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
        )
    }
}

export {RegistrationForm};