import React, {useState, useEffect} from 'react'
import { catchError } from '../../../../helpers/Helpers'

const TableRow = props => {

    let astronaut = props.astronaut
    const [twitter, setTwitter] = useState('')

    useEffect(() => {
        console.log('props.astronaut', props.astronaut)
        if(props.astronaut) {
            //post search to backend to query api
            let token = localStorage.getItem('userToken')
            let postData = {
                q: props.astronaut.name
            }

            console.log('DATA', postData, JSON.stringify(postData))
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
                    console.log('DATA', data)
                    setTwitter(data)
                })
            )
            .catch(err => console.log(err))
        }
        
    }, [props.astronaut])

    return (
        <div className="table__row">
            <p className="left_text">{astronaut.name}</p>
            <p>{astronaut.craft}</p>
            {twitter ? <a href={`http://twitter.com/${twitter.screen_name}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a> : '' }
        </div>
    )
}

export default TableRow