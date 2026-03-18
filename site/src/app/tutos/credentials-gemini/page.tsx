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
  { id: "modeles-disponibles", title: "5. Modèles disponibles" },
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
            { label: "Vérifier son compte", color: "red" },
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
          Avant de commencer, vous devez remplir{" "}
          <strong>deux conditions</strong> :
        </p>

        <h3 className="mt-6 text-lg font-semibold">
          1. Avoir un projet Google Cloud
        </h3>
        <p>
          Vous devez avoir <strong>un projet Google Cloud déjà créé</strong>. Si
          ce n&apos;est pas encore fait, suivez d&apos;abord le tutoriel
          précédent :
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

        <h3 className="mt-6 text-lg font-semibold">
          2. Vérifier votre compte Google
        </h3>
        <p>
          Pour accéder à Google AI Studio et créer une clé API Gemini, votre
          compte Google doit être <strong>vérifié</strong> (vérification
          d&apos;âge). Si ce n&apos;est pas fait, Google vous bloquera
          l&apos;accès.
        </p>
        <p>
          Pour vérifier votre compte :
        </p>
        <ol className="ml-4 list-inside list-decimal space-y-2">
          <li>
            Allez dans les paramètres de votre compte Google :{" "}
            <strong>&quot;Gérer votre compte Google&quot;</strong>
          </li>
          <li>
            Cliquez sur <strong>&quot;Informations personnelles&quot;</strong>
          </li>
          <li>
            Cherchez la section <strong>&quot;Anniversaire&quot;</strong>
          </li>
          <li>
            Cliquez sur <strong>&quot;Vérifier votre âge&quot;</strong>
          </li>
          <li>
            Sélectionnez une méthode de vérification et suivez les instructions
          </li>
        </ol>

        <Callout type="warning">
          <p>
            Sans cette vérification, vous ne pourrez{" "}
            <strong>pas accéder à Google AI Studio</strong> et donc pas créer de
            clé API Gemini. Faites-le avant de continuer.
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
          src="/screenshots/credentials-gemini-aistudio.png"
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
          src="/screenshots/credentials-gemini-create-key.png"
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
          src="/screenshots/credentials-gemini-import-project.png"
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
          src="/screenshots/credentials-gemini-select-project.png"
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
          src="/screenshots/credentials-gemini-copy-key.png"
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
          src="/screenshots/credentials-gemini-n8n-node.png"
          alt="Bloc Google Gemini Chat Model dans n8n"
          caption="Ajoutez un bloc Gemini dans votre workflow"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 2 : Coller la clé API
        </h3>
        <p>
          Créez un nouveau credential de type{" "}
          <strong>&quot;Google Gemini (PaLM) Api&quot;</strong>, puis collez la
          clé API que vous avez copiée dans le champ{" "}
          <strong>&quot;API Key&quot;</strong>.
        </p>
        <Screenshot
          src="/screenshots/credentials-gemini-n8n-paste-key.png"
          alt="Champ 'API Key' rempli avec la clé API Gemini"
          caption="Collez votre clé API et sauvegardez"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 3 : Vérifier la connexion
        </h3>
        <p>
          Sauvegardez le credential. Si tout est correct, vous verrez un message
          de confirmation.
        </p>
        <Screenshot
          src="/screenshots/credentials-gemini-n8n-saved.png"
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

      {/* Section 5 */}
      <Section id="modeles-disponibles" title="5. Modèles disponibles">
        <p>
          Avec votre clé API gratuite, vous avez accès à plusieurs modèles.
          Cependant, <strong>tous les modèles ne font pas la même chose</strong>.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full rounded-lg border border-border text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b border-border px-4 py-3 text-left font-semibold">
                  Modèle
                </th>
                <th className="border-b border-border px-4 py-3 text-left font-semibold">
                  Type
                </th>
                <th className="border-b border-border px-4 py-3 text-left font-semibold">
                  Capacités
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-border px-4 py-3 font-medium">
                  <code>gemma</code> (modèles de base)
                </td>
                <td className="border-b border-border px-4 py-3">
                  Texte uniquement
                </td>
                <td className="border-b border-border px-4 py-3">
                  Résumés, rédaction, analyse, questions/réponses
                </td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="border-b border-border px-4 py-3 font-medium">
                  <code>gemini-2.0-flash</code> et autres
                </td>
                <td className="border-b border-border px-4 py-3">
                  Texte + Images
                </td>
                <td className="border-b border-border px-4 py-3">
                  Tout ce que fait Gemma + génération d&apos;images et vidéos
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="warning" title="Important pour les étudiants">
          <p>
            Avec votre compte gratuit, vous ne pouvez utiliser que les{" "}
            <strong>modèles de base Gemma</strong> qui gèrent uniquement du{" "}
            <strong>texte</strong> (pas de génération d&apos;images ni de
            vidéos). Les autres modèles (comme <code>gemini-2.0-flash</code>)
            peuvent générer des images mais nécessitent un compte avec
            facturation activée.
          </p>
        </Callout>

        <Callout type="tip">
          <p>
            Les modèles Gemma sont largement suffisants pour la plupart des cas
            d&apos;usage en automatisation : résumer des emails, rédiger du
            contenu, analyser des documents, etc.
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
              <strong>Vérifié votre compte Google</strong> (vérification
              d&apos;âge)
            </li>
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
              Prêt à <strong>utiliser l&apos;IA</strong> avec les modèles Gemma
              dans vos workflows !
            </li>
          </ul>
        </div>
      </Section>
    </TutoLayout>
  );
}
