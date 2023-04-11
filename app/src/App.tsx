import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Shop } from './pages/shop/Shop';
import { stores } from './stores';
import { Provider } from 'mobx-react';
import { LoginGuardLogged } from './layout/LoginGuardLogged';
import { LoginGuardUnlogged } from './layout/LoginGuardUnlogged';

function App() {
  return (
    <Router>
        <Provider store={stores}>
          <div className="app-container">
            <Routes>
              <Route path="/" element={<LoginGuardUnlogged />} />
              <Route path="/shop/:pageType?/:pageNumber?" element={<LoginGuardLogged><Shop/></LoginGuardLogged>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Provider>
    </Router>
  )
}

export default App
