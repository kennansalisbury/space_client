import React, {useState, useEffect} from 'react'
import Axios from 'axios'

import { Redirect } from 'react-router-dom'
import { catchError } from '../../helpers/Helpers'

const Login = props => {

    const [errorMessage, setErrorMessage] = useState('')
    const [twitterUrl, setTwitterUrl] = useState('')

    // useEffect(() => {
    //     twitterAuth()
    // })

    //if a user is already logged in, redirect to profile
    if(props.user) {
        return <Redirect to="/" />
    }

    // Twitter Auth Function
    const twitterAuth = () => {
        //fetch call to backend auth route
        // fetch(process.env.REACT_APP_TWITTER_AUTH)
        Axios.get(process.env.REACT_APP_TWITTER_AUTH)
        .then(response => 
            // console.log(response)
            response.json()
            // .then(data => setTwitterUrl(data.url))
            .then(data => console.log(data))
            .catch(err => catchError(err, setErrorMessage))
        )
        .catch(err => catchError(err, setErrorMessage))
    }

    return (
        <div className="login">
            <h1>Space Flex</h1>
            <p>This is Chewbacca. He's first-mate on a ship that might suit our needs. 
                I don't like the look of this. Han Solo. I'm captain of the Millennium Falcon.  
            </p>

            
            {/* <a href={twitterUrl} rel="noopener noreferrer"><button>Sign In With Twitter</button></a> */}
            <button onClick={() => twitterAuth()}>Sign In With Twitter</button>

            {/* any errors will display here */}
            {errorMessage}

        </div>
    )
}

export default Login