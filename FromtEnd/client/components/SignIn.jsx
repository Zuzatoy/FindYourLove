import React from 'react'

const SignIn = (props) => {
  return (
    <div className='sign'>
      <form>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button className='homebutton'
          type="button"
          onClick={() => props.goTo('main')}>
          Login
        </button>
      </form>
    </div>
  )
}

export default SignIn
