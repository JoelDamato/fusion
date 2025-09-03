import React, { useState } from 'react'
import Navbar from './components/Navbar'
import WhyFusionVideo from './components/WhyFusionVideo'
import WorkspaceCards from './components/WorkspaceCards'
import OurSpaces from './components/OurSpaces'
import Memberships from './components/Memberships'
import Services from './components/Services'

function App() {
  return (
    <div className="min-h-screen bg-white font-monserrat">
      <Navbar />

      {/* Hero Section */}
<section id="inicio" className="pt-16 sm:pt-20 relative min-h-screen flex items-center overflow-hidden">
  {/* Overlay oscuro */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/30 z-10" />
  
  {/* Imagen de fondo */}
  <div className="absolute inset-0 z-0">
    <img
      src="/images/Banner.jpeg"
      alt="FUSION Coworking - Espacio de trabajo"
      className="w-full h-full object-cover block"
    />
  </div>
        
  {/* Contenido */}
  <div className="relative z-20 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
      <div className="text-white text-center lg:text-left">
        
        {/* Línea + Texto chico */}
        <div className="mb-4 sm:mb-6 flex items-center justify-center lg:justify-start">
          <div className="w-8 sm:w-10 lg:w-12 h-[2px] bg-[#fcc803] mr-3"></div>
          <span className="font-montserrat text-[#fcc803] text-sm sm:text-lg lg:text-xl font-medium tracking-wider txt-float-solid-blur">
            CONOCE FUSIÓN COWORKING
          </span>
              </div>

        {/* Título en DOS LÍNEAS controladas */}
        <h1 className="font-montserrat font-light text-white txt-float-solid-blur leading-[1.1] tracking-[0.01em] 
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 max-w-[22ch] mx-auto lg:mx-0">
          <span className="block">Llegamos para cambiar</span>
          <span className="block">la manera de trabajar</span>
              </h1>

        {/* Subtítulo con más tracking */}
        <p className="font-montserrat text-white font-extrabold txt-float-intense 
                      text-base sm:text-lg lg:text-xl tracking-[0.04em] 
                      mb-6 sm:mb-8 max-w-[40ch] mx-auto lg:mx-0">
  Flexibilidad. Comodidad. Inspiración. Sinergia
</p>
            </div>
          </div>
        </div>
      </section>

      <WhyFusionVideo />

              <WorkspaceCards />


      <OurSpaces />

      <Memberships />

      <Services />

      {/* Contact Section */}
      <section id="contacto" className="py-12 sm:py-16 lg:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/30 z-10"></div>
        <div className="absolute inset-0 bg-gray-300 z-0">
          {/* Placeholder para imagen de fondo */}
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <span className="text-gray-500 text-sm sm:text-base lg:text-lg">Imagen de fondo del coworking</span>
          </div>
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 lg:mb-16">VENI A CONOCERNOS</h2>
          
          <div className="bg-yellow-500 p-4 sm:p-6 lg:p-8 rounded-lg shadow-2xl">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">¡SUMATE A FUSIÓN!</h3>
            <p className="text-sm sm:text-base text-gray-800 mb-6 sm:mb-8">
              Comunicate con nosotros a través del siguiente formulario o de los medios de contacto que se detallan.
            </p>
            
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="text"
                  placeholder="NOMBRE Y APELLIDO"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-800 rounded-lg focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                />
                <input
                  type="tel"
                  placeholder="TELEFONO"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-800 rounded-lg focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                />
              </div>
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-800 rounded-lg focus:outline-none focus:border-orange-500 text-sm sm:text-base"
              />
              <textarea
                placeholder="MENSAJE"
                rows="4"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-800 rounded-lg focus:outline-none focus:border-orange-500 resize-none text-sm sm:text-base"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg hover:bg-gray-600 transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 FUSION Coworking. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
