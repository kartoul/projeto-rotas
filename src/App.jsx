import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'


const App = () => {
  return (
    <Router>
      <div className='min-h-screen bg-gray-100 text-gray-900'>
        <Navbar/>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
            <Route path='/contato' element={<Contato/>}/>
            <Route path='/produtos' element={<Produtos/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
