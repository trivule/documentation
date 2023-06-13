import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Faire gagner du temps",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        "Optimisez votre temps avec Quickv : une validation dynamique et
        réactive pour gagner en efficacité."
      </>
    ),
  },
  {
    title: "Flexible & Personnalisable",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Quickv est une bibliothèque très flexible. Elle prend en charge une
        large gamme de règles de validation et vous pouvez facilement
        personnaliser son fonctionnement selon vos besoins.
      </>
    ),
  },
  {
    title: "Gratuit et open source",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Quickv est gratuit et open source, ce qui signifie que vous pouvez
        l'utiliser pour tout projet, qu'il soit commercial ou non.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
