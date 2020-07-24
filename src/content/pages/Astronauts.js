import React from 'react'

import { Redirect } from 'react-router-dom'

const Astronauts = props => {

    // ***** TO DO: if props.user, fetch data from astronaut api on render (useEffect)
    
    //if no user is logged in, redirect to login
    if(!props.user) {
        return <Redirect to="/login" />
    }

    return (
        <div className="astronauts">
            <h1>Astronauts Currently In Space</h1>

            {/***** TO DO: pass data into table component here ******/}

        </div>
    )
}

export default Astronauts