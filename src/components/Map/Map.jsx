import React from 'react'
import GoogleMapReact from 'google-map-react'
import MapPinIcon from '@heroicons/react/24/outline'

const Map = ({setCoordinates, setBounds, coordinates}) => {

  return (
    <div className=' w-[70vw] h-[92vh]'>
      <GoogleMapReact
        bootstrapURLKeys={{key:'AIzaSyDlIE6AwvFDskFKVuTQl9B5Xvf5jJZV2mY'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        onChange={(e)=>{
          console.log(e)
          setCoordinates({lat:e.center.lat, lng:e.center.lng})
          setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw})
        }}
        >

      </GoogleMapReact>
    </div>
  )
}

export default Map