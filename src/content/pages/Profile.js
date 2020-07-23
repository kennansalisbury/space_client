import React from 'react'

import { Redirect } from 'react-router-dom'

const Profile = props => {

    //if no user is logged in, redirect to login
    if(!props.user) {
        return <Redirect to="/login" />
    }

    return (
        <div>Profile/Landing Page</div>
    )
}

export default Profile