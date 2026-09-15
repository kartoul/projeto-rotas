import {Link} from 'react-router-dom'
import {Home, Info, Mail, Package} from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='bg-blue-500 text-zinc-100 shadow-lg px-5'>
      <div className='flex justify-between h-16 items-center'>
        <div className='flex items-center space-x-2'>
          <span className='text-2xl font-bold'>Projeto</span>
        </div>
        <div className='flex justify-between'>
          <Link to="/" className='hover:bg-blue-400 p-2 rounded-lg flex items-center gap-2 py-2'><Home/>Home</Link>
          <Link to="/produtos" className='hover:bg-blue-400 p-2 rounded-lg flex items-center gap-2 py-2'><Package/>Produtos</Link>
          <Link to="/sobre" className='hover:bg-blue-400 p-2 rounded-lg flex items-center gap-2 py-2'><Info/>Sobre</Link>
          <Link to="/contato" className='hover:bg-blue-400 p-2 rounded-lg flex items-center gap-2 py-2'><Mail/>Contato</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
