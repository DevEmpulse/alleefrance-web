export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-white relative -mt-5">
      <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-start justify-center pl-[650px] mt-96 lg:-mt-52 z-10">
            <img 
              src="/mapitafrancia.png" 
              alt="Mapa de Francia" 
              className="w-full max-w-xl lg:max-w-2xl h-auto"
            />
          </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 -mt-16">
            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: "#002654" }}>
              ¿QUÉ ES ALLÉE FRANCE?
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Allée France es tu socio de confianza en el proceso migratorio hacia Francia. Somos especialistas en
                trámites de visas, permisos de trabajo, reagrupación familiar y todos los servicios necesarios para
                hacer realidad tu sueño francés.
              </p>

              <p>
                Nuestro equipo de expertos te acompaña desde el primer paso hasta tu llegada a Francia, asegurando que
                cada documento esté en orden y que comprendas completamente el proceso.
              </p>

              <p>
                Con años de experiencia y cientos de casos exitosos, conocemos los requisitos exactos de cada tipo de
                visa y te guiamos para maximizar tus posibilidades de aprobación.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
