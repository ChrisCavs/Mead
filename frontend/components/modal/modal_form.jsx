import React from 'react'

class ModalForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  render () {
    return (
      <form 
        className="modal-form"
        onSubmit={this.handleSubmit}>

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

export default ModalForm