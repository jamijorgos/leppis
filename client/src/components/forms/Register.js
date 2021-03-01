import React from 'react'

const Register = () => {
    return (
        <div className="login-form">
            <h2>Rekisteröidy</h2>
            <div className="login-form-group">
                <input type="text" name="" placeholder="Nimi"/>
            </div>
            <div className="login-form-group">
                <input type="text" name="" placeholder="Sähköposti"/>
            </div>
            <div className="login-form-group">
                <input type="password" name="" placeholder="Salasana"/>
            </div>
            <div className="login-form-group">
                <input type="password" name="" placeholder="Salasana uudelleen"/>
            </div>
            <input className="login-button" type="submit" name="Submit" value="Kirjaudu"/>
        </div>
    )
}

export default Register
