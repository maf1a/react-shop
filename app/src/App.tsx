import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/login/Login';
import { Shop } from './pages/shop/Shop';
import { Header } from './components/Header/Header';

const containerLogged = (child: React.ReactNode) => {
  return (
    <div>
      <Header />
      {child}
    </div>
  )
}

function App() {
  // setup store
  return (
    <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/shop" element={containerLogged(<Shop />)} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
    </Router>
  )
}

export default App
