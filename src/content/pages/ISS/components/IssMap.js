import React, { useEffect, useState } from 'react'
import { GoogleMap, Circle, LoadScript } from '@react-google-maps/api';

const mapStyles = {
    width: '50%',
    height: '50%'
}

const center = {
    lat: -3.745,
    lng: -38.523
  };

const IssMap = props => {

    // const { isLoaded, loadError } = useLoadScript({
    //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY
    // })


    return (
        

            <LoadScript
                googleMapsApiKey = {process.env.REACT_APP_GOOGLE_MAP_KEY}
            >
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    center={center}
                    zoom={5}
                    mapTypeId='satellite'
                >
                    <Circle
                        center={center}
                        radius={100000}
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