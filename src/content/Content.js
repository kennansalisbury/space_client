import React from 'react'
import { Route } from 'react-router-dom'

//components
import { Login, Profile, Astronauts, ISS } from './pages'
import { Header, Menu, Footer } from './partials'


const Content = props => {

    return (
        <div className="content">
            <Header user={props.user} />
            <Route path="/login" render={() => <Login user={props.user} />}/>
            <Route path="/profile" render={() => <Profile user={props.user} />}/>
            <Route path="/astronauts" render={() => <Astronauts user={props.user} />}/>
            <Route path="/iss" render={() => <ISS user={props.user} />}/>
            <Footer />
        </div>
       
    )

}

export default Content