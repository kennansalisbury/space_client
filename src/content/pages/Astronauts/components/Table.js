import React, {useEffect} from 'react'

//components
import { TableRow } from '.'

const Table = props => {

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