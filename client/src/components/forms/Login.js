import React from 'react'

const Login = () => {
    return (
        <div className="login-form">
            <h2>Kirjaudu sisään</h2>
            <div className="login-form-group">
                <input type="text" name="" placeholder="Tunnus"/>
            </div>
            <div className="login-form-group">
                <input type="password" name="" placeholder="Salasana"/>
            </div>
            <input className="login-button" type="submit" name="Submit" value="Kirjaudu"/>
        </div>
    )
}

export default Login

