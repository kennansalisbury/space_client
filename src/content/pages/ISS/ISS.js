import React, { useState, useEffect } from 'react'

import { Redirect } from 'react-router-dom'
import { fetchData } from '../../../helpers/Helpers'

import issMap from './ISS'
import IssMap from './components/IssMap'

const ISS = props => {

    const [issData, setIssData] = useState({})
    const [errorMessage, setErrorMessage] = useState('')

    //on render, fetch data from the api 
        //only if a user is logged in (so that we don't fetch data unecessarily if an unauthenticated user tries to access this page)
    useState(() => {
        if(props.user) {
            fetchData(process.env.REACT_APP_ISS_URL, setIssData, setErrorMessage)
        }
    },[props.user])

    //if no user is logged in, redirect to login
    if(!props.user) {
        return <Redirect to="/login" />
    }

    //if there is no data loaded yet, don't display anything
    if(!issData.timestamp) {
        return <div></div>
    }

    //once there is data loaded and saved in state, parse data and assign to variables for use in return
    let timestamp, lat, long
    if(issData.timestamp) {
        timestamp = issData.timestamp
        lat = issData.iss_position.latitude
        long = issData.iss_position.longitude
    }

    return (
        <div className="iss">
            
            <h1>ISS Location</h1>

            {/* ***** TO DO: generate location on map with lat/long */}
            <IssMap />

            {/* need to include as of time and refresh button; stretch: frequent polling */}


        </div>
    )
}

export default ISS