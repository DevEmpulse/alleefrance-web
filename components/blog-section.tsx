import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BlogSection() {
  const blogPosts = [
    {
      title: "Visa Saisonier o Salarié: Guía Completa 2024",
      excerpt:
        "Checklist de requisitos, cronograma y tips para conseguir un contrato temporal sin rechazos en el consulado.",
      date: "15 Mar 2024",
      readTime: "9 min",
      image: "/seasonal-worker-in-french-vineyard.jpg",
      slug: "visa-saisonier-salarie",
    },
    {
      title: "Working Holiday Francia: Checklist para Argentinos 2024",
      excerpt:
        "Documentos, presupuesto y plan de llegada para aprovechar los cupos Working Holiday sin contratiempos.",
      date: "8 Mar 2024",
      readTime: "8 min",
      image: "/happy-travelers-in-france.jpg",
      slug: "working-holiday-francia",
    },
    {
      title: "Visa de Estudiante: Admisión, Campus France y Consulado",
      excerpt:
        "Roadmap para armar tu dossier, financiarte y activar tu visa VLS-TS Étudiant al llegar a Francia.",
      date: "1 Mar 2024",
      readTime: "10 min",
      image: "/student-studying-in-paris.jpg",
      slug: "visa-estudiante-francia",
    },
    {
      title: "Aprender Francés: Recursos y Métodos para Progresar Rápido",
      excerpt:
        "Plan de 9 meses combinando apps, clases e inmersión para lograr el nivel B1/B2 que exigen las visas.",
      date: "22 Feb 2024",
      readTime: "7 min",
      image: "/person-learning-french-language.jpg",
      slug: "aprender-frances-recursos",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#002654" }}>
            BLOG
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`} className="block group">
              <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                    {post.date} · {post.readTime}
                  </p>
                  <h3 className="text-lg font-bold mb-3 line-clamp-2" style={{ color: "#002654" }}>
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <span className="text-sm font-semibold flex items-center gap-2" style={{ color: "#ED2939" }}>
                    Leer más
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="font-semibold tracking-wide text-base px-8 py-6 rounded-lg border-2 bg-transparent"
            style={{ borderColor: "#002654", color: "#002654" }}
            asChild
          >
            <Link href="/blog">VER TODOS LOS ARTÍCULOS</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
