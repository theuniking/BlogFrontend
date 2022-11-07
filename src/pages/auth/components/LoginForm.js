import React, {useState} from "react";

const LoginForm = ({onSubmit}) => {
    const [login,setLogin] = useState()
    const [password,setPassword] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({login,password})
    }
    return (
        <form className="ui form" style={{width:400}} onSubmit={handleSubmit}>
            <h4 className="ui dividing header">Login form</h4>
            <div className="field">
                <label>Username</label>
                <input type="text" name="login" placeholder="Username" onChange={(e) => setLogin(e.target.value)}/>
            </div>
            <div className="field">
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="ui primary fluid button">
                Login
            </button>
        </form>
    )
}

export default LoginForm