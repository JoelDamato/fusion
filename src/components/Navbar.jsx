import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (section) => {
    if (location.pathname === '/reserva') {
      // Si estamos en la página de reserva, navegar a home con hash
      navigate(`/#${section}`)
    } else {
      // Si estamos en home, hacer scroll a la sección
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/Logo.png"
              alt="FUSION Logo"
              className="w-24 h-12 sm:w-36 sm:h-16"
            />
          </div>

          {/* Desktop: nav + phone juntos */}
          <div className="hidden md:flex items-center space-x-8">
                         <nav className="flex items-center space-x-8">
               <button onClick={() => handleNavClick('inicio')} className="text-white text-xl font-black hover:text-yellow-400 transition-colors txt-float-solid-blur">Inicio</button>
               <button onClick={() => handleNavClick('espacios')} className="text-white text-xl font-black hover:text-yellow-400 transition-colors txt-float-solid-blur">Nuestros espacios</button>
               <button onClick={() => navigate('/reserva')} className="text-white text-xl font-black hover:text-yellow-400 transition-colors txt-float-solid-blur">Reserva</button>
               <button onClick={() => handleNavClick('contacto')} className="text-white text-xl font-black hover:text-yellow-400 transition-colors txt-float-solid-blur">Contacto</button>
             </nav>

            {/* Teléfono */}
            <a
              href="tel:3543609964"
              className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
              aria-label="Llamar a Fusion"
              title="3543609964"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </a>
          </div>

          {/* Mobile: menú hamburguesa */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-white p-2" 
              aria-label="Abrir menú"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu?.classList.toggle('hidden');
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div id="mobile-menu" className="md:hidden hidden bg-black/90 backdrop-blur-sm">
        <div className="px-4 py-6 space-y-4">
          <button onClick={() => handleNavClick('inicio')} className="block text-white text-lg font-black hover:text-yellow-400 transition-colors py-2 w-full text-left">Inicio</button>
          <button onClick={() => handleNavClick('espacios')} className="block text-white text-lg font-black hover:text-yellow-400 transition-colors py-2 w-full text-left">Nuestros espacios</button>
          <button onClick={() => navigate('/reserva')} className="block text-white text-lg font-black hover:text-yellow-400 transition-colors py-2 w-full text-left">Reserva</button>
          <button onClick={() => handleNavClick('contacto')} className="block text-white text-lg font-black hover:text-yellow-400 transition-colors py-2 w-full text-left">Contacto</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
