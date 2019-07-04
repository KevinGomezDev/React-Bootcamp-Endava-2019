import React from 'react'

function LocationNotice ({ latitude, longitude }) {
  return <div className='geo-notice'>
      {latitude && <span>Latitude: {latitude}</span>}
      {longitude && <span>Longitude: {longitude}</span>}
    </div>
}

export default LocationNotice
