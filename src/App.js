import './App.css';

import { Routes,Route,Link } from 'react-router-dom';

import CharacterListing from './components/charlisting/CharacterListing';
import CharacterDetails from './components/chardetails/CharacterDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharacterListing/>} />
        <Route path="/character-detail" exact element={<CharacterDetails />} />
      </Routes>
    </div>
  );
}

export default App;
