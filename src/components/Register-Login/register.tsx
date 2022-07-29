import React, { useState } from 'react'
import './registerLoginStyle.scss'
import axios from "axios"
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
export const Register = () => {
    const [firstname, setFirstname] = useState<string>("")
    const [lastname, setLastname] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()
    const FormSubmitted = () => {
        axios.post("http://localhost:8502/register", {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        })
            .then((response) => {
                navigate("/login")
            })
    }

    
    return (
        <div className="auth-register-contain">
            <div className="forms-container">
                <div className="signin-signup">
                    <form onSubmit={(e) => { e.preventDefault(); FormSubmitted() }} className="sign-in-form auth-form">
                        <h2 className="title">Sign Up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input className="auth-input" value={firstname} onChange={(e) => setFirstname(e.target.value)} type="text" placeholder="Firstname" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input className="auth-input" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Lastname" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-at"></i>                <input className="auth-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input className="auth-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </div>
                        <input className="auth-input btn-register-button solid" type="submit" value="Register" />

                        <p>Do you have account? <Link to="/login" style={{ textDecoration: "none" }}> Login</Link></p>

                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                </div>
                <div className="panel right-panel">
                </div>
            </div>
        </div>
    )
}
export default Register