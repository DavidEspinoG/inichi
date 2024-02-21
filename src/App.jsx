import './App.css'
import Menu from './components/Menu'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <div className='container relative'>
      <Menu /> 
      <Outlet />
      <Footer /> 
    </div>
  )
}

export default App
