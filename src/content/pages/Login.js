import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import { catchError } from '../../helpers/Helpers'


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
            <h1>Space Flex</h1>
            <div className="border">
                <p>Welcome to Space Flex! The site to help you flex your space knowledge. 
                    View the astronauts currently in space, and check out the International Space station's current location. 
                    Click below to sign in and get started!
                </p>
            </div>

            {/* sign in with twitter button appears once twitter url is received from backend */}
            {twitterUrl ? <a href={twitterUrl} rel="noopener noreferrer"><button>Sign In With Twitter</button></a> : ''}

            {/* any errors will display here */}
            {errorMessage}

        </div>
    )
}

export default Login