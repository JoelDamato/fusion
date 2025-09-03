import React, { useState, useEffect } from 'react'

function WorkspaceCards() {
  const [currentCard, setCurrentCard] = useState(1) // 0,1,2

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextCard = () => setCurrentCard((p) => (p + 1) % 3)
  const prevCard = () => setCurrentCard((p) => (p - 1 + 3) % 3)

  const cards = [
    {
      id: 0,
      title: 'Oficina Privadas',
      content: [
        'Nuestras oficinas privadas te ofrecen un espacio exclusivo y tranquilo para equipo o empresas',
        'Están equipadas con todo lo necesario para trabajar de manera eficiente y privada',
      ],
      features: ['Oficina Barroco', 'Oficina Gótico'],
    },
    {
      id: 1,
      title: 'Sala Pop Art',
      content: [
        'Un espacio de trabajo flexible para períodos cortos de tiempo.',
        'Trabajá a tu ritmo en un entorno inspirador que te va a permitir maximizar tu productividad.',
        'Desde la sala vas a disfrutar de una vista preciosa hacia las sierras.',
      ],
      features: [],
    },
    {
      id: 2,
      title: 'Sala de Reunión',
      content: [
        'Diseñada para facilitar las reuniones con eficiencia. Equipada con una mesa de conferencia, sillas cómodas y un TV de alta definición con conexión HDMI.',
        'Este entorno funcional brinda las herramientas necesarias para que tus reuniones sean productivas y exitosas',
      ],
      features: ['Capacidad hasta 10 personas'],
    },
  ]

  // estilos según posición relativa
  const getCardStyles = (index) => {
    if (index === currentCard) {
      // Centro (grande)
      return 'w-80 sm:w-96 lg:w-[30rem] h-64 sm:h-72 lg:h-80 scale-110 lg:scale-125 z-20 shadow-[0_0_45px_rgba(250,205,18,0.55)] opacity-100'
    }
    // Laterales (más chicas, derechas, sin blur)
    return 'w-56 sm:w-64 lg:w-72 h-48 sm:h-56 lg:h-64 scale-90 z-10 opacity-75'
  }

  // índice de la izquierda y derecha
  const leftIndex  = (currentCard - 1 + 3) % 3
  const rightIndex = (currentCard + 1) % 3

  return (
    <section className="pt-10 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Carrusel */}
        <div className="relative py-4">
          {/* Flechas */}
          <button
            onClick={prevCard}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextCard}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            aria-label="Siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Contenedor de cards */}
          <div className="flex justify-center items-center gap-4 lg:gap-8">
                         {/* Izquierda (clickeable) */}
             <div
               onClick={() => setCurrentCard(leftIndex)}
               className={`flex-shrink-0 bg-white border-2 border-[#facd12] rounded-xl p-3 sm:p-4 transition-all duration-500 ${getCardStyles(leftIndex)}`}
               role="button"
             >
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                {cards[leftIndex].title}
              </h3>
              <div className="space-y-1 text-gray-700">
                {cards[leftIndex].content.map((t, i) => (
                  <p key={i} className="text-xs sm:text-sm">{t}</p>
                ))}
                {cards[leftIndex].features.length > 0 && (
                  <div className="space-y-1 mt-2">
                    {cards[leftIndex].features.map((f, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#facd12] rounded-full mr-2"></div>
                        <span className="text-xs sm:text-sm font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

                         {/* Centro (grande) */}
             <div
               className={`flex-shrink-0 bg-white border-2 border-[#facd12] rounded-xl p-3 sm:p-4 transition-all duration-500 ${getCardStyles(currentCard)}`}
             >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
                {cards[currentCard].title}
              </h3>
              <div className="space-y-1 sm:space-y-2 text-gray-700">
                {cards[currentCard].content.map((t, i) => (
                  <p key={i} className="text-xs sm:text-sm">{t}</p>
                ))}
                {cards[currentCard].features.length > 0 && (
                  <div className="space-y-1 mt-2">
                    {cards[currentCard].features.map((f, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#facd12] rounded-full mr-2 sm:mr-3"></div>
                        <span className="text-xs sm:text-sm font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

                         {/* Derecha (clickeable) */}
             <div
               onClick={() => setCurrentCard(rightIndex)}
               className={`flex-shrink-0 bg-white border-2 border-[#facd12] rounded-xl p-3 sm:p-4 transition-all duration-500 ${getCardStyles(rightIndex)}`}
               role="button"
             >
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                {cards[rightIndex].title}
              </h3>
              <div className="space-y-1 text-gray-700">
                {cards[rightIndex].content.map((t, i) => (
                  <p key={i} className="text-xs sm:text-sm">{t}</p>
                ))}
                {cards[rightIndex].features.length > 0 && (
                  <div className="space-y-1 mt-2">
                    {cards[rightIndex].features.map((f, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#facd12] rounded-full mr-2"></div>
                        <span className="text-xs sm:text-sm font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
           {/* Dots (clickeables) */}
           <div className="flex justify-center mt-16">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => setCurrentCard(i)}
                className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                  currentCard === i ? 'bg-[#facd12] scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Ir a tarjeta ${i + 1}`}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-8">
            <button className="bg-[#fcc803] hover:bg-[#fbbf24] text-black font-black px-8 py-2 rounded-full flex items-center justify-center gap-3 shadow-lg transition-colors">
              <span className="text-base sm:text-lg font-black">Quiero información</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current text-black" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>

         
        </div>
      </div>
    </section>
  )
}

export default WorkspaceCards
