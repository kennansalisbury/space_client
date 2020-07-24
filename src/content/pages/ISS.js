import React from 'react'

import { Redirect } from 'react-router-dom'

const ISS = props => {

    // ***** TO DO: if props.user, fetch data from iss api on render (useEffect) and generate map

    //if no user is logged in, redirect to login
    if(!props.user) {
        return <Redirect to="/login" />
    }

    return (
        <div className="iss">
            
            <h1>ISS Location</h1>
        
        </div>
    )
}

export default ISS