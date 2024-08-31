import React from 'react'

const Login = () => {
  return (
    <div className="loginSection">
        
        <form  className='authForm'>
        <h3>Vendor Login</h3><br />
            <label >Email</label>
            <input type="text" placeholder='enter your email'/><br />
            <label >Password</label>
            <input type="text" placeholder='enter your password'/><br />
    <div className="btnSumbit">
        <button>Sumbit</button>
    </div>

        </form>
    </div>
  )
}

export default Login