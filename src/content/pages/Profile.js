import React from 'react'

import { Redirect } from 'react-router-dom'

const Profile = props => {

    //if no user is logged in, redirect to login
    if(!props.user) {
        return <Redirect to="/login" />
    }

    return (
        <div className="Profile">
            
            <h1>Welcome {props.user}!</h1>
            
        </div>

    )
}

export default Profile