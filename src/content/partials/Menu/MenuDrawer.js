import React, {useState} from 'react'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

const MenuDrawer = props => {

 

    return (
        <div>
            <React.Fragment>
                <Drawer anchor={'left'} open={props.open} onClose={props.toggleDrawer(false)}>
                    {/* {list(anchor)} */}
                    test
                </Drawer>
                <Drawer anchor={'right'} open={props.open} onClose={props.toggleDrawer(false)}>
                    test
                </Drawer>
            </React.Fragment>

        </div>
    )
}

export default MenuDrawer