import React from 'react'
import TripsList from './TripsList'
import trips from './Trips';

const PageContent = () => {
   return (

      <TripsList trips={trips} />

   )
}

export default PageContent