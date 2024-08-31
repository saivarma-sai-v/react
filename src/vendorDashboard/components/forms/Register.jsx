import React,{useState} from 'react'
import { API_URL } from '../../helpers/apiPath';


const Register = () => {

  const [username,setUsername] = useState("");

  const [email,setEmail] = useState("");

  const [password,setpassword] = useState("");

  const [error,setError] = useState("");

  const [loading,setLoading] = useState(true);


const handleSumbit = async (e) => {
    e.preventDefault();


try {
      const response = await fetch(`${API_URL}/vendor/register`,{
        method:'POST',
        headers:{
          'Content-Type' :'application/json'
        },
        body: JSON.stringify({username, email, password })
      })

      const data = await response.json();
      if(response.ok){
        console.log(data);
        alert( "vendor registered success")
      }


} catch (error) {
    console.error("registration failed", error);
    alert("Registration failed")
  
}

}

  return (
    <div className="registersection">
        <form  className='authForm' onSubmit={handleSumbit}>
        <h3>Vendor Register</h3><br />
            <label >Username</label >
            <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='enter your name'/><br />
            <label >Email</label>
            <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter your email'/><br />
            <label >Password</label>
            <input type="password" name='password' value={password} onChange={(e) => setpassword(e.target.value)} placeholder='enter your password'/><br />
    <div className="btnSumbit">
        <button type='sumbit'>Sumbit</button>
    </div>

        </form>
    </div>
  )
}

export default Register