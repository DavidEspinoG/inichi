import './App.css'
import Menu from './components/Menu'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <div className='container relative'>
      <div className='bg-blue p-8'>
        <Menu /> 
      </div>
      <Outlet />
      <Footer /> 
    </div>
  )
}

export default App
