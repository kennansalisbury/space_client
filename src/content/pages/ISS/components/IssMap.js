import React from 'react'
import { GoogleMap, Circle, LoadScript } from '@react-google-maps/api';

const mapStyles = {
    width: '50%',
    height: '50%'
}

const IssMap = props => {
    
    const center = {
        lat: Number(props.issPosition.latitude),
        lng: Number(props.issPosition.longitude)
      }

    return (
            <LoadScript
                googleMapsApiKey = {process.env.REACT_APP_GOOGLE_MAP_KEY}
            >
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    center={center}
                    zoom={2}
                    mapTypeId='satellite'
                >
                    <Circle
                        center={center}
                        radius={500000}
                    >

                    </Circle>

                </GoogleMap>
            </LoadScript>
        
 
       
    )
}

export default IssMap
// GoogleApiWrapper({
//     apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY
// })(IssMap)