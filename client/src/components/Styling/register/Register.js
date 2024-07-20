import React, { Component } from 'react'
import './register.css'
import AuthWrapper from '../authwrapper/AuthWrapper'
import { Link } from 'react-router-dom'
import { medicine } from '../asset'

export class Register extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="auth-register">
          <div className="auth-container">
            <h4 className="fw-bold">Registration</h4>
            <span>Create Your Account with Us.</span>

           
          </div>
        </div>
        <AuthWrapper img={medicine} />
      </div>
    )
  }
}

export default Register
