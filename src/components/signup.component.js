import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Outernavbar from './outernavbar.component';
import axios from 'axios';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    };
  }

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onChangePasswordConfirmation = (e) => {
    this.setState({ password_confirmation: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const userObject = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    };

    axios
      .post('http://127.0.0.1:8000/api/auth/register', userObject)
      .then((res) => {
        console.log(res, "aaaaaaaaaaa");
        if (res.data.message === "User successfully registered") {
          alert("Registration Successful");
          window.location = "/sign-in";
        }
      })
      .catch((error) => {
        if (
          error.response.data === "{\"email\":[\"The email has already been taken.\"]}"
        ) {
          alert("The email has already been taken.");
        }
      });

    this.setState({
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    });
  };

  createButton() {
    return (
      <div className="row">
        <div className="col">
          <a href="/signup/facebook" className="btn btn-dark" style={{ width: '300px', height: '40px', borderRadius: '20px', marginBottom: '8px', marginLeft: '50px', display: 'flex', alignItems: 'center' }}>
            <img src="./google.png" alt="Sign up with Facebook" style={{ width: '30px', height: '30px', marginRight: '3px' }} />
            <span style={{ marginLeft: '30px', color: '#fff', fontFamily: 'Kanit', fontStyle: 'normal', fontSize: '16px', fontWeight: 900 }}>Sign up with Google</span>
          </a>
        </div>
        <div className="col">
          <a href="/signup/facebook" className="btn btn-dark" style={{ width: '300px', height: '40px', borderRadius: '20px', marginBottom: '8px', marginLeft: '50px', display: 'flex', alignItems: 'center' }}>
            <img src="./facebook.png" alt="Sign up with Facebook" style={{ width: '30px', height: '30px', marginRight: '3px' }} />
            <span style={{ marginLeft: '30px', color: '#fff', fontFamily: 'Kanit', fontStyle: 'normal', fontSize: '16px', fontWeight: 900 }}>Sign up with Facebook</span>
          </a>
        </div>
        <div className="col">
          <a href="/signup/artist" className="btn btn-dark" style={{ width: '300px', height: '40px', borderRadius: '20px', marginBottom: '8px', marginLeft: '50px', display: 'flex', alignItems: 'center' }}>
            <img src="./user.png" alt="Sign up as an Artist" style={{ width: '30px', height: '30px', marginRight: '3px', marginTop: '3px' }} />
            <span style={{ marginLeft: '30px', color: '#fff', fontFamily: 'Kanit', fontStyle: 'normal', fontSize: '16px', fontWeight: 900 }}>Sign up as an Artist</span>
          </a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <Outernavbar />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form onSubmit={this.onSubmit}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <div style={{ position: 'relative', display: 'inline-block' }} className="heading-primary">
                  <h3 style={{ fontFamily: 'Moul', fontStyle: 'normal', fontWeight: 800, fontSize: '36px', lineHeight: '96px', display: 'inline-block', color: 'white', margin: '0 10px 0 0' }}>Sign up to</h3>
                  <h4 style={{ fontFamily: 'Moul', fontStyle: 'normal', fontWeight: 800, fontSize: '55px', display: 'inline-block', lineHeight: '96px', color: 'red', margin: '0px 10px 0 0px', textShadow: '1px 1px 0px #F3F3F3' }}>MIXIFY</h4>
                </div>
              </div>

              
              <div className="mb-3" style={{ borderBottom: '1px solid #9D9797' }}>
                <input
                  type="text"
                  onChange={this.onChangeUsername}
                  name="username"
                  value={this.state.username}
                  placeholder="Username"
                  style={{ color: 'gray', display: 'inline-block', width: '100%', fontFamily: 'Kanit', fontStyle: 'normal', fontWeight: 600, backgroundColor: 'transparent', margin: '0px 0px 0px 0px', border: 'none', borderBottom: '1px solid #000' }}
                />
              </div>
              <div className="mb-3" style={{ borderBottom: '1px solid #9D9797' }}>
                <input
                  type="text"
                  onChange={this.onChangeEmail}
                  name="email"
                  value={this.state.email}
                  placeholder="Email"
                  style={{ color: '#9D9797', display: 'inline-block', width: '100%', fontFamily: 'Kanit', fontStyle: 'normal', fontWeight: 600, backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #000' }}
                />
              </div>
              <div className="mb-3" style={{ borderBottom: '1px solid #9D9797' }}>
                <input
                  type="password"
                  onChange={this.onChangePassword}
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                  style={{ color: '#9D9797', display: 'inline-block', width: '100%', fontFamily: 'Kanit', fontStyle: 'normal', fontWeight: 600, backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #000' }}
                />
              </div>
              <div className="mb-3" style={{ borderBottom: '1px solid #9D9797' }}>
                <input
                  type="password"
                  onChange={this.onChangePasswordConfirmation}
                  name="confirmpassword"
                  value={this.state.password_confirmation}
                  placeholder="Confirm Password"
                  style={{ color: '#9D9797', display: 'inline-block', fontFamily: 'Kanit', fontStyle: 'normal', fontWeight: 600, width: '100%', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #000' }}
                />
              </div>
              <div className="d-flex flex-column align-items-center">
                <div>
                  <button type="submit" className="btn btn-dark" style={{ backgroundColor: '#3F0D06', fontFamily: 'Kanit', fontStyle: 'normal', marginTop: '5px', marginBottom: '15px', borderRadius: '20px', marginLeft: '10px', padding: '5px 10px', fontSize: '16px', width: '125px', height: '40px' }}>
                    Sign up
                  </button>
                </div>
                <div className="mt-3 text-center text-muted">
  {/* Ensure there is content or add a height to the line-breaker */}
  <div className="line-breaker" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', height: '1px' , width: '380px'}}>
    <span className="line" style={{ flex: '1', height: '1px', border: '1px solid #808080', marginBottom: '30px', backgroundColor: '#808080'}}></span>
    <span style={{ padding: '0 10px', color: '#A9A9A9', fontSize: '18px', marginBottom: '30px' }}>or</span>
    <span className="line" style={{ flex: '1', height: '1px', border: '1px solid #808080', marginBottom: '30px', backgroundColor: '#808080' }}></span>
  </div>
</div>
                {this.createButton()} {/* Call the createButton function here */}
                
              </div>
            </form>
            <p style={{ color: 'gray', textAlign: 'center', marginBottom: '9px', fontSize: '12px' }}>
  Already have an account? <Link to="/sign-in" style={{ color: 'gray' }}>Log in here.</Link>
</p>

          </div>
        </div>
      </div>
    );
  }
}