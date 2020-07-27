import React, { useEffect } from 'react'

const TestApi = props => {

    useEffect(() => {
        fetch('https://spaceflex.netlify.app/astrosapi')
        .then(response => console.log('🌈', response))
        .catch(err => console.log(err))
    },[])
    
    return (
        <div>
            TESTING
        </div>
    )
}

export default TestApi