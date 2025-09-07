import React, { useState } from 'react'
import Navbar from './components/Navbar'
import WhyFusionVideo from './components/WhyFusionVideo'
import WorkspaceCards from './components/WorkspaceCards'
import OurSpaces from './components/OurSpaces'
import Memberships from './components/Memberships'
import Services from './components/Services'
import Footer from './components/Footer'

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

      <Footer />
    </div>
  )
}

export default App
