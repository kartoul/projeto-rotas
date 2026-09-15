import {Link} from 'react-router-dom'
import {Home, Info, Mail, Package} from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='bg-amber-200 text-mauve-900 shadow-lg px-5 rounded-lg'>
      <div className='flex justify-between h-16 items-center'>
        <div className='flex items-center space-x-2'>
          <span className='text-2xl font-bold'>Projeto</span>
        </div>
        <div className='flex justify-between'>
          <Link to="/" className='hover:bg-amber-100 p-2 rounded-lg flex items-center gap-2 py-2'><Home/>Home</Link>
          <Link to="/produtos" className='hover:bg-amber-100 p-2 rounded-lg flex items-center gap-2 py-2'><Package/>Produtos</Link>
          <Link to="/sobre" className='hover:bg-amber-100 p-2 rounded-lg flex items-center gap-2 py-2'><Info/>Sobre</Link>
          <Link to="/contato" className='hover:bg-amber-100 p-2 rounded-lg flex items-center gap-2 py-2'><Mail/>Contato</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
