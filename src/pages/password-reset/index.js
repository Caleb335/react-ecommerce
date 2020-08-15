import React, { Component } from 'react';
import { auth } from '../../firebase/utils';
import FormInput from '../../components/formInput/index';
import { Link } from 'react-router-dom';
import './style.scss';

class PasswordRecover extends Component {


    state = {
        email: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email } = this.state;

        try {
            await auth.sendPasswordResetEmail(email);
            alert('Email sent');
        } catch (error) {
            console.log(error.message);
        }

    }

    render() {

        return (

            <div className="reset">
                <div>
                    <h2> Password Assitance</h2>
                    <p> please enter the email-address you used in registering your Foldables acoount<br></br>
                We will send you a link to this e-mail address to reset your password.
                </p>

                </div>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email"
                        name="email"
                        placeholder="E-mail address"
                        value={this.state.email}
                        onChange={this.handleChange}
                        label="email" />

                    <button className="reset-btn"> RESET PASSWORD </button>
                    <Link to="/signin"> &lt;&lt;Return to Login </Link>

                </form>

            </div>
        )
    }
}

export default PasswordRecover;