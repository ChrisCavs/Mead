import React from 'react'
import { createClap } from '../../actions/clap_actions'
import { connect } from 'react-redux'

class ClapButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clapable_type: this.props.type,
      clapable_id: this.props.content.id,
      quantity: parseInt(this.props.content.currentUserClaps) || 0
    }
    
    this.addToQuantity = this.addToQuantity.bind(this)    
  }

  addToQuantity() {
    const quantity = this.state.quantity + 1
    this.setState({ quantity })

    if (this.props.type === 'Comment') {
      this.handleChange()
    }
  }

  handleChange () {
    if (this.state.quantity >= 1) {
      this.props.createClap(this.state)
    }
  }

  componentWillUnmount () {
    if (this.props.type === 'Story') {
      this.handleChange()
    }
  }

  render () {
    const totalClaps = this.props.content.totalClaps

    let containerOption = 'story-clap-container'
    let addClasses = 'story-clap'
    let hideOption

    if (this.props.type === 'Comment') {
      addClasses = 'comment-clap'
      hideOption = 'hide'
      containerOption = 'comment-clap-container'
    }

    return (
      <div className={"clap-container " + containerOption}>
        <p className={"clap-quantity " + hideOption}>
          + {this.state.quantity}
        </p>

        <button 
          onClick={this.addToQuantity}
          className={"clap-button " + addClasses}>
          <img src={window.clap} />
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