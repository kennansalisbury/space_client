import React from 'react'

import { Redirect } from 'react-router-dom'

const Login = props => {

    //if a user is already logged in, redirect to profile
    if(props.user) {
        return <Redirect to="/profile" />
    }

    //Twitter Auth Function
    // const twitterAuth = () => {
    //     //fetch call to backend auth route
    // }

    return (
        <div className="login">
            <h1>Space Flex</h1>
            <p>This is Chewbacca. He's first-mate on a ship that might suit our needs. 
                I don't like the look of this. Han Solo. I'm captain of the Millennium Falcon.  
            </p>

            {/* Twitter auth to be implented; onClick = {() => twitterAuth()} */}
            <button>Sign In With Twitter</button>


        </div>
    )
}

export default Login