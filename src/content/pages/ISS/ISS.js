import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'

//helper functions
import { fetchData } from '../../../helpers/Helpers'

//components
import IssMap from './components/IssMap'

const ISS = props => {

    const [issData, setIssData] = useState({})
    const [errorMessage, setErrorMessage] = useState('')

    //on render, fetch data from the api 
        //only if a user is logged in (so that we don't fetch data unecessarily if an unauthenticated user tries to access this page)
    useEffect(() => {
        if(props.user) {
            fetchData(process.env.REACT_APP_ISS_URL, setIssData, setErrorMessage)
        }
    },[props.user])

    //if there is no data loaded yet, don't display anything
    if(!issData.timestamp) {
        return <div></div>
    }

    //if no user is logged in, redirect to login
    if(!props.user) {
        return <Redirect to="/login" />
    }

    let issPosition
    if(issData.iss_position) {
        issPosition = issData.iss_position
    }
    else {
        issPosition = {
            latitude: issData.latitude,
            longitude: issData.longitude
        }
    }


    return (
        <div className="iss">
            
            <h1 className="heading-main">iss location</h1>

            <IssMap issPosition={issPosition} />

            <p className="body-main">{errorMessage}</p>

            <Link to="/" className="body-main">&larr; Back</Link>

            {/* stretch: 
                - include as of time and refresh button
                - include twitter feed for ISS
            */}

        </div>
    )
}

export default ISS