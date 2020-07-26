import React, {useState, useEffect} from 'react'
import { catchError } from '../../../../helpers/Helpers'

const TableRow = props => {

    let astronaut = props.astronaut
    const [twitter, setTwitter] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {

        if(props.astronaut) {
            //post search to backend to query api for astronaut's twitter info
            //sets info in "twitter" state
            let token = localStorage.getItem('userToken')
            let postData = {
                q: props.astronaut.name
            }

            fetch('http://localhost:3000/twitter/user', {
                method: 'POST',
                body: JSON.stringify(postData),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => response.json()
                .then(data => {
                    setTwitter(data)
                })
            )
            .catch(err => catchError(err, setErrorMessage))
        }
        
    }, [props.astronaut])

    return (
        <div className="table__row body-main">
            <p className="left_text">{astronaut.name}</p>
            <p>{astronaut.craft}</p>
            {twitter ? <a href={`http://twitter.com/${twitter.screen_name}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a> : '' }
        </div>
    )
}

export default TableRow