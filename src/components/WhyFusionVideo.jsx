import React from 'react'

function WhyFusionVideo() {
  return (
    <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 bg-[#edebeb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          {/* Video Centered */}
          <div className="relative w-full max-w-[48rem] lg:max-w-[64rem] z-40">
            <div className="h-64 sm:h-80 lg:h-[28rem] bg-gray-200 rounded-[1.75rem] overflow-hidden shadow-lg">
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
