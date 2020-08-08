import React from 'react';

export default function Register() {
    return(
        <div className="Register">
            <div className="Register-image-prop Register-image">
                <div className="Register-image-overlay">
                    <p><em>"Life's too short to say no to cake" - Anon</em></p>
                </div>
            </div>
            <div className="Register-form-lyt">
                <div className="Register-form">
                    <h3 className="Register-heading">Create an account with us</h3>
                    <h5 className="Register-subtext">Already registered? <span>Sign in</span></h5>
                    <form className="Reg-form Reg-form-h">
                        <div className="flex flex-btw">
                            <label>
                                <input type="text" placeholder="First Name" className="input-half"/>
                            </label>
                            <label>
                                <input type="text" placeholder="Last Name" className="input-half"/>
                            </label>
                        </div>
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
                        <button className="Register-btn">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}