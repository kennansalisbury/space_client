import React, {useEffect} from 'react'

//components
import { TableRow } from '.'

const Table = props => {

    useEffect(() => {
        //post search to backend to query api
        let token = localStorage.getItem('userToken')
        // let data = {
        //     q: props.astronauts[0].name
        // }
        // console.log(data, JSON.stringify(data))
        fetch('http://localhost:3000/twitter/user', {
            // method: 'POST',
            // data: JSON.stringify(data),
            headers: {
                // 'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => console.log('🌈', response))
        .catch(err => console.log(err))
    }, [])

    let tableRows = props.astronauts.map(a => <TableRow key={a.name} astronaut={a} />)

    return (
        <div className="table">
            <div className="table__headers">
                <p className="left_text">Name</p>
                <p>Currently On</p>
                <p></p>
            </div>
            <div>
                {tableRows}
            </div>
        </div>
    )
}

export default Table