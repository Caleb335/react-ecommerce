import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Form from '../../components/form/index';
import FormInput from '../../components/formInput/index';
import Button from '../../components/button';
import { auth, signInWithGoogle } from '../../firebase/utils';
import g from '../../assets/img/hero/g.png';
import Header from '../../components/header/header';
class Login extends Component {
  state = {
    email: '',
    password: ''
  };
  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert('signed in succesfully');
      this.setState({
        email: '',
        password: ''
      });
    } catch (error) {
      alert(error.message);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className='Register'>
        <Header />
        <div className='Register-image'>
          <p>
            <em>"Happiness is cakes, cupcakes and more cakes" - Anon</em>
          </p>
        </div>
        <div className='Register-form'>
          <h3 className='Register-heading'>Sign In</h3>
          <p className='Register-subtext'>
            Not into cake yet?{' '}
            <span>
              <Link to='/products'>Get In!</Link>
            </span>
          </p>
          <Form onSubmit={this.handleSubmit} className='form'>
            <FormInput type='email' placeholder='Email' label='Email' value={email} name='email' required onChange={this.handleChange} />
            <FormInput
              type='password'
              placeholder='Password'
              label='Password'
              name='password'
              value={password}
              onChange={this.handleChange}
              required
            />
            <Link to='/passwordreset'>
              {' '}
              <small style={{ color: 'red' }}> forgot password?</small>
            </Link>
            <div className='btn-wrapper'>
              <Button type='submit' placeholder='Sign In' />
              <Button className='google' type='button' placeholder='' onClick={signInWithGoogle}>
                Signin with google
                <img className='google-img' alt='' src={g} />
              </Button>
            </div>
          </Form>
          <h4 className='cta-text'>
            Don't have an account yet?<Link to='/register'> Sign Up! </Link>
          </h4>
        </div>
      </div>
    );
  }
}

export default Login;
