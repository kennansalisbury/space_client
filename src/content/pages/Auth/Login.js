import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'

// helper functions
import { fetchData } from '../../../helpers/Helpers'

// image imports
import logo from '../../../assets/space flex-logo-white2.png'


const Login = props => {

    const [errorMessage, setErrorMessage] = useState('')
    const [twitterUrl, setTwitterUrl] = useState(null)

    // Twitter Auth Function
    const getTwitterAuthUrl = () => {
        //fetch call to backend auth route, retrieves url to which need to direct user for twitter authentication
        fetchData(process.env.REACT_APP_SERVER_URL + 'auth/twitter', setTwitterUrl, setErrorMessage)
    }

    useEffect(() => {
        getTwitterAuthUrl()
    }, [])

    //if a user is already logged in, redirect to profile
    if(props.user) {
        return <Redirect to="/" />
    }

    return (
        <div className="login">

            <img id="login-logo" src={logo} alt="space flex logo" />
            
            <div className="border login__twitter">
                <p className="body-bold">Flex your space knowledge. </p>
                <p className="body-main">Learn about the astronauts currently in space, and see where the International Space space station is right now. </p>
                {/* sign in with twitter button appears once twitter url is received from backend */}
                {twitterUrl ? <a href={twitterUrl.url} rel="noopener noreferrer"><img src="https://cdn.cms-twdigitalassets.com/content/dam/developer-twitter/icons/sign-in-with-twitter-gray-1-png-img-fullhd-medium.png.img.fullhd.medium.png" alt="sign in with twitter button"/></a> : ''}
                {/* any errors will display here */}
                {errorMessage}
            </div>

        </div>
    )
}

export default Login