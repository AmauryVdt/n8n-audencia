"use client";

import TutoLayout from "@/components/TutoLayout";
import Section from "@/components/Section";
import Callout from "@/components/Callout";
import Screenshot from "@/components/Screenshot";
import FlowDiagram from "@/components/FlowDiagram";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "mac", title: "2. Installation sur Mac" },
  { id: "windows", title: "3. Installation sur Windows" },
  { id: "verifier", title: "4. Vérifier l'installation" },
  { id: "resume", title: "Résumé" },
];

export default function DockerPage() {
  return (
    <TutoLayout title="Installer Docker Desktop" sections={sections}>
      {/* Section 1 */}
      <Section id="introduction" title="1. Introduction">
        <p>
          <strong>Docker</strong> est un logiciel qui permet de faire tourner des
          applications dans des <strong>conteneurs</strong>. Un conteneur,
          c&apos;est comme une boîte isolée qui contient tout ce dont une
          application a besoin pour fonctionner (le code, les fichiers, les
          paramètres...).
        </p>
        <p>
          Concrètement, Docker vous permet d&apos;installer{" "}
          <strong>n8n sur votre ordinateur</strong> en une seule commande, sans
          avoir à configurer plein de choses compliquées.
        </p>

        <FlowDiagram
          title="Le processus d'installation"
          nodes={[
            { label: "Télécharger Docker", color: "blue" },
            { label: "Installer", color: "orange" },
            { label: "Vérifier", color: "green" },
          ]}
        />

        <Callout type="info">
          <p>
            Docker Desktop est <strong>gratuit</strong> pour un usage personnel
            et éducatif. C&apos;est exactement ce qu&apos;il nous faut !
          </p>
        </Callout>

        <Callout type="warning">
          <p>
            Les étapes sont <strong>différentes</strong> selon que vous êtes sur{" "}
            <strong>Mac</strong> ou <strong>Windows</strong>. Suivez bien la
            section qui correspond à votre ordinateur.
          </p>
        </Callout>
      </Section>

      {/* Section 2 - Mac */}
      <Section id="mac" title="2. Installation sur Mac">
        <h3 className="mt-2 text-lg font-semibold">
          Étape 1 : Identifier votre type de Mac
        </h3>
        <p>
          Avant de télécharger Docker, vous devez savoir quel{" "}
          <strong>processeur</strong> votre Mac utilise. Il en existe deux
          types :
        </p>
        <ul className="ml-4 list-inside list-disc space-y-1">
          <li>
            <strong>Apple Silicon</strong> (puce M1, M2, M3, M4...) — les Macs
            récents (depuis fin 2020)
          </li>
          <li>
            <strong>Intel</strong> — les Macs plus anciens
          </li>
        </ul>

        <p className="mt-3">Pour vérifier :</p>
        <ol className="ml-4 list-inside list-decimal space-y-2">
          <li>
            Cliquez sur le logo <strong>Apple</strong> (pomme) en haut à gauche
            de votre écran
          </li>
          <li>
            Cliquez sur <strong>&quot;À propos de ce Mac&quot;</strong>
          </li>
          <li>
            Regardez la ligne <strong>&quot;Puce&quot;</strong> ou{" "}
            <strong>&quot;Processeur&quot;</strong> :
            <ul className="ml-6 mt-1 list-inside list-disc space-y-1">
              <li>
                Si vous voyez <strong>&quot;Apple M1&quot;</strong>,{" "}
                <strong>&quot;Apple M2&quot;</strong>, etc. → c&apos;est{" "}
                <strong>Apple Silicon</strong>
              </li>
              <li>
                Si vous voyez <strong>&quot;Intel&quot;</strong> → c&apos;est{" "}
                <strong>Intel</strong>
              </li>
            </ul>
          </li>
        </ol>
        <Screenshot
          src="/screenshots/placeholder-docker-mac-about.png"
          alt="Fenêtre 'À propos de ce Mac' montrant le type de processeur"
          caption="Vérifiez si votre Mac a une puce Apple Silicon ou Intel"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 2 : Télécharger Docker Desktop
        </h3>
        <p>
          Allez sur le site officiel de Docker :{" "}
          <code>docker.com/products/docker-desktop</code>
        </p>
        <p>
          Cliquez sur le bouton de téléchargement correspondant à votre Mac :
        </p>
        <ul className="ml-4 list-inside list-disc space-y-1">
          <li>
            <strong>&quot;Mac with Apple chip&quot;</strong> si vous avez Apple
            Silicon
          </li>
          <li>
            <strong>&quot;Mac with Intel chip&quot;</strong> si vous avez Intel
          </li>
        </ul>
        <Screenshot
          src="/screenshots/placeholder-docker-mac-download.png"
          alt="Page de téléchargement Docker Desktop avec les options Mac"
          caption="Choisissez la version adaptée à votre Mac"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 3 : Installer Docker Desktop
        </h3>
        <ol className="ml-4 list-inside list-decimal space-y-2">
          <li>
            Ouvrez le fichier <strong>.dmg</strong> téléchargé
          </li>
          <li>
            Glissez l&apos;icône <strong>Docker</strong> dans le dossier{" "}
            <strong>Applications</strong>
          </li>
          <li>
            Ouvrez Docker depuis votre dossier <strong>Applications</strong>
          </li>
          <li>
            Acceptez les conditions d&apos;utilisation si demandé
          </li>
          <li>
            Attendez que Docker démarre (une icône de baleine apparaît dans la
            barre de menu en haut)
          </li>
        </ol>
        <Screenshot
          src="/screenshots/placeholder-docker-mac-install.png"
          alt="Installation de Docker Desktop sur Mac - glisser dans Applications"
          caption="Glissez Docker dans le dossier Applications"
        />

        <Callout type="tip">
          <p>
            Au premier lancement, macOS peut vous demander votre{" "}
            <strong>mot de passe</strong> ou une autorisation. C&apos;est
            normal, acceptez.
          </p>
        </Callout>

        <Callout type="info">
          <p>
            L&apos;icône de baleine (<strong>Docker</strong>) dans la barre de menu
            en haut de votre écran signifie que Docker est en train de tourner.
            Si elle est animée, Docker est en cours de démarrage. Si elle est
            fixe, Docker est prêt.
          </p>
        </Callout>
      </Section>

      {/* Section 3 - Windows */}
      <Section id="windows" title="3. Installation sur Windows">
        <Callout type="warning">
          <p>
            Sur Windows, Docker a besoin d&apos;un composant supplémentaire
            appelé <strong>WSL 2</strong> (Windows Subsystem for Linux).
            C&apos;est un outil intégré à Windows qui permet de faire tourner un
            mini système Linux à l&apos;intérieur de Windows. Docker en a besoin
            pour fonctionner correctement. Pas de panique, l&apos;installation
            est simple !
          </p>
        </Callout>

        <h3 className="mt-4 text-lg font-semibold">
          Étape 1 : Installer WSL 2
        </h3>
        <p>
          <strong>WSL</strong> (Windows Subsystem for Linux) permet à Docker de
          fonctionner sur Windows. Voici comment l&apos;installer :
        </p>
        <ol className="ml-4 list-inside list-decimal space-y-2">
          <li>
            Ouvrez le <strong>Menu Démarrer</strong> (touche Windows)
          </li>
          <li>
            Tapez <strong>&quot;PowerShell&quot;</strong> dans la barre de
            recherche
          </li>
          <li>
            Faites un <strong>clic droit</strong> sur{" "}
            <strong>&quot;Windows PowerShell&quot;</strong> et choisissez{" "}
            <strong>&quot;Exécuter en tant qu&apos;administrateur&quot;</strong>
          </li>
          <li>
            Dans la fenêtre qui s&apos;ouvre, tapez cette commande puis appuyez
            sur <strong>Entrée</strong> :
          </li>
        </ol>

        <div className="my-4 overflow-x-auto rounded-lg bg-gray-900 p-4">
          <code className="text-sm text-green-400">wsl --install</code>
        </div>

        <p>
          Cette commande va installer WSL 2 et une distribution Linux
          automatiquement. <strong>Redémarrez votre ordinateur</strong> quand
          c&apos;est demandé.
        </p>
        <Screenshot
          src="/screenshots/placeholder-docker-windows-wsl.png"
          alt="PowerShell exécutant la commande 'wsl --install'"
          caption="Exécutez 'wsl --install' dans PowerShell en administrateur"
        />

        <Callout type="warning">
          <p>
            Si la commande <code>wsl --install</code> ne fonctionne pas, votre
            version de Windows est peut-être trop ancienne. Vérifiez que vous
            avez bien <strong>Windows 10 version 2004</strong> (ou plus récent)
            ou <strong>Windows 11</strong>. Vous pouvez mettre à jour Windows
            via <strong>Paramètres → Windows Update</strong>.
          </p>
        </Callout>

        <Callout type="tip">
          <p>
            Après le redémarrage, une fenêtre peut s&apos;ouvrir pour vous
            demander de créer un <strong>nom d&apos;utilisateur</strong> et un{" "}
            <strong>mot de passe</strong> pour Linux. Choisissez quelque chose
            de simple (par exemple votre prénom en minuscules). Ce mot de passe
            est uniquement pour Linux, pas pour Windows.
          </p>
        </Callout>

        <h3 className="mt-6 text-lg font-semibold">
          Étape 2 : Vérifier que WSL est installé
        </h3>
        <p>
          Après le redémarrage, ouvrez à nouveau PowerShell et tapez :
        </p>
        <div className="my-4 overflow-x-auto rounded-lg bg-gray-900 p-4">
          <code className="text-sm text-green-400">wsl --list --verbose</code>
        </div>
        <p>
          Vous devriez voir une distribution Linux (comme{" "}
          <strong>Ubuntu</strong>) avec la <strong>VERSION 2</strong>. Si
          c&apos;est le cas, WSL est prêt.
        </p>
        <Screenshot
          src="/screenshots/placeholder-docker-windows-wsl-check.png"
          alt="PowerShell affichant les distributions WSL installées"
          caption="Vérifiez que WSL 2 est bien installé avec une distribution Linux"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 3 : Télécharger Docker Desktop
        </h3>
        <p>
          Allez sur le site officiel :{" "}
          <code>docker.com/products/docker-desktop</code>
        </p>
        <p>
          Cliquez sur <strong>&quot;Download for Windows&quot;</strong>.
        </p>
        <Screenshot
          src="/screenshots/placeholder-docker-windows-download.png"
          alt="Page de téléchargement Docker Desktop pour Windows"
          caption="Téléchargez Docker Desktop pour Windows"
        />

        <h3 className="mt-6 text-lg font-semibold">
          Étape 4 : Installer Docker Desktop
        </h3>
        <ol className="ml-4 list-inside list-decimal space-y-2">
          <li>
            Ouvrez le fichier <strong>.exe</strong> téléchargé
          </li>
          <li>
            Laissez l&apos;option{" "}
            <strong>&quot;Use WSL 2 instead of Hyper-V&quot;</strong> cochée
            (c&apos;est important !)
          </li>
          <li>
            Cliquez sur <strong>&quot;Ok&quot;</strong> puis attendez
            l&apos;installation
          </li>
          <li>
            Cliquez sur{" "}
            <strong>&quot;Close and restart&quot;</strong> pour redémarrer
          </li>
        </ol>
        <Screenshot
          src="/screenshots/placeholder-docker-windows-install.png"
          alt="Installation de Docker Desktop sur Windows avec l'option WSL 2 cochée"
          caption="Gardez bien l'option 'Use WSL 2' cochée"
        />

        <Callout type="warning">
          <p>
            Si vous ne cochez pas l&apos;option{" "}
            <strong>&quot;Use WSL 2&quot;</strong>, Docker essaiera d&apos;utiliser
            Hyper-V à la place, ce qui est moins performant et peut ne pas
            fonctionner sur toutes les versions de Windows.
          </p>
        </Callout>

        <h3 className="mt-6 text-lg font-semibold">
          Étape 5 : Premier lancement
        </h3>
        <p>
          Après le redémarrage, Docker Desktop devrait se lancer
          automatiquement. Si ce n&apos;est pas le cas, ouvrez-le depuis le
          Menu Démarrer.
        </p>
        <ol className="ml-4 list-inside list-decimal space-y-2">
          <li>Acceptez les conditions d&apos;utilisation</li>
          <li>
            Choisissez <strong>&quot;Use recommended settings&quot;</strong>
          </li>
          <li>
            Vous pouvez <strong>ignorer</strong> la création de compte Docker
            Hub (cliquez sur &quot;Skip&quot; ou &quot;Continue without signing
            in&quot;)
          </li>
          <li>
            Attendez que Docker affiche{" "}
            <strong>&quot;Docker Desktop is running&quot;</strong>
          </li>
        </ol>
        <Screenshot
          src="/screenshots/placeholder-docker-windows-running.png"
          alt="Docker Desktop lancé et prêt sur Windows"
          caption="Docker Desktop est prêt quand vous voyez ce tableau de bord"
        />

        <Callout type="tip">
          <p>
            Vous n&apos;avez <strong>pas besoin</strong> de créer un compte
            Docker Hub. Cliquez sur &quot;Skip&quot; ou fermez simplement cette
            étape.
          </p>
        </Callout>
      </Section>

      {/* Section 4 - Vérifier */}
      <Section id="verifier" title="4. Vérifier l'installation">
        <p>
          Pour être sûr que Docker fonctionne, on va exécuter une{" "}
          <strong>commande de test</strong>. C&apos;est la même sur Mac et
          Windows.
        </p>

        <h3 className="mt-4 text-lg font-semibold">
          Ouvrir un terminal
        </h3>
        <ul className="ml-4 list-inside list-disc space-y-1">
          <li>
            <strong>Sur Mac</strong> : ouvrez l&apos;application{" "}
            <strong>Terminal</strong> (cherchez &quot;Terminal&quot; dans
            Spotlight avec <code>Cmd + Espace</code>)
          </li>
          <li>
            <strong>Sur Windows</strong> : ouvrez{" "}
            <strong>PowerShell</strong> (cherchez &quot;PowerShell&quot; dans le
            Menu Démarrer)
          </li>
        </ul>

        <h3 className="mt-6 text-lg font-semibold">
          Tester Docker
        </h3>
        <p>Tapez cette commande et appuyez sur Entrée :</p>
        <div className="my-4 overflow-x-auto rounded-lg bg-gray-900 p-4">
          <code className="text-sm text-green-400">docker --version</code>
        </div>
        <p>
          Vous devriez voir quelque chose comme :{" "}
          <code>Docker version 27.x.x, build xxxxxxx</code>
        </p>

        <p className="mt-4">Ensuite, tapez :</p>
        <div className="my-4 overflow-x-auto rounded-lg bg-gray-900 p-4">
          <code className="text-sm text-green-400">docker run hello-world</code>
        </div>
        <p>
          Si tout est bien installé, vous verrez un message qui commence par{" "}
          <strong>&quot;Hello from Docker!&quot;</strong>. Cela signifie que
          Docker fonctionne parfaitement.
        </p>
        <Screenshot
          src="/screenshots/placeholder-docker-hello-world.png"
          alt="Terminal affichant 'Hello from Docker!' après la commande docker run hello-world"
          caption="Si vous voyez ce message, Docker est prêt !"
        />

        <Callout type="warning">
          <p>
            Si vous obtenez une erreur comme{" "}
            <strong>&quot;docker: command not found&quot;</strong> ou{" "}
            <strong>
              &quot;Cannot connect to the Docker daemon&quot;
            </strong>
            , vérifiez que Docker Desktop est bien lancé (l&apos;icône de
            baleine doit être visible dans la barre de tâches/menu).
          </p>
        </Callout>

        <Callout type="info">
          <p>
            Docker Desktop doit être{" "}
            <strong>lancé (ouvert) à chaque fois</strong> que vous voulez
            utiliser Docker. Si vous redémarrez votre ordinateur, pensez à
            rouvrir Docker Desktop avant de lancer n8n.
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
              Identifié votre système (<strong>Mac</strong> ou{" "}
              <strong>Windows</strong>)
            </li>
            <li>
              <strong>Sur Windows uniquement</strong> : installé{" "}
              <strong>WSL 2</strong> via PowerShell
            </li>
            <li>
              Téléchargé et installé <strong>Docker Desktop</strong>
            </li>
            <li>
              Vérifié que <code>docker --version</code> fonctionne dans le
              terminal
            </li>
            <li>
              Exécuté <code>docker run hello-world</code> avec succès
            </li>
            <li>
              Prêt à <strong>installer n8n</strong> avec Docker !
            </li>
          </ul>
        </div>
      </Section>
    </TutoLayout>
  );
}
