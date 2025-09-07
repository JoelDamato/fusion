import React, { useState, useEffect } from 'react'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
               <a href="#inicio" className="text-white text-xl font-black hover:text-yellow-400 transition-colors txt-float-solid-blur">Inicio</a>
               <a href="#espacios" className="text-white text-xl font-black hover:text-yellow-400 transition-colors txt-float-solid-blur">Nuestros espacios</a>
               <a href="#contacto" className="text-white text-xl font-black hover:text-yellow-400 transition-colors txt-float-solid-blur">Reserva</a>
               <a href="#contacto" className="text-white text-xl font-black hover:text-yellow-400 transition-colors txt-float-solid-blur">Contacto</a>
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

          {/* Mobile: links cortos + menú */}
          <div className="md:hidden flex items-center">
                         <nav className="flex space-x-4 mr-2">
               <a href="#inicio" className="text-white text-base font-black hover:text-yellow-400 transition-colors">Inicio</a>
               <a href="#espacios" className="text-white text-base font-black hover:text-yellow-400 transition-colors">Espacios</a>
               <a href="#contacto" className="text-white text-base font-black hover:text-yellow-400 transition-colors">Reserva</a>
               <a href="#contacto" className="text-white text-base font-black hover:text-yellow-400 transition-colors">Contacto</a>
             </nav>
            <button className="text-white p-1" aria-label="Abrir menú">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
