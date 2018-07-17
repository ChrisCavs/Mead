import React from 'react'

class ModalLoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.guestLogin = this.guestLogin.bind(this)
  }

  update (type) {
    return e => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.submitAction(this.state)
  }

  guestLogin (e) {
    this.setState({
      email: 'guest@gmail.com',
      password: 'guest123'
    }, () => {
      this.props.submitAction(this.state)
    })
  }

  render () {
    const errors = this.props.errors.map((er, i) => <li key={i}>{er}</li>)
    const guestLogin = <a onClick={this.guestLogin} className='guest-login'>Guest Login.</a>
    return (
      <form
        className="modal-form"
        onSubmit={this.handleSubmit}>

        <h1 className="modal-form-header">Welcome Back</h1>
        <p className="modal-form-subheader">Sign in to access your personalized homepage, follow authors and topics you love, and clap for stories that matter to you. {guestLogin}</p>
        <ul className="modal-errors">
          {errors}
        </ul>

        <label htmlFor="email">Email</label>
        <input id="email"
          type="text"
          onChange={this.update('email')}
          value={this.state.email} />

        <label htmlFor="password">Password</label>
        <input id="password"
          type="password"
          onChange={this.update('password')}
          value={this.state.password} />

        <button className="modal-form-button">
          {this.props.title}
        </button>
      </form>
    )
  }
}

export default ModalLoginForm
