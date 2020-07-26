import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import { catchError } from '../../../helpers/Helpers'

import logo from '../../../assets/space flex-logo-white2.png'


const Login = props => {

    const [errorMessage, setErrorMessage] = useState('')
    const [twitterUrl, setTwitterUrl] = useState(null)

    // Twitter Auth Function
    const getTwitterAuthUrl = () => {

        //fetch call to backend auth route
        fetch(process.env.REACT_APP_TWITTER_AUTH)
        .then(response => response.json()
            .then(data =>  {
            
            //sends back twitter authentication url to which the user should be directed to login/authorize te app
            setTwitterUrl(data.url)

        }))
        .catch(err => catchError(err, setErrorMessage))
    }

    useEffect(() => {
        if(!props.user) {
            getTwitterAuthUrl()
        }
    }, [])

    //if a user is already logged in, redirect to profile
    if(props.user) {
        console.log('there is a user', props.user)
        return <Redirect to="/" />
    }

    return (
        <div className="login">

            {/* <h1 className="brand-big">space flex</h1> */}
            <img id="login-logo" src={logo} alt="space flex logo" />
            <div className="border login__twitter">
                <p className="body-bold">Flex your space knowledge. </p>
                <p className="body-main">Learn about the astronauts currently in space, and see where the International Space space station is right now. 
                    {/* Click below to sign in and get started! */}
                </p>
                {/* sign in with twitter button appears once twitter url is received from backend */}
                {twitterUrl ? <a href={twitterUrl} rel="noopener noreferrer"><img src="https://cdn.cms-twdigitalassets.com/content/dam/developer-twitter/icons/sign-in-with-twitter-gray-1-png-img-fullhd-medium.png.img.fullhd.medium.png" alt="sign in with twitter button"/></a> : ''}
            </div>


            {/* any errors will display here */}
            {errorMessage}
            {/* <span className="photo-credit">Photo by <a href="https://unsplash.com/@nasa?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">NASA</a> on <a href="https://unsplash.com/s/photos/moon?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */}
            <span className="photo-credit">Photo by <a href="https://unsplash.com/@andresuran?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Andres F. Uran</a> on <a href="https://unsplash.com/s/photos/night-sky?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
            {/* <span className="photo-credit">Photo by <a href="https://unsplash.com/@straz?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jim Strasma</a> on <a href="https://unsplash.com/s/photos/moon?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */}
        </div>
    )
}

export default Login