import React from 'react'

function Memberships() {
  const tiers = [
    { title: 'TRANQUI', subtitle: '1 VEZ POR SEMANA' },
    { title: 'NOS VEMOS 2 DÍAS', subtitle: '2 VECES POR SEMANA' },
    { title: 'VENÍS 3 A FUSIÓN', subtitle: '3 VECES POR SEMANA' },
    { title: 'VENÍS 4, RELAJÁS 1', subtitle: '4 VECES POR SEMANA' },
    { title: 'FULL WEEK', subtitle: '5 VECES POR SEMANA' },
  ]

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título alineado a la izquierda */}
        <h2 className="font-montserrat font-semibold text-3xl sm:text-4xl text-gray-900 mb-12 sm:mb-14 drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)] tracking-[0.01em] text-left">
          MEMBRESÍAS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Columna izquierda: lista de planes */}
          <div className="space-y-7 sm:space-y-8">
            {tiers.map((t, i) => (
              <div key={i} className="flex items-center justify-between">
                {/* título + subtítulo */}
                <div className="min-w-0">
                  <div className="font-montserrat font-extrabold text-gray-900 text-sm sm:text-xl leading-tight uppercase tracking-[0.02em]">
                    {t.title}
                  </div>
                  <div className="font-montserrat text-gray-500 text-[10px] sm:text-sm tracking-[0.25em] uppercase">
                    {t.subtitle}
                  </div>
                </div>

                {/* Botones segmentados */}
                <div className="flex items-center gap-1 sm:gap-2">
                  <button
                    className="font-montserrat text-[10px] sm:text-sm font-extrabold uppercase tracking-[0.08em]
                               px-2 sm:px-4 py-1 sm:py-2 bg-zinc-700 text-[#fcc803] shadow 
                               hover:bg-zinc-800 transition-colors rounded-[4px]"
                  >
                    FULL TIME
                  </button>
                  <button
                    className="font-montserrat text-[10px] sm:text-sm font-extrabold uppercase tracking-[0.08em]
                               px-2 sm:px-4 py-1 sm:py-2 bg-[#fcc803] text-zinc-800 shadow 
                               hover:bg-[#f2c319] transition-colors rounded-[4px]"
                  >
                    PART TIME
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Columna derecha: blob + contenido */}
          <div className="relative overflow-visible rounded-3xl lg:rounded-none lg:py-8 mt-8 sm:mt-0">
            {/* Imagen de mancha de fondo */}
            <div className="pointer-events-none absolute inset-0 overflow-visible">
              <img
                src="/images/mancha.png"
                alt="Mancha decorativa"
                className="w-full h-full object-contain scale-[1.8] lg:scale-[1.6] lg:-translate-x-6 lg:-translate-y-4"
                aria-hidden="true"
              />
            </div>

            {/* Contenido sobre el blob */}
            <div className="relative z-10 px-4 lg:px-8 lg:ml-8 py-6 lg:py-10 flex flex-col items-center justify-center h-full">
              {/* Bloque: OFICINA PRIVADA */}
              <div className="mb-3 sm:mb-6 text-center">
                <h3 className="font-montserrat font-extrabold text-zinc-900 text-[10px] sm:text-base lg:text-lg uppercase tracking-[0.02em]">
                  OFICINA PRIVADA BARROCO / GÓTICO
                </h3>
                <ul className="mt-1 sm:mt-2 space-y-0.5">
                  <li className="font-montserrat text-zinc-900/90 uppercase tracking-[0.1em] text-[7px] sm:text-[10px] lg:text-xs">
                    CAPACIDAD HASTA 5 PERSONAS
                  </li>
                  <li className="font-montserrat text-zinc-900/90 uppercase tracking-[0.1em] text-[7px] sm:text-[10px] lg:text-xs">
                    POR OFICINA
                  </li>
                  <li className="font-montserrat text-zinc-900/90 uppercase tracking-[0.1em] text-[7px] sm:text-[10px] lg:text-xs">
                    CONSULTAR PRECIOS DISPONIBLES
                  </li>
                </ul>
              </div>

              {/* Bloque: SALA DE REUNIÓN */}
              <div className="text-center">
                <h3 className="font-montserrat font-extrabold text-zinc-900 text-[10px] sm:text-base lg:text-lg uppercase tracking-[0.02em]">
                  SALA DE REUNIÓN
                </h3>
                <ul className="mt-1 sm:mt-2 space-y-0.5">
                  <li className="font-montserrat text-zinc-900/90 uppercase tracking-[0.1em] text-[7px] sm:text-[10px] lg:text-xs">
                    ALQUILER POR HORA
                  </li>
                  <li className="font-montserrat text-zinc-900/90 uppercase tracking-[0.1em] text-[7px] sm:text-[10px] lg:text-xs">
                    CAPACIDAD HASTA 10 PERSONAS
                  </li>
                  <li className="font-montserrat text-zinc-900/90 uppercase tracking-[0.1em] text-[7px] sm:text-[10px] lg:text-xs">
                    CONSULTAR PRECIOS Y PROMOS DISPONIBLES
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* fin columna derecha */}
        </div>
      </div>
    </section>
  )
}

export default Memberships
