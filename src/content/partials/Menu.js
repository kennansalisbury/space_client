import React, {useState} from 'react'
import {Link} from 'react-router-dom'

//routes
import { profileRoute, astronautsRoute, issRoute } from '../../config/routes'

//material UI components
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'

//images
import Earth from '../../assets/earth.jpg'

const Menu = props => {

    const [open, setOpen] = useState(false)

    const toggleDrawer = (open) => {
        setOpen(open)
    }

    const logoutUser = () => {
        localStorage.removeItem('userToken');
        props.updateUser(null);
    }

    let drawerCloseBtnClass = open ? 'drawer-close-btn' : 'display-none'
    let routes = [profileRoute, astronautsRoute, issRoute]

    return (
        <div className="menu">
            <Button onClick={(e) => toggleDrawer(true)}><i className="fa fa-bars" style={{color: "white"}} aria-hidden="true"></i></Button>
            <React.Fragment>
                <GlobalCss />
                <Drawer anchor={'left'} open={open} onClick={() => toggleDrawer(false)} ModalProps={{hideBackdrop: true, disablePortal: true }}>
                    <img id="menu-photo" src={Earth} alt="earth"></img>
                </Drawer>
                <Drawer anchor={'right'} open={open} onClick={() => toggleDrawer(false)} ModalProps={{hideBackdrop: true, disablePortal: true, BackdropProps: {open: false} }}>
                    <div>
                        <List routes={routes} logoutUser={logoutUser}/>
                        <button className={drawerCloseBtnClass}>x</button>
                        <span className="photo-credit">Photo by <a href="https://unsplash.com/@nypl?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">The New York Public Library</a> on <a href="https://unsplash.com/s/photos/earth?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
                    </div>
                </Drawer>
            </React.Fragment>
        </div>
    )
}

const List = (props) => {
    let menuList = props.routes.map(route =><Link to={route.route}>{route.name}</Link>)

    return (
        <div className="menu-list">
            {menuList}
            <button onClick={() => props.logoutUser()}>Logout</button>
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