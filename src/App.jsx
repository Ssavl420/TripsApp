import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

// import { Button } from 'react-bootstrap';


function App() {
  console.log('App')
  return (
    <Routes>
      <Route path="/TripsApp/" element={<HomePage />} />
    </Routes>
    // <HomePage />
  );
}

export default App;