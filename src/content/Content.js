import React from 'react'
import { Route } from 'react-router-dom'

//components
import { Login, Home, Astronauts, ISS, Authorizing } from './pages'
import { Header, Footer } from './partials'

//routes
import {loginRoute, homeRoute, astronautsRoute, issRoute, authorizingRoute} from '../routes'


const Content = props => {

    return (
        <div className="content">
            {props.user ? <Header user={props.user} updateUser={props.updateUser}/> : '' }
            <Route exact path={homeRoute.route} render={() => <Home user={props.user} />}/>
            <Route path={loginRoute.route} render={() => <Login user={props.user} />}/>
            <Route path={authorizingRoute.route} render={() => <Authorizing user={props.user} updateUser={props.updateUser}/> } />
            <Route path={astronautsRoute.route} render={() => <Astronauts user={props.user} />}/>
            <Route path={issRoute.route} render={() => <ISS user={props.user} />}/>
            <Footer />
        </div>
       
    )

}

export default Content