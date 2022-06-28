import React,{useState} from 'react'
import './registerLoginStyle.scss'
import { useHistory } from 'react-router'
import axios from 'axios'
export const Login = () => {
const history = useHistory()
const [email,setEmail] = useState<string>("")
const [password,setPassword] = useState<string>("")
const LoginFormSubmitted = () => {
  axios.post("http://localhost:8502/login", {
    email: email,
    password: password,
  }).then((response) => {
    localStorage.setItem("token", response.data.token);
    history.push("/products");
  })
}
  return (
    <div className="auth-contain">
      <div className="forms-login-container">
        <div className="signin-signup">
          <form onSubmit={(e) => {e.preventDefault();LoginFormSubmitted()}} className="sign-in-form auth-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input className="auth-input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input className="auth-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <input className="auth-input btn-button solid" type="submit" value="Login" />
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
export default Login