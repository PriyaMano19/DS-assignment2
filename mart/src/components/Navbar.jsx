import react from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
 
  
   
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                 <div className = "container">
                <Link className="navbar-brand fw-bold fs-4" to="/">Saraz Collections</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-6 mb-1g-0">
                        <li className="nav-item active ms-6">
                            <Link className="nav-link ms-4" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-4" to="/products" >Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-4" to="/about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-4 " to="/contact">Contact us</Link>
                        </li>
                    </ul>
              <div className='buttons'>
                  <Link to='/login' className='btn btn-outline-dark'>
                  <i className='fa fa-sign-in me-1'></i>login</Link>
              </div>
              <div className='buttons'>
                  <Link to='/register' className='btn btn-outline-dark ms-2'>
                  <i className='fa fa-sign-in me-1'></i>Register</Link>
              </div>
              <div className='buttons'>
                  <Link to='/cart' className='btn btn-outline-dark ms-2 '>
                  <i className='fa fa-sign-in me-1'></i>Cart</Link>
              </div>


                </div>
              </div>
            </nav>
            <div >

                
            

        </div>
                 </div>
        
         
    );
  


}

export default Navbar;