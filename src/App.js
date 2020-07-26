import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './scss/main.scss'
import { CookiesProvider } from 'react-cookie'
import jwtDecode from 'jwt-decode'

//components
import Content from './content/Content'

function App() {

  // const [user, setUser] = useState('user')
  const [user, setUser] = useState(null)

  // Define any onload actions (i.e. to look out for the token)
  useEffect(() => {
    decodeToken()
  }, [])

  // Helper function to update the user
  const updateUser = newToken => {
    console.log('update user')
    if(newToken) {
      // Save the token 
      localStorage.setItem('userToken', newToken) //reassigns token in local storage

      // update the user with token info
      decodeToken(newToken)
    }
    else { // logging out
      setUser(null)
    }
  }

  // Helper function to decode existing tokens
  const decodeToken = existingToken => {
    let token = existingToken || localStorage.getItem('userToken')

    // Decode token
    if(token) {
      let decoded = jwtDecode(token)

      // If the token is not decodable or is expired, NO USER
      if(!decoded || Date.now > decoded.exp * 1000) {
        setUser(null)
      } else {
        // if token is good, set user to the decoded data from the token
        setUser(decoded)
      }
    }
    else {
      setUser(null)
    }

  }

  return (
    <Router>
      <CookiesProvider>
        <Content user={user} updateUser={updateUser} />
      </CookiesProvider>
    </Router>
  );
}

export default App;
