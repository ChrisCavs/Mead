import React from 'react'
import { createClap } from '../../actions/clap_actions'
import { connect } from 'react-redux'

class ClapButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clapable_type: this.props.type,
      clapable_id: this.props.content.id,
      quantity: parseInt(this.props.content.currentUserClaps)
    }

    this.addToQuantity = this.addToQuantity.bind(this)
  }

  addToQuantity() {
    this.setState({ quantity: this.state.quantity + 1 })
  }

  componentDidMount() {
    window.onhashchange = this.handleChange.bind(this)
  }

  handleChange () {
    if (this.state.quantity >= 1) {
      this.props.createClap(this.state)
    }
  }

  render () {
    const totalClaps = this.props.content.totalClaps

    return (
      <div className="clap-container">
        <p className="clap-quantity">
          {this.state.quantity}
        </p>

        <button onClick={this.addToQuantity}>
          Clap
        </button>

        <p className="clap-total">
          {totalClaps}
        </p>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createClap: (data) => dispatch(createClap(data))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ClapButton)