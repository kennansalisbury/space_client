import React, {useState} from 'react'
import {Link} from 'react-router-dom'

//routes
import { homeRoute, astronautsRoute, issRoute } from '../../routes'

//material UI components
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'

//images
import Earth from '../../assets/earth.jpg'

const Menu = props => {

    const [open, setOpen] = useState(false)

    //toggles whether the menu is open or closed
    const toggleDrawer = (open) => {
        setOpen(open)
    }

    //logs user out when clicking the logout button
    const logoutUser = () => {
        localStorage.removeItem('userToken');
        props.updateUser(null);
    }

    //sets class for the "close" btn for the menu, so that it only displays when the menu is open
    let drawerCloseBtnClass = open ? 'menu__close-btn' : 'display-none'

    //route content from import for including in the menu (passed into List component)
    let routes = [homeRoute, astronautsRoute, issRoute]

    return (
        <div className="menu">
            <Button onClick={(e) => toggleDrawer(true)}><i className="fa fa-bars" style={{color: "white"}} aria-hidden="true"></i></Button>
            <React.Fragment>
                <GlobalCss />
                <Drawer anchor={'left'} open={open} onClick={() => toggleDrawer(false)} ModalProps={{hideBackdrop: true, disablePortal: true }}>
                    <div className="menu__drawer menu__drawer__left">
                        <img id="menu-photo" src={Earth} alt="earth"></img>
                    </div>
                </Drawer>
                <Drawer anchor={'right'} open={open} onClick={() => toggleDrawer(false)} ModalProps={{hideBackdrop: true, disablePortal: true, BackdropProps: {open: false} }}>
                    <div className="menu__drawer menu__drawer__right">
                        <List routes={routes} logoutUser={logoutUser}/>
                        <button className={drawerCloseBtnClass}>x</button>
                        <span className="photo-credit">Photo by <a href="https://unsplash.com/@nypl?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">The New York Public Library</a> on <a href="https://unsplash.com/s/photos/earth?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
                    </div>
                </Drawer>
            </React.Fragment>
        </div>
    )
}

//list component
const List = (props) => {
    let menuList = props.routes.map(route =><Link className="menu-header" key={route.name} to={route.route}>{route.name}</Link>)

    return (
        <div className="menu__list">
            {menuList}
            <p className="menu-header" onClick={() => props.logoutUser()}>logout</p>
        </div>
    )
}

//overrides the override property - this allows for the close menu button to appear over both drawers
const GlobalCss = withStyles({
    '@global': {
        '.MuiDrawer-paper': {
            'overflow-y': 'visible'
        },
        '.MuiPaper-root': {
            'background-color': 'rgb(46, 44, 44)'
        }
    }
})(() => null)

export default Menu