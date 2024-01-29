import React, { useState } from 'react'
import axios from 'axios';
import { Link,useNavigate  } from 'react-router-dom'
const Signup = () => {
    const history = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/Signup", { email, password,name })
            .then(res => {
                if (res.data ="exist") {
                    alert("user already exists")
             
                }
                else if (res.data ="notexist") {
                    history("/home", {state: { d: name}})
                }

            }).catch(e => {
                alert("wrong detail")
                console.log(e);
            })

        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <div className='login-page'>
            <h1>Sign up</h1>
            <div className='form '>
            <form action='POST'>
            <input type="name" name='name'  className='login-input'  id='' onChange={(e) => { setName(e.target.value) }} placeholder='Name' />
           
                <input type="email" name='email'  className='login-input'  id='' onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
                <input type="password" name='password'  className='login-input'  id='' onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' /><br/>
                <input type='submit' className='login-input'  onClick={submit} />
                </form>
            <br />
            <p>OR</p>
            <br />
            <Link to="/">Login Page</Link>
           
            </div>
           
        </div>
    )
}

export default Signup