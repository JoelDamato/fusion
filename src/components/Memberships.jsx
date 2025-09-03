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
                  <div className="font-montserrat font-extrabold text-gray-900 text-lg sm:text-xl leading-tight uppercase tracking-[0.02em]">
                    {t.title}
                  </div>
                  <div className="font-montserrat text-gray-500 text-xs sm:text-sm tracking-[0.25em] uppercase">
                    {t.subtitle}
                  </div>
                </div>

                {/* Botones segmentados */}
                <div className="flex items-center gap-2">
                  <button
                    className="font-montserrat text-[12px] sm:text-sm font-extrabold uppercase tracking-[0.08em]
                               px-3 sm:px-4 py-2 bg-zinc-700 text-[#fcc803] shadow 
                               hover:bg-zinc-800 transition-colors rounded-[4px]"
                  >
                    FULL TIME
                  </button>
                  <button
                    className="font-montserrat text-[12px] sm:text-sm font-extrabold uppercase tracking-[0.08em]
                               px-3 sm:px-4 py-2 bg-[#fcc803] text-zinc-800 shadow 
                               hover:bg-[#f2c319] transition-colors rounded-[4px]"
                  >
                    PART TIME
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Columna derecha: blob + contenido */}
          <div className="relative overflow-hidden rounded-3xl lg:rounded-none">
            {/* Blob amarillo grande de fondo */}
            <div className="pointer-events-none absolute inset-0">
              <svg
                viewBox="0 0 600 520"
                className="w-[150%] h-full -translate-x-10 lg:-translate-x-6 -translate-y-6 scale-150 text-[#fcc803]"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M420 20c55 20 80 55 104 106 24 50 76 66 126 63 54-4 87 43 57 90-27 41-94 44-138 68-54 29-65 73-116 107-58 39-141 62-212 49-73-13-113-56-131-116-16-56 11-103 31-158 17-48 17-104 60-136 46-35 112-39 219-73z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Contenido sobre el blob */}
            <div className="relative z-10 px-6 lg:px-10 py-8 lg:py-12">
              {/* Bloque: OFICINA PRIVADA */}
              <div className="mb-10">
                <h3 className="font-montserrat font-extrabold text-zinc-900 text-lg sm:text-xl uppercase tracking-[0.04em]">
                  OFICINA PRIVADA BARROCO / GÓTICO
                </h3>
                <ul className="mt-2 space-y-1">
                  <li className="font-montserrat text-zinc-900/90 uppercase tracking-[0.35em] text-xs sm:text-sm">
                    CAPACIDAD HASTA 5 PERSONAS
                  </li>
                  <li className="font-montserrat text-zinc-900/90 uppercase tracking-[0.35em] text-xs sm:text-sm">
                    POR OFICINA
                  </li>
                  <li className="font-montserrat text-zinc-900/90 uppercase tracking-[0.35em] text-xs sm:text-sm">
                    CONSULTAR PRECIOS DISPONIBLES
                  </li>
                </ul>
              </div>

              {/* Bloque: SALA DE REUNIÓN */}
              <div>
                <h3 className="font-montserrat font-extrabold text-zinc-900 text-lg sm:text-xl uppercase tracking-[0.04em]">
                  SALA DE REUNIÓN
                </h3>
                <ul className="mt-2 space-y-1">
                  <li className="font-montserrat text-zinc-900/90 uppercase tracking-[0.35em] text-xs sm:text-sm">
                    ALQUILER POR HORA
                  </li>
                  <li className="font-montserrat text-zinc-900/90 uppercase tracking-[0.35em] text-xs sm:text-sm">
                    CAPACIDAD HASTA 10 PERSONAS
                  </li>
                  <li className="font-montserrat text-zinc-900/90 uppercase tracking-[0.35em] text-xs sm:text-sm">
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
