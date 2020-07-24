import React, {useState} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './scss/main.scss'

//components
import Content from './content/Content'

function App() {

  const [user, setUser] = useState('user')
  // const [user, setUser] = useState(null)

  return (
    <Router>
      <Content user={user} />
    </Router>
  );
}

export default App;
