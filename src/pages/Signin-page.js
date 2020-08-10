import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className="Register">
        <div className="Register-image-prop Login-image">
          <div className="Register-image-overlay">
            <p>
              <em>"Happiness is cakes, cupcakes and more cakes" - Anon</em>
            </p>
          </div>
        </div>
        <div className="Register-form-lyt">
          <div className="Register-form">
            <h3 className="Register-heading">Sign In</h3>
            <h5 className="Register-subtext">
              Not into cake yet? <span>Get In!</span>
            </h5>
            <form className="Reg-form Login-form">
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input-full"
                />
                <label>Email</label>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="input-full"
                />
                <label>Password</label>
              </div>
              <button className="Register-btn">Login</button>
              <h5 className="Register-subtext">
                Don't have an account yet?<Link to="/register"> Sign Up! </Link>
                <span></span>
              </h5>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
