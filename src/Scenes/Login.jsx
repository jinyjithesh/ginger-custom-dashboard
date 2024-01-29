import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/Login", {
                 email, password
                 })
                .then(res => {
                    if (res.data = "exist") {
                        history("/home",{ state: {id: email } })
                        history("/Profile",{ state: {id: email } })
                    }
                    else if (res.data ="notexist") {
                        alert("user have not signup")
                    }

                }).catch(e => {
                    alert("wrong detail")
                    
                })

        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <div className='login-page'>
            <h1>Login</h1>
            <div className='form '>
            <form action="POST">
                <input  type="email"name='' className='login-input' id='' onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
                <input type="password" name='' id='' onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' /><br/>
                <input type='submit' onClick={submit} />
            </form>
            
            
            <br />
            <p>OR</p>
            <br />
            <Link to="/Signup">Signup Page</Link>
            </div>
        </div>
    )
}

export default Login