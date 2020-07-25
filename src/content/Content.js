import React from 'react'
import { Route, Match } from 'react-router-dom'

//components
import { Login, Profile, Astronauts, ISS } from './pages'
import { Header, Menu, Footer } from './partials'


const Content = props => {

    return (
        <div className="content">
            {props.user ? <Header user={props.user} /> : '' }
            <Menu  /> 
            <Route exact path="/" render={() => <Profile user={props.user} />}/>
            <Route path="/login" render={() => <Login user={props.user} />}/>
            <Route path="/astronauts" render={() => <Astronauts user={props.user} />}/>
            <Route path="/iss" render={() => <ISS user={props.user} />}/>
            <Footer />
        </div>
       
    )

}

export default Content