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


    return (
        <div>
            <Button onClick={(e) => toggleDrawer(true)}>Menu</Button>
            <React.Fragment>
                <GlobalCss />
                <Drawer anchor={'left'} open={open} onClose={() => toggleDrawer(false)} className="menu-drawer">
                    {list}
                </Drawer>
                <Drawer anchor={'right'} open={open} onClose={() => toggleDrawer(false)}>
                    {list}
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
    },
})(() => null)

export default Menu