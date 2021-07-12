import React, { useState } from "react"

const HookForm = (props) => {
  const initialState = {
    firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
  };
  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    setValues({ 
      ...values, [e.currentTarget.name]: e.currentTarget.value 
    });
  }

  const newUser = (e) => {
    e.preventDefault();
    const userInfo = {
      firstName: "", lastName: "", email: "", password: "", confirmPassword:""
    }
    console.log("New User!", userInfo)

  }


return (
  <>
  <h3> Hook Form</h3>
  <form onSubmit={ newUser }> 
    <label htmlFor='firstName'> 
    First Name:
    <input type='text' id='firstName' name='firstName' value={values.firstName}
    onChange = {handleChange}
    />
    </label>
    <label htmlFor='lastName'> 
    Last Name:
    <input type='text' id='lastName' name='lastName' value={values.lastName}
    onChange = {handleChange}
    />
    </label>
    <label htmlFor='email'> 
    Email:
    <input type='text' id='email' name='email' value={values.lastName}
    onChange = {handleChange}
    />
    </label>
    <label htmlFor='password'> 
    Password:
    <input type='password' id='password' name='password' value={values.password}
    onChange = {handleChange}
    />
    </label>
    <label htmlFor='lastName'> 
    Confirm Password:
    <input type='password' id='confirmPassword' name='confirmPassword' value={values.confirmPassword}
    onChange = {handleChange}
    />
    </label>
    <>
    <input type='submit' value='Submit' />
    </>
  </form>
 
  </>
)
}




export default HookForm