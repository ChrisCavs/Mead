import React from 'react'
import { createClap } from '../../actions/clap_actions'
import { connect } from 'react-redux'

class ClapButton extends React.Component {
  state = {
    clapable_type: this.props.type,
    clapable_id: this.props.content.id,
    quantity: 0
  }

  addToQuantity = () => {
    clearTimeout(this.addInt)
    
    this.setState({ quantity: this.state.quantity + 1 }, () => {
      if (this.props.type === 'Comment') {
        this.handleChange()
      } else {
        this.addInt = setTimeout(this.handleChange, 1000)
      }
    })
  }

  handleChange = () => {
    this.props.createClap(this.state).then(
      success => this.setState({ quantity: 0 })
    )
  }

  componentWillUnmount () {
    clearTimeout(this.addInt)

    if (this.state.quantity > 0) {
      this.props.createClap(this.state)
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