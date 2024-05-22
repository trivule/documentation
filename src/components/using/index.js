import clsx from "clsx";
import Heading from "@theme/Heading";
import global from "@site/src/pages/index.module.css";
import particular from "./index.module.css";
const styles = { ...global, ...particular };
import effortlessImg from "@site/static/img/effortless.png";
import Link from "@docusaurus/Link";

export default function Using() {
  return (
    <div className={clsx(styles.bgSeparator)}>
      <div className={clsx("container", styles.flexColumn, styles.using)}>
        <Heading as="h1" className="hero__title">
          <span>Validate Forms Intuitively with HTML Attributes</span>
        </Heading>
        <p className="">
          Simplify your development workflow and provide an intuitive user <br />
          experience by leveraging Trivule's streamlined approach to form  <br />
          validation.
        </p>

        <div className={clsx("row row--align-center", styles.mt3)}>
          <div className={clsx("col col--6")}>
            <div className={clsx(styles.featureCardExample)}>
              <div className={styles.header}>Example of use </div>
              <img
                src={effortlessImg}
                alt={effortlessImg}
                className={clsx(styles.mpb0)}
              />
            </div>
          </div>
          <div className={clsx("col col--6", styles.featureCard)}>
            <p>
              Trivule revolutionizes form validation by allowing you to specify
              validation rules directly in your HTML markup using custom
              attributes. No need to write JavaScript code – Trivule
              automatically validates your input fields based on the defined
              criteria.
            </p>
            <Link to="/docs/attributes">Learn about HTML attribute validation</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
