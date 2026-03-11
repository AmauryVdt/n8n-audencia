"use client";

import Link from "next/link";
import TutoLayout from "@/components/TutoLayout";
import Section from "@/components/Section";
import Callout from "@/components/Callout";
import Screenshot from "@/components/Screenshot";
import FlowDiagram from "@/components/FlowDiagram";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "prerequis", title: "2. Prérequis" },
  { id: "creer-cle-api", title: "3. Créer une clé API Gemini" },
  { id: "configurer-n8n", title: "4. Configurer n8n avec Gemini" },
  { id: "resume", title: "Résumé" },
];

export default function CredentialsGeminiPage() {
  return (
    <TutoLayout title="Credentials Gemini" sections={sections}>
      {/* Section 1 */}
      <Section id="introduction" title="1. Introduction">
        <p>
          <strong>Gemini</strong> est le modèle d&apos;intelligence artificielle
          de Google. En le connectant à n8n, vous pouvez utiliser l&apos;IA
          directement dans vos workflows d&apos;automatisation.
        </p>
        <p>Voici quelques exemples de ce que Gemini peut faire dans n8n :</p>
        <ul className="ml-4 list-inside list-disc space-y-1">
          <li>
            <strong>Résumer des emails</strong> automatiquement
          </li>
          <li>
            <strong>Rédiger des emails</strong> ou des réponses
          </li>
          <li>
            <strong>Transcrire des fichiers audio</strong>
          </li>
          <li>
            <strong>Analyser des documents</strong> (PDF, Word, Excel)
          </li>
          <li>
            <strong>Générer du contenu</strong> (articles, résumés, descriptions)
          </li>
        </ul>

        <FlowDiagram
          title="Les étapes pour connecter Gemini à n8n"
          nodes={[
            { label: "Clé API Gemini", color: "orange" },
            { label: "Credential n8n", color: "blue" },
            { label: "Utiliser l'IA", color: "green" },
          ]}
        />

        <Callout type="info">
          <p>
            Gemini est <strong>gratuit</strong> pour un usage
            personnel/éducatif avec des limites généreuses. Parfait pour vos
            projets à Audencia !
          </p>
        </Callout>
      </Section>

      {/* Section 2 */}
      <Section id="prerequis" title="2. Prérequis">
        <p>
          Avant de commencer, vous devez avoir{" "}
          <strong>un projet Google Cloud déjà créé</strong>. Si ce n&apos;est
          pas encore fait, suivez d&apos;abord le tutoriel précédent :
        </p>

        <div className="my-4">
          <Link
            href="/tutos/credentials-google"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-200 bg-blue-50 px-4 py-3 font-medium text-blue-700 transition-colors hover:border-blue-400 hover:bg-blue-100"
          >
            <span className="text-xl">🔑</span>
            Voir le tutoriel : Credentials Google
          </Link>
        </div>

        <Callout type="warning">
          <p>
            Vous avez besoin du <strong>projet Google Cloud</strong> créé dans
            le tutoriel Credentials Google. Si vous ne l&apos;avez pas encore
            fait, commencez par là avant de continuer ici.
          </p>
        </Callout>
      </Section>

      {/* Section 3 */}
      <Section id="creer-cle-api" title="3. Créer une clé API Gemini">
        <p>
          Une <strong>clé API</strong> est comme un{" "}
          <strong>badge d&apos;accès</strong> qui permet à n8n d&apos;utiliser
          Gemini. On va la créer sur Google AI Studio.
        </p>

        <h3 className="mt-6 text-lg font-semibold">
          Étape 1 : Accéder à Google AI Studio
        </h3>
        <p>
          Ouvrez votre navigateur et allez sur{" "}
          <code>aistudio.google.com/apikey</code>.
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-gemini-aistudio.png"
          alt="Page d'accueil de Google AI Studio avec la section API Keys"
          caption="La page Google AI Studio pour gérer vos clés API"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 2 : Créer une clé
        </h3>
        <p>
          Cliquez sur le bouton{" "}
          <strong>&quot;Créer une clé API&quot;</strong> (ou &quot;Create API
          Key&quot;).
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-gemini-create-key.png"
          alt="Bouton 'Créer une clé API' sur Google AI Studio"
          caption="Cliquez sur 'Créer une clé API'"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 3 : Importer votre projet
        </h3>
        <p>
          Cliquez sur{" "}
          <strong>&quot;Importer un projet existant&quot;</strong> (ou
          &quot;Import existing project&quot;).
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-gemini-import-project.png"
          alt="Option 'Importer un projet existant' dans la fenêtre de création"
          caption="Choisissez d'importer un projet existant"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 4 : Sélectionner votre projet Google Cloud
        </h3>
        <p>
          Sélectionnez le projet que vous avez créé dans le tutoriel précédent
          (par exemple <code>n8n-audencia</code>).
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-gemini-select-project.png"
          alt="Liste des projets Google Cloud avec 'n8n-audencia' sélectionné"
          caption="Sélectionnez votre projet Google Cloud"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 5 : Copier la clé API
        </h3>
        <p>
          La clé API est générée. <strong>Copiez-la</strong> en cliquant sur
          l&apos;icône de copie ou en la sélectionnant manuellement.
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-gemini-copy-key.png"
          alt="Clé API générée avec le bouton de copie"
          caption="Copiez votre clé API — vous en aurez besoin dans n8n"
        />

        <Callout type="warning">
          <p>
            Gardez cette clé API <strong>secrète</strong>. Toute personne qui
            possède cette clé peut utiliser votre quota Gemini. Ne la partagez
            pas publiquement.
          </p>
        </Callout>

        <Callout type="tip">
          <p>
            Vous pouvez toujours retrouver vos clés API sur{" "}
            <code>aistudio.google.com/apikey</code> si vous les perdez.
          </p>
        </Callout>
      </Section>

      {/* Section 4 */}
      <Section id="configurer-n8n" title="4. Configurer n8n avec Gemini">
        <h3 className="mt-2 text-lg font-semibold">
          Étape 1 : Ajouter un bloc Gemini dans n8n
        </h3>
        <p>
          Dans n8n, ajoutez un bloc <strong>Google Gemini Chat Model</strong>{" "}
          ou accédez aux paramètres des credentials.
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-gemini-n8n-node.png"
          alt="Bloc Google Gemini Chat Model dans n8n"
          caption="Ajoutez un bloc Gemini dans votre workflow"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 2 : Créer un nouveau credential
        </h3>
        <p>
          Créez un nouveau credential de type{" "}
          <strong>&quot;Google Gemini (PaLM) Api&quot;</strong>.
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-gemini-n8n-credential-type.png"
          alt="Sélection du type de credential 'Google Gemini (PaLM) Api'"
          caption="Sélectionnez le type 'Google Gemini (PaLM) Api'"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 3 : Coller la clé API
        </h3>
        <p>
          Collez la clé API que vous avez copiée à l&apos;étape précédente dans
          le champ <strong>&quot;API Key&quot;</strong>, puis sauvegardez.
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-gemini-n8n-paste-key.png"
          alt="Champ 'API Key' rempli avec la clé API Gemini"
          caption="Collez votre clé API et sauvegardez"
        />

        <Screenshot
          src="/screenshots/placeholder-credentials-gemini-n8n-saved.png"
          alt="Credential sauvegardé avec succès dans n8n"
          caption="Le credential est prêt — vous pouvez maintenant utiliser Gemini !"
        />

        <Callout type="tip">
          <p>
            Ce credential peut être utilisé dans{" "}
            <strong>tous vos workflows</strong>. Vous n&apos;avez pas besoin de
            le recréer à chaque fois.
          </p>
        </Callout>
      </Section>

      {/* Résumé */}
      <Section id="resume" title="Résumé">
        <div className="rounded-xl border-2 border-primary bg-primary-light p-6">
          <p className="mb-3 font-semibold">
            Checklist — Tout est bon si vous avez :
          </p>
          <ul className="space-y-2">
            <li>
              Créé une <strong>clé API Gemini</strong> via Google AI Studio
            </li>
            <li>
              Importé votre <strong>projet Google Cloud</strong> existant
            </li>
            <li>
              Configuré le credential{" "}
              <strong>&quot;Google Gemini (PaLM) Api&quot;</strong> dans n8n
            </li>
            <li>
              Prêt à <strong>utiliser l&apos;IA</strong> dans vos workflows !
            </li>
          </ul>
        </div>
      </Section>
    </TutoLayout>
  );
}
