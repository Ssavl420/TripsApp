import RouteTrip from "./RouteTrip";

export default function TripsList({ trips }) {

   const tripElements = trips.map(trip =>
      <li className="col-12 mb-2 mb-sm-4">
         <RouteTrip trip={trip} />
      </li>
   )
   return (
      <ul className="row list-unstyled">
         {tripElements}
      </ul>
   )
}