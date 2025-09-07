import React from 'react'

function OurSpaces() {
  return (
    <section id="espacios" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="-ml-4 sm:-ml-4 lg:-ml-6">
    <div className="inline-flex items-center bg-[#fcc803] rounded-full px-6 py-2">
      <div className="w-5 h-[2px] bg-black mr-3 ml-5" />
      <span className="font-montserrat  text-black text-sm sm:text-base lg:text-lg font-medium tracking-wider">
NUESTROS ESPACIOS</span>
    </div>
  </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Elegí el que más se adapte a vos</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Main Image */}
          <div className="lg:col-span-2 order-1">
            <div className="w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
              <img 
                src="/images/header.jpeg" 
                alt="Área compartida de coworking" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Shared Desks Info */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg order-2">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Puestos compartidos</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              24 puestos compartidos con sillas ergonómicas y acceso a todos los servicios del coworking. 
              Un ambiente funcional y cómodo para trabajar de forma individual o colaborativa.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm sm:text-base text-gray-800">Planes part time</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm sm:text-base text-gray-800">Planes full time</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm sm:text-base text-gray-800">3 Diferentes espacios para elegir</span>
              </div>
            </div>
          </div>
        </div>
            {/* Button Container */}
            <div className="flex justify-center mt-8">
                <button className="bg-[#fcc803] hover:bg-[#fbbf24] text-black font-black px-8 py-1 rounded-full flex items-center justify-center space-x-3 shadow-lg transition-colors">
                  <span className="text-lg font-black">Quiero información</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current text-black" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
       
      </div>
    </section>
  )
}

export default OurSpaces
