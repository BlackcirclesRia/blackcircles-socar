import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Login  from './pages/Login';
import  Profile  from './pages/Profile';
import  Manage  from './pages/Manage';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/manage" element={<Manage />} />
          </Routes>
      </BrowserRouter>
  );
}
export default App;
