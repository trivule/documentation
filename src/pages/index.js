import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/tutoriel"
          >
            Tutoriel - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Valider vos formulaire avec facilité |  ${siteConfig.title}`}
      description="Quickv est une librairie JavaScript légère et facile à utiliser pour la validation côté client des formulaires HTML. Ajoutez rapidement des règles de validation à vos champs de formulaire en utilisant des attributs HTML personnalisés, sans avoir besoin de beaucoup de code JavaScript supplémentaire. Simplifiez le processus de validation et gagnez du temps grâce à Quickv, la solution idéale pour une validation efficace des formulaires HTML côté client. "
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
