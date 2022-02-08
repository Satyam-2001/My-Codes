import { Route, Routes, BrowserRouter } from 'react-router-dom'
import PrivateRoom from './pages/PrivateRoom';
import JoinRoom from './pages/JoinRoom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoom />} />
        <Route path="/:roomId" element={<JoinRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
