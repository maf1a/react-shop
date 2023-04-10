import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Login } from './pages/login/Login';
import { Shop } from './pages/shop/Shop';
import { Header } from './components/Header/Header';
import { stores } from './stores';
import { Provider, observer, useObserver } from 'mobx-react';
import { useEffect } from 'react';

const Logged = observer(({ children }: {children: React.ReactElement}): React.ReactElement => {
  const storeUser = useObserver(() => stores.userStore)
  const navigate = useNavigate()
  const user = storeUser.user

  useEffect(() => {
    if (user === null) {
      return navigate('/')
    }
  }, [user])

  if (user === null) {
    return <></>
  }

  return (
    <div>
      <Header />
      {children}
    </div>
  )
})

const Unlogged = observer((): React.ReactElement => {
  const storeUser = useObserver(() => stores.userStore)
  const navigate = useNavigate()
  const user = storeUser.user

  useEffect(() => {
    if (user !== null) {
      return navigate('/shop')
    }
  }, [user])

  if (user !== null) {
    return <></>
  }

  return <Login />
})

function App() {
  // setup store
  return (
    <Router>
        <Provider store={stores}>
          <div className="app-container">
            <Routes>
              <Route path="/" element={<Unlogged />} />
              <Route path="/shop/:pageType?/:pageNumber?" element={<Logged><Shop/></Logged>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Provider>
    </Router>
  )
}

export default App
