import React from 'react'

import { Redirect } from 'react-router-dom'

const Astronauts = props => {

    //if no user is logged in, redirect to login
    if(!props.user) {
        return <Redirect to="/login" />
    }

    return (
        <div>Astronauts currently in space</div>
    )
}

export default Astronauts