import React from 'react'
import GoogleMapReact from 'google-map-react'
import MapPinIcon from '@heroicons/react/24/outline'

const Map = () => {
const coordinates = {lat:0, lng:0}

  return (
    <div className=' w-[70vw] h-[92vh] '>
      <GoogleMapReact
        bootstrapURLKeys={{key:''}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        >

      </GoogleMapReact>
    </div>
  )
}

export default Map