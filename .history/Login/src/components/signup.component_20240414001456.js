import React, { Component } from 'react'

export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roll_no: "",
      password: "",
    };
  }
  handleSubmit(){
    e.preventDefault();
    const {roll_no:,password:}  = this.state;
  }
  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>Roll No.</label>
          <input
            type="text"
            className="form-control"
            placeholder="Roll No:"
            onChange={(e) => this.setState({ roll_no: e.target.value })}
          />
        </div>


        {/* <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div> */}

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}
