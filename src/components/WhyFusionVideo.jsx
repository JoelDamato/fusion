import React from 'react'

function WhyFusionVideo() {
  return (
    <section className="pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 bg-[#edebeb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Text */}
          <div className="order-2 lg:order-1">
            <h2
              className="
                font-montserrat font-medium text-black
                text-center lg:text-center
                leading-[1.15]
                text-2xl sm:text-3xl lg:text-4xl
                max-w-[22ch] sm:max-w-[24ch] mx-auto
                drop-shadow-[0_3px_8px_rgba(0,0,0,0.35)]
              "
            >
              <span className="block">Por fin lo que</span>
              <span className="block">estabas</span>
              <span className="block">buscando, un</span>
              <span className="block">coworking</span>
              <span className="block">tranquilo, sin</span>
              <span className="block">distracciones y</span>
              <span className="block">con mucho lugar</span>
              <span className="block">para estacionar</span>
            </h2>
          </div>
          
          {/* Right Video */}
          <div className="relative w-full max-w-[48rem] order-1 lg:order-2 justify-self-center">
            <div className="h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-[1.75rem] overflow-hidden shadow-lg">
              {/* Placeholder (reemplazá por tu video cuando lo tengas) */}
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100" />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-gray-700 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/*
              <video 
                className="w-full h-full object-cover rounded-[1.75rem]"
                controls
                poster="/images/video-poster.jpg"
              >
                <source src="/videos/fusion-coworking.mp4" type="video/mp4" />
                Tu navegador no soporta videos.
              </video>
              */}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyFusionVideo
