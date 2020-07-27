import React, { useEffect, useState } from 'react'
import { Redirect, Link } from 'react-router-dom'

//helper functions
import { fetchData } from '../../../helpers/Helpers'

//components
import Table from './components/Table'

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
            
            <h1 className="heading-main">{numAstronauts} astronauts currently in space</h1>

            <div className="border table__container">
                <p className="body-main"> {errorMessage}</p>
                <Table astronauts={astronauts} />
            </div>

            <Link to="/" className="body-main">&larr; Back</Link>

        </div>
    )
}


export default Astronauts