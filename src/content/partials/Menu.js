import React, {useState} from 'react'
import {Link} from 'react-router-dom'

//material UI components
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'

const Menu = props => {

    const [open, setOpen] = useState(false)

    const toggleDrawer = (open) => {
        setOpen(open)
    }

    let drawerCloseBtnClass = open ? 'drawer-close-btn' : 'display-none'


    return (
        <div className="menu">
            <Button onClick={(e) => toggleDrawer(true)}>MENU</Button>
            <React.Fragment>
                <GlobalCss />
                <Drawer 
                    anchor={'left'} 
                    open={open} 
                    onClick={() => toggleDrawer(false)}
                    ModalProps={{hideBackdrop: true, disablePortal: true }}
                >
                    <List 
                        list={{one: 'Astronauts', two: 'ISS Location'}} 
                        links={{one: '/astronauts', two: '/iss'}}
                    />
                </Drawer>
                <Drawer 
                    anchor={'right'} 
                    open={open} 
                    onClick={() => toggleDrawer(false)} 
                    ModalProps={{hideBackdrop: true, disablePortal: true 
                        // BackdropProps: {open: false} 
                    }}
                >
                <List 
                    list={{one: 'Profile', two: 'Logout'}}
                    links={{one: '/', two: '/logout'}} 
                />
                    <button className={drawerCloseBtnClass}>x</button>
                </Drawer>
            </React.Fragment>
        </div>
    )
}

const List = (props) => {
    return (
        <div className="menu-list">
            <Link to={props.links.one}>{props.list.one}</Link>
            <Link to={props.links.two}>{props.list.two}</Link>
        </div>
    )
}

const GlobalCss = withStyles({
    '@global': {
        '.MuiDrawer-paper': {
            'overflow-y': 'visible'
        }
    },
})(() => null)

export default Menu