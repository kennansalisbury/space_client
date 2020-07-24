import React, {useState} from 'react'

//material UI components
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'


//app components
import MenuDrawer from './MenuDrawer'

const Menu = props => {

    const [open, setOpen] = useState(false)

    const toggleDrawer = (open) => {
        setOpen(open)
    }

    const list = (
        <div className="menu-list">
            <p>this</p>
            <p>is</p>
            <p>a</p>
            <p>menu</p>
        </div>
    )

    let drawerCloseBtnClass = open ? 'drawer-close-btn' : 'display-none'



    return (
        <div className="menu">
            <Button onClick={(e) => toggleDrawer(true)}>Menu</Button>
            <React.Fragment>
                <GlobalCss />
                <Drawer anchor={'left'} open={open} onClick={() => toggleDrawer(false)}>
                    {/* {list} */}
                </Drawer>
                <Drawer anchor={'right'} open={open} onClick={() => toggleDrawer(false)} >
                    {list}
                    <button className={drawerCloseBtnClass}>x</button>
                </Drawer>
            </React.Fragment>
        </div>
    )
}

const GlobalCss = withStyles({
    '@global': {
        '.MuiBackdrop-root': {
            'background-color': 'transparent',
        },
        '.MuiDrawer-paper': {
            'overflow-y': 'visible'
        }
    },
})(() => null)

export default Menu