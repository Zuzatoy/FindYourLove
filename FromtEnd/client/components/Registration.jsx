import React from 'react'

import SignIn from './SignIn'
import SignUp from './SignUp'
import RegistrationButtons from './RegistrationButtons'
import Others from './Others'

class Registration extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      location: ''
    }
    this.goTo = this.goTo.bind(this) // bind main class 'this' to the method
  }

  goTo (location) {
    this.setState({location})
  }

  display () {
    switch (this.state.location) {
      case '':
      default:
        return <RegistrationButtons goTo={this.goTo} />
      case 'signUp':
        return <SignUp goTo={this.goTo} submitFunc={this.handleSubmit} />
      case 'signIn':
        return <SignIn goTo={this.goTo} />
      case 'main':
        return <Others goTo={this.goTo}/>
    }
  }

  render () {
    return (
      <div>
        {this.display()}
      </div>
    )
  }
}

export default Registration
