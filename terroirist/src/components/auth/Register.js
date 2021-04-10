import React from 'react'

class Register extends React.Component {

  state = {
    formData: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }


  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <form className="column is-half is-offset-one-quarter box">
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Username"
                    name="username"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Email"
                    name="email"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Password"
                    type="password"
                    name="password"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password Confirmation</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Password Confirmation"
                    type="password"
                    name="passwordConfirmation"
                  />
                </div>
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth is-warning">Register</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Register