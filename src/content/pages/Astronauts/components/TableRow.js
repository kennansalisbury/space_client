import React from 'react'

const TableRow = props => {

    let astronaut = props.astronaut

    return (
        <div className="table__row">
            <p className="left_text">{astronaut.name}</p>
            <p>{astronaut.craft}</p>
            <p><i class="fab fa-twitter-square"></i></p>
        </div>
    )
}

export default TableRow