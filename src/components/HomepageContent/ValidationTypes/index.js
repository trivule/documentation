import clsx from "clsx";
import Heading from "@theme/Heading";
import ownStyles from "./styles.module.css";
import parentStyles from "../styles.module.css";
import installationImg from "@site/static/img/installation.png";

const styles = { ...ownStyles, ...parentStyles };

export function ValidationTypes() {
  return (
    <div className={clsx("container", styles.center)}>
      <Heading as="h1" className={clsx("hero__title")}>
        Two approaches to form validation
      </Heading>
      <div className={clsx(styles.underline, styles.margB3)}>
        <div></div>
      </div>
      <div className={clsx("row row--align-center", styles.margB3)}>
        <div className="col col--6">
          <h2 className="text--primary">Declarative Validation</h2>
          <p>
            Trivule offers a declarative approach to form validation, suitable
            for beginner developers or those who don't want to write JavaScript
            code. By simply defining validation rules via custom HTML
            attributes, you can quickly add validation checks to your forms
            without coding.
          </p>
        </div>
        <div className="col col--6">
          <img src={installationImg} alt="" />
        </div>
      </div>
      <div className="row row--align-center">
        <div className={clsx("col col--6", styles.orderMin)}>
          <img src={installationImg} alt="" />
        </div>
        <div className="col col--6">
          <h2 className="text--primary">Imperative Validation</h2>
          <p>
            For more advanced validation needs, Trivule also provides an
            imperative approach. This allows for complex conditional validation
            and programmatic custom validation operations. It gives you full
            control to create tailored validation flows that meet your specific
            requirements.
          </p>
        </div>
        <div className={clsx("col col--6", styles.orderMax)}>
          <img src={installationImg} alt="" />
        </div>
      </div>
    </div>
  );
}
