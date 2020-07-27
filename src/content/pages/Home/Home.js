import React from 'react'
import { Redirect } from 'react-router-dom'

//components
import HomeMenu from './components/HomeMenu'

const Home = props => {

    //if no user is logged in, redirect to login
    if(!props.user) {
        return <Redirect to="/login" />
    }

    return (
        <div className="home">
            <div>
                <h1 className="heading-main">Welcome {props.user.name}!</h1>
                <img className="profile__photo" src={props.user.profile_image_url} alt="profile_photo" />
                <p className="body-main">What would you like to do first?</p>
            </div>
            
            <HomeMenu />

        </div>

    )
}

export default Home