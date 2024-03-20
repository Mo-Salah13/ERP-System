import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import * as Yup from 'yup'

export default function Login() {
    let Navigate= useNavigate();
    let [loading, setLoading] = useState(true)

    let validationSchema = Yup.object({
        email: Yup.string().email('email is invalid').required('email is required'),
        password: Yup.string().required('password is required'),
    })

async function LoginForme(value) { 
        setLoading(true);  
  
        Navigate('/home')
  
   
    }
    let formik = useFormik({
        initialValues: {
          
            email: '',
            password: ''
        }, validationSchema,
        onSubmit: LoginForme
    })

  return <>
    <h2>Login Now...........</h2>
        {/* {errMessage !== "" ? <div className="alert alert-danger">{errMessage}</div> : ""} */}

        <form onSubmit={formik.handleSubmit}>
          
            <div>
                <label htmlFor="email">Email</label>
                <input onBlur={formik.handleBlur} onChange={formik.handleChange} name='email' className='mb-3 form-control' type="email" id='email' />
                {(formik.errors.email && formik.touched.email) ? <div className="alert alert-danger">
                    {formik.errors.email}
                </div> : ''}
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input onBlur={formik.handleBlur} onChange={formik.handleChange} name='password' className='mb-3 form-control' type="password" id='password' />
                {(formik.errors.password && formik.touched.password) ? <div className="alert alert-danger">
                    {formik.errors.password}
                </div> : ''}
            </div>

        <div className="d-flex justify-content-between">
            <div>
               <Link to="/forgetPassword">ForgetPassowrd?</Link>
            </div>
        <div>
            
            {loading ? <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn btn-success' >Login</button> : <button type='button' className='btn btn-success' >
                  <i className="fa-solid fa-spinner fa-spin"></i>
              </button>}
            </div>
        </div>
            
        </form>
    </>

}
