"use client";

import TutoLayout from "@/components/TutoLayout";
import Section from "@/components/Section";
import Callout from "@/components/Callout";
import CodeBlock from "@/components/CodeBlock";
import Screenshot from "@/components/Screenshot";
import FlowDiagram from "@/components/FlowDiagram";

const sections = [
  { id: "quest-ce-quune-variable", title: "1. Qu'est-ce qu'une variable ?" },
  { id: "types-de-donnees", title: "2. Les types de données" },
  { id: "flux-de-donnees", title: "3. Le flux de données" },
  { id: "connecter-deux-blocs", title: "4. Connecter deux blocs" },
  { id: "ordre-des-blocs", title: "5. L'ordre des blocs" },
  { id: "manipuler-les-variables", title: "6. Manipuler les variables" },
  { id: "resume", title: "Résumé" },
];

export default function VariablesPage() {
  return (
    <TutoLayout title="Variables & Mapping" sections={sections}>
      {/* Section 1 */}
      <Section id="quest-ce-quune-variable" title="1. Qu'est-ce qu'une variable ?">
        <p>
          Une <strong>variable</strong> est un conteneur qui stocke une
          information. Dans n8n, chaque bloc manipule des variables : il en
          reçoit en <strong>entrée</strong> (input) et en produit en{" "}
          <strong>sortie</strong> (output).
        </p>
        <p>
          Pour créer ou modifier des variables, on utilise le bloc{" "}
          <code>Edit Fields (Set)</code>. C&apos;est le bloc le plus utilisé
          dans n8n.
        </p>
        <Screenshot
          src="/screenshots/placeholder"
          alt="Bloc Edit Fields (Set) dans n8n avec plusieurs variables créées"
          caption="Le bloc Edit Fields permet de créer et modifier des variables"
        />
        <Callout type="info">
          <p>
            Pensez à une variable comme une <strong>étiquette</strong> collée
            sur une boîte. L&apos;étiquette est le <em>nom</em> de la variable,
            et le contenu de la boîte est sa <em>valeur</em>.
          </p>
        </Callout>
      </Section>

      {/* Section 2 */}
      <Section id="types-de-donnees" title="2. Les types de données">
        <p>
          Les variables peuvent contenir différents types de données. Voici les
          principaux :
        </p>

        <div className="overflow-x-auto">
          <table className="w-full rounded-lg border border-border text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b border-border px-4 py-3 text-left font-semibold">
                  Type
                </th>
                <th className="border-b border-border px-4 py-3 text-left font-semibold">
                  Description
                </th>
                <th className="border-b border-border px-4 py-3 text-left font-semibold">
                  Exemple
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-border px-4 py-3">
                  <code>String</code>
                </td>
                <td className="border-b border-border px-4 py-3">Texte</td>
                <td className="border-b border-border px-4 py-3">
                  <code>&quot;Bonjour&quot;</code>
                </td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="border-b border-border px-4 py-3">
                  <code>Number</code>
                </td>
                <td className="border-b border-border px-4 py-3">Nombre</td>
                <td className="border-b border-border px-4 py-3">
                  <code>42</code>
                </td>
              </tr>
              <tr>
                <td className="border-b border-border px-4 py-3">
                  <code>Boolean</code>
                </td>
                <td className="border-b border-border px-4 py-3">
                  Vrai ou Faux
                </td>
                <td className="border-b border-border px-4 py-3">
                  <code>true</code> / <code>false</code>
                </td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="border-b border-border px-4 py-3">
                  <code>Array</code>
                </td>
                <td className="border-b border-border px-4 py-3">
                  Tableau (liste)
                </td>
                <td className="border-b border-border px-4 py-3">
                  <code>[&quot;Antoine&quot;, &quot;Denis&quot;]</code>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code>Object</code>
                </td>
                <td className="px-4 py-3">
                  Dictionnaire (clé → valeur)
                </td>
                <td className="px-4 py-3">
                  <code>{`{"name": "Antoine", "age": 25}`}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock title="Exemple en JSON (le format de données de n8n)">
{`{
  "prenom": "Antoine",        // String (texte)
  "age": 25,                  // Number (nombre)
  "estEtudiant": true,        // Boolean (vrai/faux)
  "cours": ["IA", "Marketing"], // Array (tableau)
  "adresse": {                // Object (dictionnaire)
    "ville": "Nantes",
    "cp": 44000
  }
}`}
        </CodeBlock>

        <Screenshot
          src="/screenshots/placeholder"
          alt="Bloc Edit Fields montrant les différents types de variables : String, Number, Boolean, Array, Object"
          caption="Les différents types de variables dans un bloc Edit Fields"
        />

        <Callout type="info">
          <p>
            Le format <strong>JSON</strong> est le format universel utilisé par
            n8n pour stocker les données. Toutes les variables passent d&apos;un
            bloc à l&apos;autre en JSON.
          </p>
        </Callout>
      </Section>

      {/* Section 3 */}
      <Section id="flux-de-donnees" title="3. Le flux de données">
        <p>
          Dans n8n, les données circulent de bloc en bloc en suivant les
          flèches. Chaque bloc reçoit des données en <strong>input</strong> et
          en produit en <strong>output</strong>.
        </p>

        <FlowDiagram
          title="Exemple : flux de données simple"
          nodes={[
            { label: "Trigger", color: "green" },
            { label: "Initialiser", color: "blue" },
            { label: "Modifier", color: "purple" },
          ]}
        />

        <p>On peut effectuer 4 opérations sur les variables :</p>
        <ul className="ml-4 list-inside list-disc space-y-1">
          <li>
            <strong>Initialiser</strong> : créer une nouvelle variable
          </li>
          <li>
            <strong>Modifier</strong> : changer la valeur d&apos;une variable
            existante
          </li>
          <li>
            <strong>Ajouter</strong> : ajouter un champ tout en gardant les
            précédents
          </li>
          <li>
            <strong>Remplacer</strong> : écraser les champs précédents avec un
            nouveau
          </li>
        </ul>

        <Screenshot
          src="/screenshots/placeholder"
          alt="Workflow n8n montrant le flux de données : Trigger → Initialiser → Modifier avec les branches"
          caption="Le flux de données suit les flèches entre les blocs"
        />

        <Callout type="warning">
          <p>
            Les <strong>branches sont indépendantes</strong>. Si vous créez deux
            sorties depuis un bloc, chaque branche a sa propre copie des
            données. Si vous fusionnez deux branches, vous obtenez{" "}
            <strong>2 items</strong> séparés.
          </p>
        </Callout>
      </Section>

      {/* Section 4 */}
      <Section id="connecter-deux-blocs" title="4. Connecter deux blocs">
        <p>
          Pour utiliser la valeur d&apos;une variable d&apos;un bloc précédent,
          il faut passer en <strong>mode Expression</strong> (icône{" "}
          <code>=</code>) au lieu du mode fixe.
        </p>

        <Screenshot
          src="/screenshots/placeholder"
          alt="Champ en mode Expression dans n8n avec le bouton '=' activé"
          caption="Le bouton '=' active le mode Expression"
        />

        <p>Il y a 3 façons d&apos;accéder à une variable :</p>

        <div className="overflow-x-auto">
          <table className="w-full rounded-lg border border-border text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b border-border px-4 py-3 text-left font-semibold">
                  Syntaxe
                </th>
                <th className="border-b border-border px-4 py-3 text-left font-semibold">
                  Signification
                </th>
                <th className="border-b border-border px-4 py-3 text-left font-semibold">
                  Quand l&apos;utiliser
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-border px-4 py-3">
                  <code>{`{{ $json.prenom }}`}</code>
                </td>
                <td className="border-b border-border px-4 py-3">
                  Variable du bloc <em>juste avant</em>
                </td>
                <td className="border-b border-border px-4 py-3">
                  Le plus courant
                </td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="border-b border-border px-4 py-3">
                  <code>{`{{ $input.item.json.prenom }}`}</code>
                </td>
                <td className="border-b border-border px-4 py-3">
                  Même chose, écriture complète
                </td>
                <td className="border-b border-border px-4 py-3">
                  Plus explicite
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code>{`{{ $('Nom du bloc').item.json.prenom }}`}</code>
                </td>
                <td className="px-4 py-3">
                  Variable d&apos;un bloc <em>spécifique</em>
                </td>
                <td className="px-4 py-3">
                  Quand le bloc n&apos;est pas juste avant
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock title="Exemple : créer un message de bienvenue">
{`// Dans un bloc Edit Fields en mode Expression :
Bonjour {{ $json.prenom }}

// Si prenom = "Michel", le résultat sera :
// "Bonjour Michel"`}
        </CodeBlock>

        <Callout type="tip">
          <p>
            Utilisez <code>{`$('Nom du bloc')`}</code> quand vous avez besoin
            d&apos;une variable qui vient d&apos;un bloc qui n&apos;est pas
            directement connecté avant.
          </p>
        </Callout>
      </Section>

      {/* Section 5 */}
      <Section id="ordre-des-blocs" title="5. L'ordre des blocs est important">
        <p>
          L&apos;ordre dans lequel les blocs sont connectés détermine quelles
          variables sont disponibles. Un bloc ne peut accéder qu&apos;aux
          variables des blocs <strong>qui s&apos;exécutent avant lui</strong>.
        </p>

        <FlowDiagram
          title="✅ Correct : on accède aux données de 'Prénom' depuis 'Bonjour'"
          nodes={[
            { label: "Prénom", color: "blue" },
            { label: "Bonjour", color: "purple" },
            { label: "Bonjour Prénom", color: "green" },
          ]}
        />

        <CodeBlock title="Dans le bloc 'Bonjour Prénom'">
{`// ✅ Fonctionne : $json accède au bloc juste avant ("Bonjour")
{{ $json.salutation }}

// ✅ Fonctionne : on accède au bloc "Prénom" par son nom
{{ $('Prénom').item.json.prenom }}

// ❌ Ne fonctionne PAS : $json.prenom n'existe pas dans "Bonjour"
{{ $json.prenom }}`}
        </CodeBlock>

        <Screenshot
          src="/screenshots/placeholder"
          alt="Workflow montrant l'ordre Prénom → Bonjour → Bonjour Prénom avec les données disponibles à chaque étape"
          caption="L'ordre des blocs détermine les variables accessibles"
        />

        <Callout type="warning">
          <p>
            C&apos;est une <strong>source d&apos;erreur fréquente</strong>.
            Si vous obtenez <code>undefined</code>, vérifiez que vous accédez
            bien au bon bloc avec la bonne syntaxe.
          </p>
        </Callout>
      </Section>

      {/* Section 6 */}
      <Section id="manipuler-les-variables" title="6. Manipuler les variables">
        <p>
          n8n utilise du <strong>JavaScript</strong> en arrière-plan, ce qui
          permet d&apos;effectuer des opérations sur les variables directement
          dans les expressions.
        </p>

        <h3 className="mt-6 text-lg font-semibold">Opérations sur les nombres</h3>
        <CodeBlock title="Exemples d'opérations mathématiques">
{`// Addition
{{ $json.nombre + 10 }}      // 10 + 10 = 20

// Multiplication
{{ $json.nombre * 10 }}      // 10 * 10 = 100`}
        </CodeBlock>

        <h3 className="mt-6 text-lg font-semibold">Opérations sur le texte</h3>
        <CodeBlock title="Exemples d'opérations sur les textes">
{`// Mettre en majuscules
{{ $json.texte.toUpperCase() }}   // "text" → "TEXT"

// Mettre en minuscules
{{ $json.texte.toLowerCase() }}   // "TEXT" → "text"`}
        </CodeBlock>

        <h3 className="mt-6 text-lg font-semibold">Opérations sur les booléens</h3>
        <CodeBlock title="Exemples avec les booléens">
{`// Inverser un booléen
{{ !$json.actif }}              // true → false

// Condition ternaire (si/sinon)
{{ $json.age > 18 ? "Majeur" : "Mineur" }}`}
        </CodeBlock>

        <h3 className="mt-6 text-lg font-semibold">Opérations avancées</h3>
        <CodeBlock title="Combinaison de conditions">
{`// Condition complexe avec $if()
{{ $if($json.actif && $json.nombre > 5, $json.nombre * 2, $json.texte.length * 3) }}`}
        </CodeBlock>

        <Callout type="warning" title="Piège courant">
          <p>
            Attention à ne pas mélanger texte et expression. Si vous écrivez :
          </p>
          <p className="mt-2">
            <code>{`{{ $json.nombre }} + {{ $json.nombre }}`}</code>
          </p>
          <p className="mt-1">
            Vous obtenez <code>&quot;10 + 10&quot;</code> (du texte !), pas{" "}
            <code>20</code>. Pour faire un calcul, tout doit être{" "}
            <strong>dans la même expression</strong> :{" "}
            <code>{`{{ $json.nombre + $json.nombre }}`}</code>
          </p>
        </Callout>
      </Section>

      {/* Résumé */}
      <Section id="resume" title="Résumé">
        <div className="rounded-xl border-2 border-primary bg-primary-light p-6">
          <ul className="space-y-2">
            <li>
              Les <strong>variables</strong> sont la base de la donnée dans n8n
            </li>
            <li>
              Elles peuvent être des <strong>nombres</strong>, des{" "}
              <strong>textes</strong>, des <strong>booléens</strong>,
              des <strong>tableaux</strong> ou des <strong>objets</strong>
            </li>
            <li>
              Chaque bloc prend des variables en <strong>input</strong> et en
              sort d&apos;autres en <strong>output</strong>
            </li>
            <li>
              On les appelle principalement <code>{`$json.nom`}</code> ou{" "}
              <code>{`$('Source').item.json.nom`}</code>
            </li>
            <li>
              On peut effectuer toute sorte d&apos;<strong>opérations</strong>{" "}
              sur ces variables grâce à JavaScript
            </li>
          </ul>
        </div>
      </Section>
    </TutoLayout>
  );
}
