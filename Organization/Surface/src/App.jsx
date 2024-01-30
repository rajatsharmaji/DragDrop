import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import GrapesEditor from '../../../Builder/Surface/src/components/WebBuilder';
import './App.css'

function App() {

  return (
    <>
        <Router>
            <Navbar/>
          <Routes>
            <Route path='/dragdrop' element={<GrapesEditor/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<SignUp/>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
