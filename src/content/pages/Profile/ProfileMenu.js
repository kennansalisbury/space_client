import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'

const ProfileMenu = props => {

    const [redirect, setRedirect] = useState('')

    if(redirect){
        return <Redirect to={redirect} />
    }
    
    return (
        <div className="profile__menu">
            <div onClick={() => setRedirect('/astronauts')} className="profile__menu-img">See who's in space</div>
            <div className="profile__menu-img" onClick={() => setRedirect('/iss')}>Find the space station</div>
        </div>
    )
}

export default ProfileMenu