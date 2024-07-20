
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";
import AuthWrapper from "../../components/Styling/authwrapper/AuthWrapper";
import { Link } from "react-router-dom";
import { loginfestives } from "../../components/Styling/asset";
import React from 'react'
import "./login.css";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="wrapper">
        <div className="auth">
          <div className="auth-container">
            
            <h4 className="welcome" >Welcome Back!</h4>
            <Form
              formTitle={""}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
        <AuthWrapper img={loginfestives} />
      </div>


          


      
      )}
    </>
  );
};

export default Login;
