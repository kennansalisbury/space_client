import React from 'react'

import { Redirect } from 'react-router-dom'

const Login = props => {

    //if a user is already logged in, redirect to profile
    if(props.user) {
        return <Redirect to="/profile" />
    }

    return (
        <div>Login Page</div>
    )
}

export default Login