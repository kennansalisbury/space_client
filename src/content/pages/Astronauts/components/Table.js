import React from 'react'

//components
import { TableRow } from '.'

const Table = props => {

    let tableRows = props.astronauts.map(a => <TableRow key={a.name} astronaut={a} />)

    return (
        <div className="table">
            <div className="table__headers body-bold">
                <p className="left_text">name</p>
                <p>ship</p>
                <p></p>
            </div>
            <div>
                {tableRows}
            </div>
        </div>
    )
}

export default Table