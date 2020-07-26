import React, {useState, useEffect} from 'react'
import { catchError } from '../../../../helpers/Helpers'

const TableRow = props => {

    let astronaut = props.astronaut
    const [twitter, setTwitter] = useState('')


    return (
        <div className="table__row">
            <p className="left_text">{astronaut.name}</p>
            <p>{astronaut.craft}</p>
            {twitter ? <p><i className="fab fa-twitter-square"></i></p> : '' }
        </div>
    )
}

export default TableRow