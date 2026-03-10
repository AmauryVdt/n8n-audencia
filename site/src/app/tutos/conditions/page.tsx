"use client";

import TutoLayout from "@/components/TutoLayout";
import Section from "@/components/Section";
import Callout from "@/components/Callout";
import CodeBlock from "@/components/CodeBlock";
import Screenshot from "@/components/Screenshot";
import FlowDiagram from "@/components/FlowDiagram";
import Quiz from "@/components/Quiz";

const conditionsQuiz = [
  {
    question: "Combien de sorties a le bloc If ?",
    options: ["1", "2", "3", "Autant qu'on veut"],
    correctIndex: 1,
    explanation: "Le bloc If a exactement 2 sorties : une pour « vrai » et une pour « faux ».",
  },
  {
    question: "Quelle est la différence entre Filter et If ?",
    options: [
      "Filter a 2 sorties, If n'en a qu'une",
      "Il n'y a aucune différence",
      "Filter n'a qu'une sortie : il supprime les items qui ne passent pas",
      "Filter est plus rapide que If",
    ],
    correctIndex: 2,
    explanation: "Filter ne garde que les items qui passent la condition. Les autres sont simplement supprimés, il n'y a pas de sortie « faux ».",
  },
  {
    question: "Quel bloc choisir pour aiguiller les données vers 4 chemins différents ?",
    options: ["If", "Filter", "Switch", "Edit Fields"],
    correctIndex: 2,
    explanation: "Le Switch peut avoir autant de sorties que nécessaire, chacune avec sa propre condition. C'est le seul bloc de condition qui gère plus de 2 chemins.",
  },
  {
    question: "Avec AND, que faut-il pour que la condition soit vraie ?",
    options: [
      "Au moins une condition doit être vraie",
      "Toutes les conditions doivent être vraies",
      "Aucune condition ne doit être vraie",
      "La première condition suffit",
    ],
    correctIndex: 1,
    explanation: "AND (ET) nécessite que TOUTES les conditions soient vraies. Pour qu'au moins une suffise, on utilise OR (OU).",
  },
];

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "le-bloc-if", title: "1. Le bloc If" },
  { id: "le-bloc-filter", title: "2. Le bloc Filter" },
  { id: "le-bloc-switch", title: "3. Le bloc Switch" },
  { id: "if-vs-filter-vs-switch", title: "4. Lequel choisir ?" },
  { id: "quiz", title: "Quiz" },
  { id: "resume", title: "Résumé" },
];

