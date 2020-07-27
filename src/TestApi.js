import React, { useEffect } from 'react'

const TestApi = props => {

    useEffect(() => {
        fetch('https://spaceflex.netlify.app/astrosapi')
        .then(response => response.json()
            .then( data => console.log('🌈', data))
            .catch(err => console.log(err))
        )
        .catch(err => console.log(err))
    },[])
    
    return (
        <div>
            TESTING
        </div>
    )
}

export default TestApi