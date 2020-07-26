import React from 'react'

//components
import Menu from './Menu'

const Header = props => {
    return (
        
        <div className="header">
            {props.user ? <Menu user={props.user} updateUser={props.updateUser}  /> : ''}
            <div className="brand">
                <p className="brand-small">space flex</p>
            </div>
        </div>
    )
}

export default Header