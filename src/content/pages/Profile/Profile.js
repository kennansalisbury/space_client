import React from 'react'

import { Redirect } from 'react-router-dom'

//components
import ProfileMenu from './ProfileMenu'

const Profile = props => {

    //if no user is logged in, redirect to login
    if(!props.user) {
        return <Redirect to="/login" />
    }

    return (
        <div className="profile">
            <div>
                <h1>Welcome {props.user.name}!</h1>
                <img src={props.user.profile_image_url} alt="profile_photo" />
                <p>What would you like to do first?</p>
            </div>
            
            <ProfileMenu />

        </div>

    )
}

export default Profile