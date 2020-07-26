import React, {useState, useEffect} from 'react'
import { catchError } from '../../../../helpers/Helpers'

const TableRow = props => {

    let astronaut = props.astronaut
    const [twitter, setTwitter] = useState('')

    useEffect(() => {
        //post search to backend to query api
        let token = localStorage.getItem('userToken')
        fetch('http://localhost:3000/twitter/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="table__row">
            <p className="left_text">{astronaut.name}</p>
            <p>{astronaut.craft}</p>
            {twitter ? <p><i className="fab fa-twitter-square"></i></p> : '' }
        </div>
    )
}

export default TableRow