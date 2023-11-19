import './index.css';
import { Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Account from './pages/Account.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx'

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/Account' element={
          <ProtectedRoute>
          <Account />
          </ProtectedRoute>
          } />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
