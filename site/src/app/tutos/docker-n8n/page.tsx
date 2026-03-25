"use client";

import Link from "next/link";
import TutoLayout from "@/components/TutoLayout";
import Section from "@/components/Section";
import Callout from "@/components/Callout";
import Screenshot from "@/components/Screenshot";
import FlowDiagram from "@/components/FlowDiagram";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "pull-image", title: "2. Récupérer l'image n8n" },
  { id: "lancer-container", title: "3. Lancer le conteneur" },
  { id: "acceder-n8n", title: "4. Accéder à n8n" },
  { id: "credentials", title: "5. Configurer les credentials" },
  { id: "resume", title: "Résumé" },
];

export default function DockerN8nPage() {
  return (
    <TutoLayout title="Lancer n8n sur Docker" sections={sections}>
      {/* Section 1 */}
      <Section id="introduction" title="1. Introduction">
        <p>
          Maintenant que Docker Desktop est installé, vous allez pouvoir lancer{" "}
          <strong>n8n en local</strong> sur votre ordinateur. C&apos;est rapide
          et ne nécessite aucune configuration compliquée.
        </p>

        <FlowDiagram
          title="Les étapes pour lancer n8n"
          nodes={[
            { label: "Récupérer l'image", color: "blue" },
            { label: "Configurer & lancer", color: "orange" },
            { label: "Accéder à n8n", color: "green" },
          ]}
        />

        <Callout type="warning">
          <p>
            Avant de continuer, assurez-vous que{" "}
            <strong>Docker Desktop est lancé</strong> (l&apos;icône de baleine
            doit être visible dans votre barre de tâches/menu). Si ce n&apos;est
            pas le cas, ouvrez Docker Desktop d&apos;abord. Si vous ne
            l&apos;avez pas encore installé, suivez le tutoriel{" "}
            <Link
              href="/tutos/docker"
              className="text-primary underline hover:text-primary/80"
            >
              Installer Docker Desktop
            </Link>
            .
          </p>
        </Callout>
      </Section>

      {/* Section 2 - Pull image */}
      <Section id="pull-image" title="2. Récupérer l'image n8n">
        <p>
          Une <strong>image Docker</strong>, c&apos;est comme un modèle qui
          contient tout ce qu&apos;il faut pour faire tourner une application.
          On va récupérer l&apos;image officielle de n8n directement depuis
          Docker Desktop.
        </p>

        <ol className="ml-4 list-inside list-decimal space-y-2">
          <li>
            Ouvrez <strong>Docker Desktop</strong>
          </li>
          <li>
            Dans la barre de recherche en haut, tapez{" "}
            <strong>n8nio/n8n</strong>
          </li>
          <li>
            Cliquez sur <strong>&quot;Pull&quot;</strong> pour télécharger la
            dernière version de l&apos;image
          </li>
        </ol>

        <Screenshot
          src="/screenshots/docker-n8n-pull-latest.png"
          alt="Docker Desktop - recherche et pull de l'image n8nio/n8n"
          caption="Recherchez 'n8nio/n8n' et cliquez sur Pull pour télécharger l'image"
        />

        <Callout type="info">
          <p>
            Le téléchargement peut prendre quelques minutes selon votre
            connexion internet. Attendez que le téléchargement soit terminé
            avant de passer à l&apos;étape suivante.
          </p>
        </Callout>
      </Section>

      {/* Section 3 - Lancer container */}
      <Section id="lancer-container" title="3. Lancer le conteneur">
        <p>
          Maintenant que l&apos;image est téléchargée, on va créer et lancer un{" "}
          <strong>conteneur</strong> (une instance de n8n qui tourne sur votre
          machine).
        </p>

        <ol className="ml-4 list-inside list-decimal space-y-2">
          <li>
            Dans Docker Desktop, allez dans l&apos;onglet{" "}
            <strong>Images</strong>
          </li>
          <li>
            Trouvez l&apos;image <strong>n8nio/n8n</strong> et cliquez sur le
            bouton <strong>Run</strong> (▶)
          </li>
          <li>
            Un panneau de paramètres optionnels s&apos;ouvre.
            Configurez les options suivantes :
          </li>
        </ol>

        <div className="my-4 overflow-x-auto rounded-lg border border-border bg-gray-50 p-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-2 pr-4 text-left font-semibold">Paramètre</th>
                <th className="pb-2 text-left font-semibold">Valeur</th>
              </tr>
            </thead>
            <tbody className="space-y-1">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-medium">Container name</td>
                <td className="py-2">
                  <code>n8n-local</code> (ou un autre nom, par exemple{" "}
                  <code>mon-n8n</code>)
                </td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-medium">Host port</td>
                <td className="py-2">
                  <code>5678</code>
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">
                  Variable d&apos;environnement
                </td>
                <td className="py-2">
                  <code>WEBHOOK_URL</code> ={" "}
                  <code>http://localhost:5678</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Screenshot
          src="/screenshots/docker-n8n-optional-settings.png"
          alt="Paramètres optionnels du conteneur n8n dans Docker Desktop"
          caption="Configurez le nom, le port 5678 et la variable WEBHOOK_URL"
        />

        <ol className="ml-4 list-inside list-decimal space-y-2" start={4}>
          <li>
            Cliquez sur <strong>&quot;Run&quot;</strong> pour lancer le conteneur
          </li>
        </ol>

        <Callout type="tip">
          <p>
            Le port <strong>5678</strong> est le port par défaut de n8n.
            C&apos;est ce qui permet d&apos;accéder à n8n depuis votre
            navigateur. Ne changez pas ce numéro sauf si vous savez ce que vous
            faites.
          </p>
        </Callout>
      </Section>

      {/* Section 4 - Accéder à n8n */}
      <Section id="acceder-n8n" title="4. Accéder à n8n">
        <p>
          Une fois le conteneur lancé, attendez environ{" "}
          <strong>10 à 20 secondes</strong> que n8n démarre complètement, puis :
        </p>

        <ol className="ml-4 list-inside list-decimal space-y-2">
          <li>
            Ouvrez votre <strong>navigateur web</strong> (Chrome, Firefox,
            Edge...)
          </li>
          <li>
            Dans la barre d&apos;adresse, tapez :{" "}
            <code>
              <a
                href="http://localhost:5678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-primary/80"
              >
                http://localhost:5678
              </a>
            </code>
          </li>
          <li>
            Appuyez sur <strong>Entrée</strong>
          </li>
        </ol>

        <Screenshot
          src="/screenshots/docker-n8n-launch-in-browser.png"
          alt="n8n lancé dans le navigateur à l'adresse localhost:5678"
          caption="n8n est accessible dans votre navigateur à http://localhost:5678"
        />

        <p className="mt-4">
          Vous arrivez sur la page d&apos;accueil de n8n. Vous pouvez créer un
          compte local (ce compte n&apos;existe que sur votre machine) et
          commencer à utiliser n8n !
        </p>

        <Callout type="warning">
          <p>
            C&apos;est une <strong>instance locale toute neuve</strong> : il
            n&apos;y a aucun workflow, aucune donnée, et aucun credential
            configuré. Vous partez de zéro. C&apos;est normal !
          </p>
        </Callout>

        <Callout type="info">
          <p>
            Si la page ne se charge pas tout de suite, attendez encore quelques
            secondes et rafraîchissez la page. n8n a besoin d&apos;un petit
            moment pour démarrer la première fois.
          </p>
        </Callout>
      </Section>

      {/* Section 5 - Credentials */}
      <Section id="credentials" title="5. Configurer les credentials">
        <p>
          Comme c&apos;est une instance locale neuve, vous devez{" "}
          <strong>reconfigurer tous vos credentials</strong> (Google OAuth,
          Gemini, etc.) pour cette instance.
        </p>

        <Callout type="warning">
          <p>
            <strong>Point important :</strong> lors de la configuration de vos
            credentials Google (OAuth, Drive, Gmail, etc.), les{" "}
            <strong>URL de redirection (Redirect URI)</strong> et les{" "}
            <strong>URL autorisées</strong> doivent correspondre à votre
            instance locale. Si vous avez configuré vos credentials avec une
            autre URL (par exemple celle de l&apos;école), vous devez ajouter{" "}
            <code>http://localhost:5678</code> dans les paramètres de votre
            application Google Cloud. Sans ça, la connexion avec les services
            Google ne fonctionnera pas.
          </p>
        </Callout>

        <p className="mt-4">
          Consultez nos tutoriels pour configurer vos credentials :
        </p>
        <ul className="ml-4 list-inside list-disc space-y-2">
          <li>
            <Link
              href="/tutos/credentials-google"
              className="text-primary underline hover:text-primary/80"
            >
              Credentials Google (OAuth)
            </Link>{" "}
            — pour Gmail, Drive, Calendar, Sheets, Docs
          </li>
          <li>
            <Link
              href="/tutos/credentials-gemini"
              className="text-primary underline hover:text-primary/80"
            >
              Credentials Gemini (API Key)
            </Link>{" "}
            — pour utiliser l&apos;IA Gemini dans vos workflows
          </li>
        </ul>

        <Callout type="tip">
          <p>
            Dans les tutoriels credentials, pensez bien à utiliser{" "}
            <code>http://localhost:5678</code> comme URL de base partout où
            c&apos;est demandé (Redirect URI, Authorized JavaScript origins,
            etc.). Si vous mettez une autre adresse, les APIs Google et autres
            services ne pourront pas communiquer avec votre n8n local.
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
              Docker Desktop <strong>lancé et fonctionnel</strong>
            </li>
            <li>
              Récupéré l&apos;image <strong>n8nio/n8n</strong> via Docker
              Desktop
            </li>
            <li>
              Lancé le conteneur avec le port <strong>5678</strong> et la
              variable <code>WEBHOOK_URL</code>
            </li>
            <li>
              Accédé à n8n sur{" "}
              <a
                href="http://localhost:5678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-primary/80"
              >
                http://localhost:5678
              </a>
            </li>
            <li>
              Configuré vos{" "}
              <Link
                href="/tutos/credentials-google"
                className="text-primary underline hover:text-primary/80"
              >
                credentials
              </Link>{" "}
              avec <code>http://localhost:5678</code> comme URL
            </li>
          </ul>
        </div>
      </Section>
    </TutoLayout>
  );
}
