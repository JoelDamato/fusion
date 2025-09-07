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
              <iframe
                src="https://fast.wistia.net/embed/iframe/whrhdbcqn3"
                title="Fusion Coworking Video"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full rounded-[1.75rem]"
                style={{ border: 'none' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyFusionVideo
