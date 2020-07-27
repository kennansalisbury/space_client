import React, { useEffect, useState } from 'react'
import { useLocation, Redirect } from 'react-router-dom'

//helper functions
import { catchError } from '../../../helpers/Helpers'

const queryString = require('querystring')

const Authorizing = props => {

    const [errorMessage, setErrorMessage] = useState('')
    const [redirect, setRedirect] = useState(false)

    let location = useLocation()
    let queryObject = queryString.parse(location.search)
    let data = {
        oauth_token: queryObject['?oauth_token'],
        oauth_verifier: queryObject.oauth_verifier
    } 

    useEffect(() => {

        //post user token and verifier to backend to complete auth
        fetch(process.env.REACT_APP_SERVER_URL + 'auth/twitter', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json()
            .then(result => {
                if (response.ok) {
                    props.updateUser(result.token)
                    setRedirect(true)
                } else {
                    setErrorMessage(`${result.message}`);
                }
            })
        )
        .catch(err => catchError(err, setErrorMessage))

    }, [])

    if(queryObject['?denied']) {
        return <Redirect to="/login" />
    }

    if(redirect) {
        return <Redirect to="/" />
    }


    return (
        <div className="authorizing">
            <div className="border">Please wait just a minute while we confirm your Twitter account</div>
            <p className="body-main">{errorMessage}</p>
        </div>
    )
}

export default Authorizing