import React from 'react'

const SignUp = (props) => {
  return (
    <div>
      <form method="post" action="http://localhost:3000/api/register">
        <label>
          Name
          <input type = "text" name="name"/>
        </label>
        <label>
          Email
          <input type = "text" name="email" />
        </label>
        <label>
          Password
          <input type = "password" name="password" />
        </label>
        <label>
          Age
          <input type = "text" name="age" />
        </label>
        <label>
          Bio
          <input type = "text" name="bio" />
        </label>
        <button>Register</button>
      </form>
    </div>
  )
}

export default SignUp

// onClick call an anonymus function which calls goTo funtion
