
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";
import AuthWrapper from "../../components/Styling/authwrapper/AuthWrapper";
import React from 'react'
import './register.css'
import { medicine } from "../../components/Styling/asset";


const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="wrapper">
        <div className="auth-register">
          <div className="auth-container">
            <h4 className="fw-bold welcome">Registration</h4>
            <span className="welcome">Start Donating Now</span>
            <Form
              formTitle={""}
              submitBtn={"Register"}
              formType={"register"}
            />
           
          </div>
        </div>
        <AuthWrapper img={medicine} />
      </div>


            
        
      )}
    </>
  );
};

export default Register;
