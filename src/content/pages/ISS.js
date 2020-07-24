import React, { useState, useEffect } from 'react'

import { Redirect } from 'react-router-dom'
import { catchError } from '../../helpers/Helpers'

const ISS = props => {

    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [timestamp, setTimestamp] = useState(0)
    const [errorMessage, setErrorMessage] = useState('')

    // ***** TO DO: if props.user, fetch data from iss api on render (useEffect) and generate map
    useState(() => {
        if(props.user) {
            fetch('http://api.open-notify.org/iss-now.json')
            .then(response => 
                response.json()
                .then(data => {
                   setLat(data.iss_position.latitude)
                   setLong(data.iss_position.longitude)
                   setTimestamp(data.timestamp)
                })
                .catch(err => catchError(err, setErrorMessage))
            )
            .catch(err => catchError(err, setErrorMessage))
        }
    },[props.user])

    console.log({lat, long, timestamp})

    //if no user is logged in, redirect to login
    if(!props.user) {
        return <Redirect to="/login" />
    }

    return (
        <div className="iss">
            
            <h1>ISS Location</h1>
            {/* need to include as of time and refresh button; stretch: frequent polling */}


        </div>
    )
}

export default ISS