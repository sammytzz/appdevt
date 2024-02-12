import React, { Component } from 'react';
import { Navigate, Link } from 'react-router-dom';
import axios from 'axios';
import Outernavbar from './outernavbar.component';

export default class Login extends Component {
  constructor(props) {
    super(props);
    const udata = localStorage.getItem('user');
    let loggedIN = true;
    if (udata == null) {
      loggedIN = false;
    }
    this.state = {
      email: '',
      password: '',
      loggedIN
    };
  }

  onChangeUserEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const userObject = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post('http://127.0.0.1:8000/api/auth/login', userObject)
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            loggedIN: true
          });
          localStorage.setItem('user', JSON.stringify(res.data));
        }
      })
      .catch((error) => {
        console.log(error);
        alert('Wrong email or password');
      });
    this.setState({ email: '', password: '' });
  }

  render() {
    if (this.state.loggedIN) {
      return <Navigate to="/dashboard" />;
    }
    return (
      <div className="App">
        <Outernavbar />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form onSubmit={this.onSubmit}>
              <div style={{ position: 'relative' }} className="heading-primary">
              <h3 style={{ fontFamily: 'Moul', fontStyle: 'normal', fontWeight: 800, fontSize: '36px', lineHeight: '96px', display: 'inline-block',color: 'white', margin: '0 10px 0 0' }}>Log in to</h3>
              <h4 style={{ fontFamily: 'Moul', fontStyle: 'normal', fontWeight: 800, fontSize: '55px',display: 'inline-block', lineHeight: '96px', color: 'red', margin: '0px 0px 0 0px', textShadow: '1px 1px 0px #F3F3F3' }}>MIXIFY</h4>
              </div>
              <div className="mb-3" style={{ borderBottom: '1px solid #9D9797' }}>
                <input
                  type="text"
                  onChange={this.onChangeUserEmail}
                  name="email"
                  value={this.state.email}
                  placeholder="Username or email"
                  style={{ color: '#9D9797', display: 'inline-block', width: '100%', fontFamily: 'Kanit', fontStyle: 'normal', fontWeight: 600,backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #000' }}
                />
              </div>
              <div className="mb-3" style={{ borderBottom: '1px solid #9D9797' }}>
                <input
                  type="password"
                  onChange={this.onChangePassword}
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                  style={{ color: '#9D9797', display: 'inline-block', width: '100%', fontFamily: 'Kanit', fontStyle: 'normal', fontWeight: 600,backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #000' }}
                />
              </div>
              <div>
  <div className="custom-control custom-checkbox">
    <input
      type="checkbox"
      className="custom-control-input"
      id="customCheck1"
    />
    <label className="custom-control-label" htmlFor="customCheck1">
      <a href="/remember-me" style={{ color: 'gray', fontStyle: 'italic', textDecoration: 'none', display: 'inline-block' }}>Remember me</a>
      <p className="forgot-password mb-0" style={{ fontStyle: 'italic', display: 'inline-block', textDecoration: 'none', marginBottom:'10px', marginLeft: '170px' }}>
        <a href="/forgot-password" style={{ color: 'gray', textDecoration: 'none' }}>Forgot Password?</a>
      </p>
    </label>
  </div>
</div>
              <div className="d-flex flex-column align-items-center">
                <div>
                  <button type="submit" className="btn btn-dark" style={{ backgroundColor: '#3F0D06', fontFamily: 'Kanit', fontStyle: 'normal',borderRadius: '20px', marginLeft: '10px', padding: '5px 10px', fontSize: '16px', width: '125px', height: '40px' }}>
                    Log in
                  </button>
                </div>
              </div>
              <div className="mt-3 text-center text-muted">
                <div className="line-breaker" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <span className="line" style={{ flex: '1', height: '1px', backgroundColor: '#808080' }}></span>
                  <span style={{ padding: '0 10px', color: '#808080', fontSize: '18px' }}>or</span>
                  <span className="line" style={{ flex: '1', height: '1px', backgroundColor: '#808080' }}></span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <a href="/signup/google" className="btn btn-dark" style={{ width: '300px', height: '40px', borderRadius: '20px', marginBottom: '8px', marginLeft:'50px', display: 'flex', alignItems: 'center' }}>
                    <img src="./google.png" alt="Sign up with Google" style={{ width: '30px', height: '30px', marginRight: '5px', marginTop: '3px' }} />
                    <span style={{ marginLeft: '30px', color: '#fff', fontFamily: 'Kanit', fontStyle:'normal', fontSize:'16px', fontWeight: 900 }}>Sign up with Google</span>
                  </a>
                </div>
                <div className="col">
                  <a href="/signup/facebook" className="btn btn-dark" style={{ width: '300px', height: '40px', borderRadius: '20px', marginBottom: '8px', marginLeft: '50px', display: 'flex', alignItems: 'center' }}>
                    <img src="./facebook.png" alt="Sign up with Facebook" style={{ width: '30px', height: '30px', marginRight: '5px', marginTop: '3px' }} />
                    <span style={{ marginLeft: '30px', color: '#fff', fontFamily: 'Kanit', fontStyle:'normal', fontSize:'16px', fontWeight: 900 }}>Sign up with Facebook</span>
                  </a>
                </div>
                <div className="col">
                  <a href="/signup/artist" className="btn btn-dark" style={{ width: '300px', height: '40px', borderRadius: '20px', marginBottom: '8px', marginLeft:'50px', display: 'flex', alignItems: 'center' }}>
                    <img src="./user.png" alt="Sign up as an Artist" style={{ width: '30px', height: '30px', marginRight: '5px', marginTop: '3px' }} />
                    <span style={{ marginLeft: '30px', color: '#fff', fontFamily: 'Kanit', fontStyle:'normal', fontSize:'16px', fontWeight: 900 }}>Sign up as an Artist</span>
                  </a>
                </div>
              </div>
            </form>
            <p style={{ color: 'gray', textAlign: 'center', marginBottom: '9px' , fontSize: '12px'}}>
              Don't have an account? <Link to="/sign-up" style={{ color: 'gray' }}>Create an account</Link> 
            </p>
          </div>
        </div>
      </div>
    );
  }
}