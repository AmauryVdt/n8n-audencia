import Link from "next/link";
import Navbar from "@/components/Navbar";

const tutos = [
  {
    href: "/tutos/variables",
    title: "Variables & Mapping",
    description:
      "Comprendre les variables, les types de données, le flux de données entre les blocs et les expressions.",
    icon: "📦",
    color: "bg-violet-50 border-violet-200 hover:border-violet-400",
  },
  {
    href: "/tutos/conditions",
    title: "Conditions",
    description:
      "Utiliser If, Filter et Switch pour diriger le flux de données selon des conditions.",
    icon: "🔀",
    color: "bg-orange-50 border-orange-200 hover:border-orange-400",
  },
  {
    href: "/tutos/boucles",
    title: "Boucles",
    description:
      "Répéter des actions automatiquement avec des boucles et des compteurs.",
    icon: "🔄",
    color: "bg-emerald-50 border-emerald-200 hover:border-emerald-400",
  },
  {
    href: "/tutos/credentials-google",
    title: "Credentials Google",
    description:
      "Connecter n8n aux services Google (Drive, Gmail, Calendar, Docs, Sheets) via OAuth.",
    icon: "🔑",
    color: "bg-blue-50 border-blue-200 hover:border-blue-400",
  },
  {
    href: "/tutos/credentials-gemini",
    title: "Credentials Gemini",
    description:
      "Obtenir une clé API Gemini pour utiliser l'IA de Google dans vos workflows n8n.",
    icon: "🤖",
    color: "bg-amber-50 border-amber-200 hover:border-amber-400",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Introduction à l&apos;IA
          <br />
          <span className="text-primary">professionnelle</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Apprenez à automatiser des processus métiers et à intégrer
          l&apos;intelligence artificielle dans vos workflows avec{" "}
          <strong>n8n</strong>.
        </p>
      </div>

      {/* Tutorials grid */}
      <div className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted">
          Tutoriels
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tutos.map((tuto) => (
            <Link key={tuto.href} href={tuto.href}>
              <div
                className={`rounded-xl border-2 p-6 transition-all ${tuto.color}`}
              >
                <span className="text-3xl">{tuto.icon}</span>
                <h3 className="mt-3 text-lg font-semibold">{tuto.title}</h3>
                <p className="mt-1 text-sm text-muted">{tuto.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
