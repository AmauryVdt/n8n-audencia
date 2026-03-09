"use client";

import TutoLayout from "@/components/TutoLayout";
import Section from "@/components/Section";
import Callout from "@/components/Callout";
import CodeBlock from "@/components/CodeBlock";
import Screenshot from "@/components/Screenshot";
import FlowDiagram from "@/components/FlowDiagram";

const sections = [
  { id: "quest-ce-quune-boucle", title: "1. Qu'est-ce qu'une boucle ?" },
  { id: "construire-une-boucle", title: "2. Construire une boucle" },
  { id: "etape-par-etape", title: "3. Étape par étape" },
  { id: "quand-utiliser", title: "4. Quand utiliser une boucle ?" },
  { id: "resume", title: "Résumé" },
];

export default function BouclesPage() {
  return (
    <TutoLayout title="Boucles" sections={sections}>
      {/* Section 1 */}
      <Section id="quest-ce-quune-boucle" title="1. Qu'est-ce qu'une boucle ?">
        <p>
          Une <strong>boucle</strong> est un mécanisme qui permet de{" "}
          <strong>répéter une action</strong> tant qu&apos;une condition
          n&apos;est pas remplie.
        </p>
        <p>
          Exemple concret : &quot;Envoyer un rappel toutes les heures
          jusqu&apos;à ce que le client réponde.&quot;
        </p>

        <Callout type="info">
          <p>
            Une boucle a toujours 3 éléments : un <strong>compteur</strong>{" "}
            (où on en est), une <strong>action</strong> (ce qu&apos;on répète)
            et une <strong>condition d&apos;arrêt</strong> (quand on s&apos;arrête).
          </p>
        </Callout>
      </Section>

      {/* Section 2 */}
      <Section id="construire-une-boucle" title="2. Construire une boucle dans n8n">
        <p>
          Dans n8n, il n&apos;y a pas de bloc &quot;boucle&quot; dédié. On la
          construit manuellement en combinant plusieurs blocs :
        </p>

        <FlowDiagram
          title="Structure d'une boucle dans n8n"
          nodes={[
            { label: "Compteur = 0", color: "blue" },
            { label: "Wait", color: "gray" },
            { label: "Compteur + 1", color: "purple" },
            { label: "If < 100 ?", color: "orange" },
          ]}
        />
        <p className="text-center text-sm text-muted">
          ↳ Si faux → retour au <strong>Wait</strong> (la boucle continue)
          <br />
          ↳ Si vrai → <strong>fin</strong> (le compteur a atteint 100)
        </p>

        <Screenshot
          src="/screenshots/placeholder"
          alt="Workflow complet de la boucle dans n8n : Trigger → Compteur → Wait → Compteur+1 → If → retour au Wait ou fin"
          caption="Une boucle dans n8n : le bloc If renvoie vers Wait pour continuer"
        />
      </Section>

      {/* Section 3 */}
      <Section id="etape-par-etape" title="3. Étape par étape">
        <h3 className="text-lg font-semibold">Étape 1 : Initialiser le compteur</h3>
        <p>
          On crée une variable <code>compteur</code> avec la valeur{" "}
          <code>0</code> grâce à un bloc <code>Edit Fields</code>.
        </p>
        <CodeBlock title="Bloc 'Compteur'">
{`compteur = 0    // Type: Number`}
        </CodeBlock>

        <h3 className="mt-6 text-lg font-semibold">Étape 2 : Attendre</h3>
        <p>
          Le bloc <strong>Wait</strong> met en pause le workflow pendant un temps
          défini (ici 0,1 seconde). Cela évite de surcharger le système.
        </p>

        <h3 className="mt-6 text-lg font-semibold">Étape 3 : Incrémenter le compteur</h3>
        <p>
          On augmente le compteur de 1 à chaque passage dans la boucle.
        </p>
        <CodeBlock title="Bloc 'Compteur + 1'">
{`compteur = {{ $json.compteur + 1 }}`}
        </CodeBlock>

        <h3 className="mt-6 text-lg font-semibold">Étape 4 : Vérifier la condition</h3>
        <p>
          Le bloc <strong>If</strong> vérifie si le compteur a atteint 100 :
        </p>
        <CodeBlock title="Condition du bloc If">
{`// Si compteur >= 100 → sortie "Vrai" → FIN
// Sinon → sortie "Faux" → retour au Wait`}
        </CodeBlock>

        <Callout type="warning">
          <p>
            N&apos;oubliez pas le bloc <strong>Wait</strong> ! Sans lui, la
            boucle tourne trop vite et peut bloquer votre instance n8n.
          </p>
        </Callout>
      </Section>

      {/* Section 4 */}
      <Section id="quand-utiliser" title="4. Quand utiliser une boucle ?">
        <p>
          Cas d&apos;usage courants pour les boucles :
        </p>
        <ul className="ml-4 list-inside list-disc space-y-2">
          <li>
            <strong>Polling</strong> : vérifier régulièrement si une condition
            est remplie (ex: un fichier est apparu, un statut a changé)
          </li>
          <li>
            <strong>Retry</strong> : réessayer une action qui a échoué (ex:
            appel API qui timeout)
          </li>
          <li>
            <strong>Pagination</strong> : récupérer des données page par page
            depuis une API
          </li>
          <li>
            <strong>Traitement par lots</strong> : traiter un grand nombre
            d&apos;items progressivement
          </li>
        </ul>

        <Callout type="tip">
          <p>
            Dans la plupart des cas, n8n gère automatiquement les boucles sur
            les items (chaque item passe dans le bloc suivant). Les boucles
            manuelles sont utiles pour des logiques plus complexes.
          </p>
        </Callout>
      </Section>

      {/* Résumé */}
      <Section id="resume" title="Résumé">
        <div className="rounded-xl border-2 border-primary bg-primary-light p-6">
          <ul className="space-y-2">
            <li>
              Une boucle = <strong>compteur</strong> +{" "}
              <strong>action répétée</strong> + <strong>condition d&apos;arrêt</strong>
            </li>
            <li>
              Dans n8n, on construit les boucles avec{" "}
              <strong>Edit Fields + Wait + If</strong>
            </li>
            <li>
              Le bloc <strong>If</strong> renvoie vers un bloc précédent pour
              créer la boucle
            </li>
            <li>
              Toujours ajouter un <strong>Wait</strong> pour éviter les boucles
              infinies trop rapides
            </li>
          </ul>
        </div>
      </Section>
    </TutoLayout>
  );
}
