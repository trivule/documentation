import clsx from "clsx";
import Heading from "@theme/Heading";
import global from "@site/src/pages/index.module.css";
import particular from "./index.module.css";
const styles = { ...global, ...particular };
import installationImg from "@site/static/img/installation.png";
import Link from "@docusaurus/Link";

export default function Installation() {
  return (
    <div className={clsx(styles.bgSeparator)}>
      <div className={clsx("container", styles.flexColumn, styles.installation)}>
        <Heading as="h1" className="hero__title">
          <span>Install and Initialize Trivule Effortlessly</span>
        </Heading>
        <p className="">
          Cut through the hassle and streamline your development process with{" "}
          <br />
          Trivule's straightforward installation and initialization.
        </p>

        <div className={clsx("row row--align-center", styles.mt3)}>
          <div className={clsx("col col--6")}>
            <div className={clsx(styles.featureCardExample)}>
              <div className={styles.header}>Install and initialize code </div>
              <img
                src={installationImg}
                alt={installationImg}
                className={clsx(styles.mpb0)}
              />
            </div>
          </div>
          <div className={clsx("col col--6", styles.featureCard)}>
            <p>
              Trivule is designed to be easily integrated into your projects. With
              just two simple lines, you can set up and start using the library,
              enabling dynamic form validation without the need for complex
              JavaScript.
            </p>
            <Link to="/docs/installation">Get Started with Installation</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
