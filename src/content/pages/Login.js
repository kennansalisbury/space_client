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
        // fetch(process.env.REACT_APP_TWITTER_AUTH)
        Axios.get(process.env.REACT_APP_TWITTER_AUTH)
        .then(response => {
            console.log(response.data.url)
            // response.json()
            // // .then(data => 
            setTwitterUrl(response.data.url)
            // .then(data => console.log(data))
            // .catch(err => catchError(err, setErrorMessage))
        })
        .catch(err => catchError(err, setErrorMessage))
    }

    useEffect(() => {
        if(!props.user) {
            getTwitterAuthUrl()
        }
        // fetch('http://localhost:3000/auth/twitter/success')
        // .then(response => {
        //     console.log('🌈', response)
        // }) 
        // .catch(err => catchError(err, setErrorMessage))
    }, [])

    //if a user is already logged in, redirect to profile
    if(props.user) {
        return <Redirect to="/" />
    }

    // const signInWithTwitter = () => {
    //     window.open(twitterUrl)
    // }
    console.log('🍪🍪🍪', document.cookie)

    return (
        <div className="login">
            <h1>Space Flex</h1>
            <div className="border">
                <p>Welcome to Space Flex! The site to help you flex your space knowledge. 
                    View the astronauts currently in space, and check out the International Space station's current location. 
                    Click below to sign in and get started!
                </p>
            </div>

            
            {twitterUrl ? <a href={twitterUrl} rel="noopener noreferrer"><button>Sign In With Twitter</button></a> : ''}
            {/* {twitterUrl ? <button onClick={() => signInWithTwitter()}>Sign In With Twitter</button> : ''} */}

            {/* any errors will display here */}
            {errorMessage}

        </div>
    )
}

export default Login