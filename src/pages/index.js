import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import HomepageContent from "@site/src/components/HomepageContent";

function HomepageHeader() {
  return (
    <header className={clsx("hero features", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <span className="text--primary">Triv</span><span>ule</span>
        </Heading>
        <p className="hero__subtitle">
          Trivule enables dynamic form validation <br /> without needing to
          write or know JavaScript,
          <br /> saving developers time and effort.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs">
            Read docs
          </Link>
          <Link className="button button--secondary button--lg" to="/">
            GitHub
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
      title={`${siteConfig.title}`}
      description="Trivule is a library that simplifies web form validation, making it a seamless, intuitive, and effortless experience."
    >
      <HomepageHeader />
      <main>
        <HomepageContent />
      </main>
    </Layout>
  );
}
