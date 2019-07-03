import React from 'react'

function LocationNotice ({ latitude, longitude }) {
  console.log(latitude)
  return <div className='geo-notice'>
      {latitude && <span>Latitude: {latitude}</span>}
      {longitude && <span>Longitude: {longitude}</span>}
    </div>
}

export default LocationNotice
