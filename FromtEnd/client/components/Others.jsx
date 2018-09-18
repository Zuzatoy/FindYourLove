import React from 'react'
import {getAllUsers, addUser} from '../apiClient'

class Others extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    getAllUsers()
      .then(users => {
        this.setState({users})
      })
  }

  render () {
    return (
      <div>
        <h2>Find Minotaurs</h2>
        {this.state.users.map(users => (
          <div key={users.id} className='others'>
            <img className='userphoto' src={users.photo} />
            <span className='username'>{users.name}</span><br />
            <span className='useremail'>Email: </span><span className='useremailadd'>{users.email}</span><br />
            <span className='userage'>Age: </span><span>{users.age}</span><br />
            <span className='userbio'>Bio: </span><span>{users.bio}</span>
          </div>
        ))}
      </div>
    )
  }
}

export default Others
