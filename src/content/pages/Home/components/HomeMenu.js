import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'

const HomeMenu = props => {

    const [redirect, setRedirect] = useState('')

    if(redirect){
        return <Redirect to={redirect} />
    }
    
    return (
        <div className="profile__menu">
            <div className="profile__menu-item profile__menu-astroimg menu-header" onClick={() => setRedirect('/astronauts')} >see who's in space</div>
            <div className="profile__menu-item profile__menu-issimg menu-header" onClick={() => setRedirect('/iss')}>find the space station</div>
            <span className="photo-credit">Photo by <a href="https://unsplash.com/@nasa?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">NASA</a> on <a href="https://unsplash.com/s/photos/astronaut?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash </a> Photo by <a href="https://unsplash.com/@lamnatheshark?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Lamna The Shark</a> on <a href="https://unsplash.com/s/photos/international-space-station?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        </div>
    )
}

export default HomeMenu