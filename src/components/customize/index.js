import clsx from "clsx";
import Heading from "@theme/Heading";
import global from "@site/src/pages/index.module.css";
import particular from "./index.module.css";
const styles = { ...global, ...particular };
import customizationImg from "@site/static/img/customization.png";
import Link from "@docusaurus/Link";

export default function Customization() {
  return (
    <div className={clsx(styles.bgSeparator)}>
      <div
        className={clsx("container", styles.flexColumn, styles.customization)}
      >
        <Heading as="h1" className="hero__title">
          <span>Customize and Extend Validation Rules and Messages</span>
        </Heading>
        <p className="">
          Take control of the validation process and create a user-friendly{" "}
          <br />
          experience by fine-tuning Trivule to seamlessly integrate with your{" "}
          <br />
          application's needs.
        </p>

        <div className={clsx("row row--align-center", styles.mt3)}>
          <div className={clsx("col col--6")}>
            <div className={clsx(styles.featureCardExample)}>
              <div className={styles.header}>Tailor Validation to Your Needs </div>
              <img
                src={customizationImg}
                alt={customizationImg}
                className={clsx(styles.mpb0)}
              />
            </div>
          </div>
          <div className={clsx("col col--6", styles.featureCard)}>
            <p>
              Trivule offers extensive customization options, empowering you to
              define your own validation rules, error messages, and validation
              triggers. Create unique rules to meet your specific requirements,
              and ensure a localized experience with internationalized error
              messages.
            </p>
            <Link to="/docs">Explore Customization Options</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
