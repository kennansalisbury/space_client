import React from 'react'
import { Route, Match } from 'react-router-dom'

//components
import { Login, Profile, Astronauts, ISS, Authorizing } from './pages'
import { Header, Menu, Footer } from './partials'

//routes
import {loginRoute, profileRoute, astronautsRoute, issRoute, authorizingRoute} from '../config/routes'


const Content = props => {

    return (
        <div className="content">
            {props.user ? <Header user={props.user} updateUser={props.updateUser}/> : '' }
            <Route exact path={profileRoute.route} render={() => <Profile user={props.user} />}/>
            <Route path={loginRoute.route} render={() => <Login user={props.user} />}/>
            <Route path={authorizingRoute.route} render={() => <Authorizing user={props.user} updateUser={props.updateUser}/> } />
            <Route path={astronautsRoute.route} render={() => <Astronauts user={props.user} />}/>
            <Route path={issRoute.route} render={() => <ISS user={props.user} />}/>
            <Footer />
        </div>
       
    )

}

export default Content