import React, { useEffect, useState } from 'react'

import { Redirect } from 'react-router-dom'
import { fetchData } from '../../../helpers/Helpers'

//components
import {Table} from './components'

const Astronauts = props => {

    const [errorMessage, setErrorMessage] = useState('')
    const [astronautData, setAstronautData] = useState({})

    //on render, fetch data from the api 
        //only if a user is logged in (so that we don't fetch data unecessarily if an unauthenticated user tries to access this page)
    useEffect(() => {
        if(props.user) {
            fetchData(process.env.REACT_APP_ASTRO_URL, setAstronautData, setErrorMessage)
        }
    }, [props.user])
    
    
    //if no user is logged in, redirect to login
    if(!props.user) {
        return <Redirect to="/login" />
    }
    
    //if there is no data loaded yet, don't display anything
    if(!astronautData.number) {
        return <div></div>
    }

    //once there is data loaded and saved in state, parse data and assign to variables for use in return
    let astronauts, numAstronauts
    if(astronautData.people) {
        astronauts = astronautData.people
        numAstronauts = astronautData.number
    }
     
    return (
        <div className="astronauts">
            
            <h1>{numAstronauts} Astronauts Currently In Space</h1>
            
            {errorMessage} {/* if there is an error with fetching the data, it will tell the user to try again later*/}

            <div className="border">
                <Table astronauts={astronauts} />
            </div>

        </div>
    )
}


export default Astronauts