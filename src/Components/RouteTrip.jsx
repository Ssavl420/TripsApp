import React from 'react'

const RouteTrip = (props) => {
   const { trip } = props;

   if (trip.registeredPeople !== null) {
      const item =
         <section className='col-12 route'>
            <img className='col-12 img-fluid' src={trip.img} alt={trip.name} />
            <p className='h1 m-0 text-white description'>{trip.name}, {trip.date} — {trip.cost}</p>
            <div className='method d-flex'>
               <p className="badge rounded-pill px-3 py-2 m-0 text-black text-uppercase fs-6 bg-custom">{trip.method}</p>
               <p className='badge rounded-pill px-3 py-2 m-0 text-black text-uppercase fs-6 bg-custom d-flex gap-1'>
                  {trip.registeredPeople}
                  <span className='peopleImage'></span>
               </p>
            </div>
         </section>;

      return (
         item
      )
   }

   if (trip.registeredPeople == null) {
      const item =
         <section className='col-12 route'>
            <img className='col-12 img-fluid' src={trip.img} alt={trip.name} />
            <p className='h1 m-0 text-white description'>{trip.name}, {trip.date} — {trip.cost}</p>
            <div className='method'>
               <p className="badge rounded-pill px-3 py-2 m-0 text-black text-uppercase fs-6 bg-custom">{trip.method}</p>
            </div>
         </section>;

      return (
         item
      )
   }
}

export default RouteTrip