"use client";

import TutoLayout from "@/components/TutoLayout";
import Section from "@/components/Section";
import Callout from "@/components/Callout";
import Screenshot from "@/components/Screenshot";
import FlowDiagram from "@/components/FlowDiagram";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "creer-projet-google-cloud", title: "2. Créer un projet Google Cloud" },
  { id: "activer-les-apis", title: "3. Activer les APIs" },
  {
    id: "configurer-ecran-consentement",
    title: "4. Configurer l'écran de consentement",
  },
  { id: "creer-identifiants", title: "5. Créer les identifiants" },
  { id: "connecter-n8n", title: "6. Connecter n8n à Google" },
  { id: "resume", title: "Résumé" },
];

export default function CredentialsGooglePage() {
  return (
    <TutoLayout title="Credentials Google" sections={sections}>
      {/* Section 1 */}
      <Section id="introduction" title="1. Introduction">
        <p>
          Pour que n8n puisse interagir avec vos services Google (lire vos
          emails, accéder à vos fichiers Drive, modifier vos Google Sheets...),
          il faut d&apos;abord lui donner <strong>l&apos;autorisation</strong>{" "}
          de se connecter à votre compte Google.
        </p>
        <p>
          Ce tutoriel vous guide <strong>étape par étape</strong> pour créer
          cette connexion. C&apos;est un processus à faire{" "}
          <strong>une seule fois</strong>, et ensuite tous vos workflows
          pourront utiliser vos services Google.
        </p>

        <p>Les services Google que vous pourrez utiliser dans n8n :</p>
        <ul className="ml-4 list-inside list-disc space-y-1">
          <li>
            <strong>Google Drive</strong> : lire, créer et organiser des
            fichiers
          </li>
          <li>
            <strong>Gmail</strong> : envoyer et recevoir des emails
          </li>
          <li>
            <strong>Google Calendar</strong> : gérer des événements
          </li>
          <li>
            <strong>Google Docs</strong> : créer et modifier des documents
          </li>
          <li>
            <strong>Google Sheets</strong> : lire et écrire dans des tableurs
          </li>
        </ul>

        <FlowDiagram
          title="Les 5 étapes pour connecter Google à n8n"
          nodes={[
            { label: "Projet Google Cloud", color: "blue" },
            { label: "APIs activées", color: "green" },
            { label: "Écran OAuth", color: "purple" },
            { label: "Client ID + Secret", color: "orange" },
            { label: "Connexion n8n", color: "green" },
          ]}
        />

        <Callout type="info">
          <p>
            Ce processus est <strong>gratuit</strong> et ne nécessite aucune
            carte bancaire. Il suffit d&apos;avoir un compte Google (celui que
            vous utilisez pour Gmail par exemple).
          </p>
        </Callout>
      </Section>

      {/* Section 2 */}
      <Section
        id="creer-projet-google-cloud"
        title="2. Créer un projet Google Cloud"
      >
        <p>
          Google Cloud est la plateforme de Google qui permet de gérer les
          accès à ses services. On va y créer un{" "}
          <strong>&quot;projet&quot;</strong> qui servira de conteneur pour nos
          autorisations.
        </p>

        <h3 className="mt-6 text-lg font-semibold">
          Étape 1 : Accéder à Google Cloud Console
        </h3>
        <p>
          Ouvrez votre navigateur et allez sur{" "}
          <code>console.cloud.google.com</code>. Connectez-vous avec votre
          compte Google si ce n&apos;est pas déjà fait.
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-google-cloud-console.png"
          alt="Page d'accueil de Google Cloud Console"
          caption="La page d'accueil de Google Cloud Console après connexion"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 2 : Créer un nouveau projet
        </h3>
        <p>
          En haut de la page, cliquez sur le <strong>sélecteur de projet</strong>{" "}
          (à côté du logo Google Cloud), puis cliquez sur{" "}
          <strong>&quot;Nouveau projet&quot;</strong> (ou &quot;New
          Project&quot;).
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-google-new-project.png"
          alt="Bouton 'Nouveau projet' dans Google Cloud Console"
          caption="Cliquez sur le sélecteur de projet puis sur 'Nouveau projet'"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 3 : Nommer le projet
        </h3>
        <p>
          Donnez un nom à votre projet, par exemple{" "}
          <code>n8n-audencia</code>, puis cliquez sur{" "}
          <strong>&quot;Créer&quot;</strong>.
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-google-project-name.png"
          alt="Formulaire de création de projet avec le nom 'n8n-audencia'"
          caption="Nommez votre projet et cliquez sur 'Créer'"
        />

        <Callout type="warning">
          <p>
            Vérifiez que votre nouveau projet est bien{" "}
            <strong>sélectionné</strong> dans la barre en haut de la page. Si
            vous voyez un autre nom de projet, cliquez dessus et sélectionnez{" "}
            <code>n8n-audencia</code>.
          </p>
        </Callout>
      </Section>

      {/* Section 3 */}
      <Section id="activer-les-apis" title="3. Activer les APIs">
        <p>
          Les <strong>APIs</strong> (Application Programming Interfaces) sont
          comme des <strong>portes d&apos;accès</strong> qui permettent à n8n de
          communiquer avec les services Google. Par défaut, ces portes sont
          fermées. Il faut les ouvrir une par une.
        </p>

        <h3 className="mt-6 text-lg font-semibold">
          Étape 1 : Accéder à la bibliothèque d&apos;APIs
        </h3>
        <p>
          Dans le menu à gauche, cliquez sur{" "}
          <strong>&quot;APIs &amp; Services&quot;</strong>, puis sur{" "}
          <strong>&quot;Library&quot;</strong> (Bibliothèque).
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-google-api-library.png"
          alt="Menu latéral avec 'APIs & Services' > 'Library'"
          caption="Accédez à la bibliothèque d'APIs depuis le menu latéral"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 2 : Activer chaque API
        </h3>
        <p>
          Pour chaque service, recherchez le nom dans la barre de recherche,
          cliquez sur le résultat, puis cliquez sur{" "}
          <strong>&quot;Activer&quot;</strong> (ou &quot;Enable&quot;).
        </p>
        <p>Activez les APIs suivantes :</p>
        <ul className="ml-4 list-inside list-disc space-y-1">
          <li>
            <strong>Google Drive API</strong>
          </li>
          <li>
            <strong>Gmail API</strong>
          </li>
          <li>
            <strong>Google Calendar API</strong>
          </li>
          <li>
            <strong>Google Docs API</strong>
          </li>
          <li>
            <strong>Google Sheets API</strong>
          </li>
        </ul>

        <Screenshot
          src="/screenshots/placeholder-credentials-google-enable-api.png"
          alt="Page d'une API avec le bouton 'Activer' en bleu"
          caption="Recherchez l'API, cliquez dessus, puis cliquez sur 'Activer'"
        />

        <Screenshot
          src="/screenshots/placeholder-credentials-google-api-enabled.png"
          alt="API activée avec un message de confirmation"
          caption="L'API est activée quand vous voyez le tableau de bord de l'API"
        />

        <Callout type="tip">
          <p>
            Vous pouvez activer d&apos;autres APIs plus tard si besoin. Chaque
            API correspond à un service Google spécifique.
          </p>
        </Callout>

        <Callout type="warning">
          <p>
            Vérifiez que votre projet <code>n8n-audencia</code> est toujours
            sélectionné en haut de la page <strong>avant</strong> d&apos;activer
            les APIs. Si vous les activez sur le mauvais projet, la connexion
            avec n8n ne fonctionnera pas.
          </p>
        </Callout>
      </Section>

      {/* Section 4 */}
      <Section
        id="configurer-ecran-consentement"
        title="4. Configurer l'écran de consentement OAuth"
      >
        <p>
          L&apos;<strong>écran de consentement OAuth</strong> est la fenêtre
          popup qui apparaît quand vous cliquez sur &quot;Se connecter avec
          Google&quot;. C&apos;est la fenêtre qui demande &quot;Autoriser cette
          application à accéder à vos données ?&quot;. Il faut la configurer
          pour que n8n puisse l&apos;utiliser.
        </p>

        <h3 className="mt-6 text-lg font-semibold">
          Étape 1 : Accéder à la configuration
        </h3>
        <p>
          Dans le menu à gauche, allez dans{" "}
          <strong>&quot;APIs &amp; Services&quot;</strong> puis{" "}
          <strong>&quot;OAuth consent screen&quot;</strong>. Cliquez sur{" "}
          <strong>&quot;Get Started&quot;</strong>.
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-google-oauth-start.png"
          alt="Page OAuth consent screen avec le bouton 'Get Started'"
          caption="Cliquez sur 'Get Started' pour commencer la configuration"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 2 : Remplir les informations
        </h3>
        <p>
          Remplissez les champs suivants :
        </p>
        <ul className="ml-4 list-inside list-disc space-y-1">
          <li>
            <strong>App name</strong> : mettez ce que vous voulez, par exemple{" "}
            <code>n8n</code>
          </li>
          <li>
            <strong>User type</strong> : sélectionnez{" "}
            <strong>&quot;External&quot;</strong>
          </li>
          <li>
            <strong>Contact information</strong> : entrez votre adresse email
          </li>
        </ul>
        <Screenshot
          src="/screenshots/placeholder-credentials-google-oauth-appname.png"
          alt="Formulaire avec le nom de l'app et le type External sélectionné"
          caption="Remplissez le nom, sélectionnez 'External' et ajoutez votre email"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 3 : Accepter et créer
        </h3>
        <p>
          Cochez <strong>&quot;I agree...&quot;</strong> puis cliquez sur{" "}
          <strong>&quot;Create&quot;</strong>.
        </p>

        <h3 className="mt-6 text-lg font-semibold">
          Étape 4 : Publier l&apos;application
        </h3>
        <p>
          Sur la page <strong>&quot;Audience&quot;</strong>, cliquez sur{" "}
          <strong>&quot;Publish App&quot;</strong> puis confirmez.
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-google-oauth-publish.png"
          alt="Bouton 'Publish App' sur la page Audience"
          caption="Cliquez sur 'Publish App' pour rendre l'application accessible"
        />

        <Callout type="warning" title="Erreur fréquente">
          <p>
            Si vous oubliez de publier l&apos;application, la connexion depuis
            n8n <strong>ne fonctionnera pas</strong> ou expirera après 7 jours.
            Vérifiez que le statut affiche bien{" "}
            <strong>&quot;In production&quot;</strong> (En production).
          </p>
        </Callout>
      </Section>

      {/* Section 5 */}
      <Section
        id="creer-identifiants"
        title="5. Créer les identifiants (Client ID)"
      >
        <p>
          Le <strong>Client ID</strong> et le{" "}
          <strong>Client Secret</strong> sont comme un{" "}
          <strong>nom d&apos;utilisateur et un mot de passe</strong> que n8n
          utilise pour s&apos;identifier auprès de Google. On va les créer
          maintenant.
        </p>

        <h3 className="mt-6 text-lg font-semibold">
          Étape 1 : Accéder aux Clients
        </h3>
        <p>
          Dans le menu de gauche, cliquez sur{" "}
          <strong>&quot;Clients&quot;</strong> (ou &quot;Credentials&quot;), puis
          sur <strong>&quot;Create Client&quot;</strong>.
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-google-create-client.png"
          alt="Page Clients avec le bouton 'Create Client'"
          caption="Cliquez sur 'Create Client' pour créer de nouveaux identifiants"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 2 : Choisir le type d&apos;application
        </h3>
        <p>
          Dans <strong>&quot;Application type&quot;</strong>, sélectionnez{" "}
          <strong>&quot;Web application&quot;</strong>.
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-google-web-app.png"
          alt="Sélection 'Web application' dans le menu déroulant"
          caption="Sélectionnez 'Web application' comme type d'application"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 3 : Ajouter les URIs de redirection
        </h3>
        <p>
          Dans la section{" "}
          <strong>&quot;Authorized redirect URIs&quot;</strong>, ajoutez ces
          deux adresses <strong>exactement</strong> comme ci-dessous :
        </p>
        <ul className="ml-4 list-inside list-disc space-y-2">
          <li>
            <code>http://localhost:5678</code>
          </li>
          <li>
            <code>http://localhost:5678/rest/oauth2-credential/callback</code>
          </li>
        </ul>
        <Screenshot
          src="/screenshots/placeholder-credentials-google-redirect-uris.png"
          alt="Champs 'Authorized redirect URIs' avec les deux URLs remplies"
          caption="Ajoutez les deux URIs de redirection exactement comme indiqué"
        />

        <Callout type="warning">
          <p>
            Les URIs doivent être tapées <strong>exactement</strong> comme
            indiqué, avec <code>http://</code> (et non <code>https://</code>).
            Une seule faute de frappe et la connexion échouera.
          </p>
        </Callout>

        <h3 className="mt-6 text-lg font-semibold">
          Étape 4 : Créer et copier les identifiants
        </h3>
        <p>
          Cliquez sur <strong>&quot;Create&quot;</strong>. Une fenêtre
          s&apos;affiche avec votre <strong>Client ID</strong> et votre{" "}
          <strong>Client Secret</strong>.{" "}
          <strong>Copiez-les</strong> dans un fichier texte.
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-google-client-id-secret.png"
          alt="Fenêtre affichant le Client ID et le Client Secret"
          caption="Copiez le Client ID et le Client Secret dans un endroit sûr"
        />

        <Callout type="tip">
          <p>
            Cliquez aussi sur{" "}
            <strong>&quot;Download JSON&quot;</strong> pour sauvegarder ces
            informations dans un fichier. C&apos;est un bon réflexe en cas de
            perte.
          </p>
        </Callout>
      </Section>

      {/* Section 6 */}
      <Section id="connecter-n8n" title="6. Connecter n8n à Google">
        <p>
          Dernière étape ! On va maintenant entrer les identifiants dans n8n
          pour établir la connexion.
        </p>

        <h3 className="mt-6 text-lg font-semibold">
          Étape 1 : Créer un credential dans n8n
        </h3>
        <p>
          Dans n8n, ajoutez n&apos;importe quel bloc Google (par exemple{" "}
          <strong>Google Drive</strong>). Dans les paramètres du bloc, cliquez
          sur <strong>&quot;Create New Credential&quot;</strong>.
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-google-n8n-credential.png"
          alt="Bloc Google Drive dans n8n avec le bouton 'Create New Credential'"
          caption="Créez un nouveau credential depuis n'importe quel bloc Google"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 2 : Coller les identifiants
        </h3>
        <p>
          Collez le <strong>Client ID</strong> et le{" "}
          <strong>Client Secret</strong> que vous avez copiés à l&apos;étape
          précédente.
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-google-n8n-paste.png"
          alt="Formulaire de credential n8n avec les champs Client ID et Client Secret remplis"
          caption="Collez votre Client ID et votre Client Secret"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 3 : Se connecter avec Google
        </h3>
        <p>
          Un bouton <strong>&quot;Sign in with Google&quot;</strong> apparaît.
          Cliquez dessus, puis choisissez votre compte Google.
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-google-n8n-signin.png"
          alt="Bouton 'Sign in with Google' dans n8n"
          caption="Cliquez sur 'Sign in with Google' pour lancer la connexion"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 4 : Autoriser l&apos;accès
        </h3>
        <p>
          Google affiche un message d&apos;avertissement car l&apos;application
          n&apos;est pas &quot;vérifiée&quot; par Google (c&apos;est normal pour
          un projet personnel). Cliquez sur{" "}
          <strong>&quot;Paramètres avancés&quot;</strong>, puis sur{" "}
          <strong>&quot;Accéder à n8n (non sécurisé)&quot;</strong>.
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-google-advanced-access.png"
          alt="Page d'avertissement Google avec 'Paramètres avancés' et 'Accéder à n8n'"
          caption="Cliquez sur 'Paramètres avancés' puis 'Accéder à n8n (non sécurisé)'"
        />

        <p>
          Autorisez toutes les permissions demandées et confirmez.
        </p>
        <Screenshot
          src="/screenshots/placeholder-credentials-google-permissions.png"
          alt="Page de permissions Google avec les autorisations demandées"
          caption="Autorisez toutes les permissions pour que n8n fonctionne correctement"
        />

        <Callout type="warning" title="Message 'Application non vérifiée'">
          <p>
            Ce message est <strong>normal</strong> pour un projet
            personnel/scolaire. Google l&apos;affiche car votre application
            n&apos;a pas été vérifiée officiellement. Cliquez sur{" "}
            <strong>&quot;Paramètres avancés&quot;</strong> puis{" "}
            <strong>&quot;Accéder à n8n (non sécurisé)&quot;</strong> pour
            continuer en toute sécurité.
          </p>
        </Callout>

        <Callout type="tip">
          <p>
            Une fois connecté, ce credential fonctionne pour{" "}
            <strong>tous les blocs Google</strong> (Drive, Gmail, Sheets, etc.).
            Vous n&apos;avez pas besoin de refaire ce processus.
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
              Créé un <strong>projet Google Cloud</strong> (ex:{" "}
              <code>n8n-audencia</code>)
            </li>
            <li>
              Activé les <strong>5 APIs</strong> : Drive, Gmail, Calendar, Docs,
              Sheets
            </li>
            <li>
              Configuré et <strong>publié</strong> l&apos;écran de consentement
              OAuth
            </li>
            <li>
              Créé un <strong>Client ID</strong> et un{" "}
              <strong>Client Secret</strong> avec les bonnes URIs de redirection
            </li>
            <li>
              Connecté <strong>n8n à Google</strong> avec succès
            </li>
          </ul>
        </div>
      </Section>
    </TutoLayout>
  );
}
