import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

// import { Button } from 'react-bootstrap';


function App() {
  return (
    <Routes>
      <div>App</div>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;