import React, {useEffect, useState} from 'react'
import { useLocation, Redirect } from 'react-router-dom'
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
        console.log(data)
        fetch('http://localhost:3000/auth/twitter', {
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


    if(redirect) {
        return <Redirect to="/" />
    }


    return (
        <div className="authorizing">
            <div className="border">Please wait just a minute while we confirm your Twitter account</div>
        </div>
    )
}

export default Authorizing