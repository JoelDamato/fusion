import React, { useState, useEffect, useRef } from 'react'

function Services() {
  const [visibleItems, setVisibleItems] = useState([])
  const itemRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleItems(prev => [...prev, index])
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el, index) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current[index] = el
    }
  }
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Mobiliario completo",
      description: "Tenemos el equipamiento necesario para que trabajes cómodamente."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Servicio de Limpieza",
      description: "Mantenemos un alto grado de compromiso con el orden y la limpieza del lugar."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Seguridad",
      description: "El coworking cuenta con sistema de vigilancia con cámaras y alarma."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Servicio Médico",
      description: "Contamos con servicio de emergencia para cualquier necesidad."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Lockers Personalizados",
      description: "Sumérgete en el mundo del arte y elegí tu locker preferido para guardar tus pertenencias."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Dirección Fiscal",
      description: "Usá nuestra dirección en Villa Allende como domicilio fiscal y legal."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      title: "Wi-Fi de alta velocidad",
      description: "Contamos con servicio de Wi-Fi corporativo con respaldo para evitar cortes o interrupciones."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Cápsula call",
      description: "Respondé y hablá con privacidad para esa llamada importante, entrá a la cápsula y evitá el ruido."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h1a1 1 0 011 1v3M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4m-4 0a2 2 0 104 0m-4 0a2 2 0 104 0" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
          <circle cx="12" cy="6" r="1" fill="currentColor" />
          <circle cx="8" cy="10" r="1" fill="currentColor" />
          <circle cx="16" cy="10" r="1" fill="currentColor" />
        </svg>
      ),
      title: "Kitchen",
      description: "Un espacio práctico para preparar tus infusiones y más."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Punto de Recepción",
      description: "Podés usar el Coworking para recibir tu correspondencia."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Chill Out",
      description: "No todo es trabajo, subí a la terraza de Fusion y relajate en tu break."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Recepción",
      description: "Durante todo el día tenemos recepción para brindar asistencia ante cualquier eventualidad."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      {/* Badge */}
      <div className="-ml-4 sm:-ml-4 lg:-ml-6 mt-3 sm:mt-0">
        <div className="inline-flex items-center bg-[#fcc803] rounded-full px-6 py-2">
          <div className="w-5 h-[2px] bg-black mr-3 ml-5" />
          <span className="font-montserrat text-black text-sm sm:text-base lg:text-lg font-medium tracking-wider">
            SERVICIOS
          </span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-5 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Comodidades que aumentan tu productividad</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vas a disfrutar de trabajar en un lugar distendido y con todos los servicios que necesitás.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={(el) => addToRefs(el, index)}
              data-index={index}
              className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-700 transform ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: visibleItems.includes(index) ? `${index * 100}ms` : '0ms'
              }}
            >
              <div className="flex items-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
