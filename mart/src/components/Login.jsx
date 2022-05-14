import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  
  return (


 <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="../assets/kit.jpg" className="card-img" alt="Background" height="700px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">







       
    
     
        <div className="mb-3">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5">
          
            <form id="loginform" >
             <center><h5 className="card-title display-3 fw-bolder mb-0">  Login</h5></center>
              
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
              
                />
              <br/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
              
                />
                <br/>
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">Check me out</label>
              </div>
        <center>    <button type="submit" className="btn btn-primary">
                Submit
              </button>  </center>  
            </form>
          </div>
     </div>
        </div>
      </div>
      
 







            </div>
        </div>
      </div>
   























  );
}
export default Login;