export default function ConditionsPage() {
  return (
    <TutoLayout title="Conditions" sections={sections}>
      {/* Introduction */}
      <Section id="introduction" title="Introduction">
        <p>
          Les conditions permettent à votre workflow de <strong>prendre
          des décisions</strong>. En fonction des données, le flux peut prendre
          un chemin ou un autre.
        </p>
        <p>
          n8n propose 3 blocs de conditions, chacun avec un usage différent :
        </p>
        <ul className="ml-4 list-inside list-disc space-y-1">
          <li><strong>If</strong> : 2 sorties (vrai / faux)</li>
          <li><strong>Filter</strong> : 1 sortie (garde ou jette)</li>
          <li><strong>Switch</strong> : plusieurs sorties (aiguillage)</li>
        </ul>

        <Screenshot
          src="/screenshots/conditions-overview.png"
          alt="Vue d'ensemble du workflow de conditions avec les blocs If, Filter et Switch en parallèle"
          caption="Les 3 types de blocs de conditions dans n8n"
        />
      </Section>

      {/* If */}
      <Section id="le-bloc-if" title="1. Le bloc If">
        <p>
          Le bloc <strong>If</strong> évalue une condition et envoie les données
          vers deux sorties possibles :
        </p>

        <FlowDiagram
          title="Fonctionnement du bloc If"
          nodes={[
            { label: "Données", color: "blue" },
            { label: "If", color: "orange" },
            { label: "✅ Vrai", color: "green" },
          ]}
        />
        <p className="text-center text-sm text-muted">
          ↳ Si la condition est fausse → sortie <strong>❌ Faux</strong>
        </p>

        <CodeBlock title="Exemple de condition If">
{`// Condition : le texte est égal à "text" OU le nombre est > 0
Texte == "text"   →  OR  ←   Nombre > 0

// Si une des deux est vraie → sortie "true"
// Sinon → sortie "false"`}
        </CodeBlock>

        <Screenshot
          src="/screenshots/conditions-if.png"
          alt="Configuration du bloc If dans n8n avec conditions texte = 'text' OR nombre > 0"
          caption="Le bloc If avec deux conditions combinées en OR"
        />

        <Callout type="info">
          <p>
            On peut combiner plusieurs conditions avec <strong>AND</strong>{" "}
            (toutes doivent être vraies) ou <strong>OR</strong> (au moins une
            doit être vraie).
          </p>
        </Callout>

        <p>
          On peut aussi <strong>enchaîner</strong> les blocs If pour créer des
          conditions imbriquées :
        </p>
        <FlowDiagram
          title="Conditions imbriquées"
          nodes={[
            { label: "If 1", color: "orange" },
            { label: "If 2", color: "orange" },
            { label: "If 3", color: "orange" },
          ]}
        />
      </Section>

      {/* Filter */}
      <Section id="le-bloc-filter" title="2. Le bloc Filter">
        <p>
          Le bloc <strong>Filter</strong> est plus simple : il n&apos;a
          qu&apos;<strong>une seule sortie</strong>. Les données qui ne
          correspondent pas à la condition sont simplement supprimées.
        </p>

        <FlowDiagram
          title="Fonctionnement du bloc Filter"
          nodes={[
            { label: "5 items", color: "blue" },
            { label: "Filter: nombre < 50", color: "orange" },
            { label: "3 items", color: "green" },
          ]}
        />

        <Screenshot
          src="/screenshots/conditions-filter.png"
          alt="Configuration du bloc Filter dans n8n avec condition nombre < 50"
          caption="Le Filter garde uniquement les items qui passent la condition"
        />

        <Callout type="tip">
          <p>
            Utilisez <strong>Filter</strong> quand vous ne vous intéressez
            qu&apos;aux données qui passent la condition et que vous
            n&apos;avez rien à faire avec les autres.
          </p>
        </Callout>
      </Section>

      {/* Switch */}
      <Section id="le-bloc-switch" title="3. Le bloc Switch">
        <p>
          Le bloc <strong>Switch</strong> est comme un aiguillage : il peut
          avoir <strong>plusieurs sorties</strong>, chacune avec sa propre
          condition.
        </p>

        <FlowDiagram
          title="Fonctionnement du bloc Switch"
          nodes={[
            { label: "Données", color: "blue" },
            { label: "Switch", color: "orange" },
            { label: "Sortie 1 / 2 / 3...", color: "purple" },
          ]}
        />

        <CodeBlock title="Exemple de Switch">
{`// Sortie 1 : texte == "salut"      → Chemin "texte = salut"
// Sortie 2 : nombre > 50           → Chemin "nombre > 50"
// Sortie 3 : fallback (par défaut) → Chemin "autre"`}
        </CodeBlock>

        <Screenshot
          src="/screenshots/conditions-switch.png"
          alt="Configuration du bloc Switch dans n8n avec 2 conditions et un fallback"
          caption="Le Switch aiguille les données selon plusieurs conditions"
        />

        <Callout type="info">
          <p>
            Le Switch peut avoir une sortie <strong>fallback</strong>{" "}
            (par défaut) pour les données qui ne correspondent à aucune
            condition.
          </p>
        </Callout>
      </Section>

      {/* Comparison */}
      <Section id="if-vs-filter-vs-switch" title="4. Lequel choisir ?">
        <div className="overflow-x-auto">
          <table className="w-full rounded-lg border border-border text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b border-border px-4 py-3 text-left font-semibold">
                  Bloc
                </th>
                <th className="border-b border-border px-4 py-3 text-left font-semibold">
                  Sorties
                </th>
                <th className="border-b border-border px-4 py-3 text-left font-semibold">
                  Cas d&apos;usage
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-border px-4 py-3 font-medium">
                  If
                </td>
                <td className="border-b border-border px-4 py-3">
                  2 (vrai / faux)
                </td>
                <td className="border-b border-border px-4 py-3">
                  Faire quelque chose de différent si vrai ou faux
                </td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="border-b border-border px-4 py-3 font-medium">
                  Filter
                </td>
                <td className="border-b border-border px-4 py-3">
                  1 (passe ou pas)
                </td>
                <td className="border-b border-border px-4 py-3">
                  Garder uniquement certains items
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Switch</td>
                <td className="px-4 py-3">Plusieurs</td>
                <td className="px-4 py-3">
                  Aiguiller vers différents chemins selon la valeur
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Quiz */}
      <Section id="quiz" title="Quiz - Testez vos connaissances">
        <Quiz title="Conditions" questions={conditionsQuiz} />
      </Section>

      {/* Résumé */}
      <Section id="resume" title="Résumé">
        <div className="rounded-xl border-2 border-primary bg-primary-light p-6">
          <ul className="space-y-2">
            <li>
              <strong>If</strong> = question oui/non avec 2 chemins possibles
            </li>
            <li>
              <strong>Filter</strong> = filtre qui ne garde que ce qui passe
            </li>
            <li>
              <strong>Switch</strong> = aiguillage avec plusieurs directions
            </li>
            <li>
              On peut combiner les conditions avec <strong>AND</strong> et{" "}
              <strong>OR</strong>
            </li>
            <li>
              On peut <strong>enchaîner</strong> les blocs de condition pour des
              logiques complexes
            </li>
          </ul>
        </div>
      </Section>
    </TutoLayout>
  );
}
