import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function Register() {
    let Navigate = useNavigate();
    let [loading, setLoading] = useState(true);

    async function RegisterForme() {

        setLoading(true);


        Navigate('/login');

    }

    let validationSchema = Yup.object({
        name: Yup.string().min(3, 'name min 3').max(15, 'name max 15').required('name is required'),
        email: Yup.string().email('email is invalid').required('email is required'),
        phone: Yup.string().required('phone is required'),
        password: Yup.string().required('password is required'),
        rePassword: Yup.string().oneOf([Yup.ref('password')], 'rePassword not match').required('password is required')
    })

    let formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            password: '',
            rePassword: ''
        },
        onSubmit: RegisterForme,
        validationSchema
    })
    return <>
        <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
            <h2 className='text-center'>Register Now...........</h2>

<form onSubmit={formik.handleSubmit}>
    <div>
        <label htmlFor="name">Name</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} name='name' className='mb-3 form-control' type="text" id='name' />
        {(formik.errors.name && formik.touched.name) ? <div className="alert alert-danger">{formik.errors.name}</div> : ''}
    </div>
    <div>
        <label htmlFor="phone">Phone</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} name='phone' className='mb-3 form-control' type="tel" id='phone' />

        {(formik.errors.phone && formik.touched.phone) ? <div className="alert alert-danger">
            {formik.errors.phone}
        </div> : ''}
    </div>

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


    <div>
        <label htmlFor="rePassword">rePassword</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} name='rePassword' className='mb-3 form-control' type="password" id='rePassword' />
        {(formik.errors.rePassword && formik.touched.rePassword) ? <div className="alert alert-danger">
            {formik.errors.rePassword}
        </div> : ''}
    </div>

    {loading ? <div className='row justify-content-center w-100 align-items-center'><button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn w-25 text-white btn-info' >Register</button></div> : <button type='button' className='btn btn-info' >
        <i className="fa-solid fa-spinner fa-spin"></i>
    </button>}



</form>
            </div>
        </div>
    </>

}
