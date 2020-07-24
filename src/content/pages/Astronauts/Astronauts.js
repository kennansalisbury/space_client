import React, { useEffect, useState } from 'react'

import { Redirect } from 'react-router-dom'
import { catchError } from '../../../helpers/Helpers'

//components
import {Table} from './components'

const Astronauts = props => {

    const [errorMessage, setErrorMessage] = useState('')
    const [astronautData, setAstronautData] = useState([])
    const [numAstronauts, setNumAstronauts] = useState(0)

    //if props.user, fetch data from astronaut api on render (useEffect)
    useEffect(() => {
        if(props.user) {
            fetch('http://api.open-notify.org/astros.json')
            .then(response => 
                response.json()
                .then(data => {
                    console.log(data)
                    setAstronautData(data.people)
                    setNumAstronauts(data.number)
                })
                .catch(err => catchError(err, setErrorMessage))
            )
            .catch(err => catchError(err, setErrorMessage))
        }
    }, [props.user])
    
    //if no user is logged in, redirect to login
    if(!props.user) {
        return <Redirect to="/login" />
    }

    if(!astronautData.length) {
        return <div></div>
    }

    return (
        <div className="astronauts">
            <h1>{astronautData.length ? numAstronauts : ''} Astronauts Currently In Space</h1>
            {errorMessage}

            {/***** TO DO: pass data into table component here ******/}
            <div className="border"><Table astronauts={astronautData} /></div>

        </div>
    )
}

export default Astronauts