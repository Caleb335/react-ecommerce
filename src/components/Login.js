import React from 'react';

export default function Login() {
    return(
        <div className="Register">
            <div className="Register-image-prop Login-image">
                <div className="Register-image-overlay">
                    <p><em>"Happiness is cakes, cupcakes and more cakes" - Anon</em></p>
                </div>
            </div>
            <div className="Register-form-lyt">
                <div className="Register-form">
                    <h3 className="Register-heading">Sign In</h3>
                    <h5 className="Register-subtext">Not into cake yet? <span>Get In!</span></h5>
                    <form className="Reg-form Login-form">
                        <div>
                            <label>
                                <input type="email" placeholder="Email Address" className="input-full"/>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="password" placeholder="Password" className="input-full"/>
                            </label>
                        </div>
                        <button className="Register-btn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}