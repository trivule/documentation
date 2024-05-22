import clsx from "clsx";
import Heading from "@theme/Heading";
import global from "@site/src/pages/index.module.css";
import particular from "./index.module.css";
const styles = { ...global, ...particular };
import declarativeImg from "@site/static/img/tr-form-declarative.png";
import imperativeImg from "@site/static/img/tr-form-imperative.png";

import Link from "@docusaurus/Link";

export default function Validation() {
  return (
    <div>
      <div className={clsx("container", styles.flexColumn, styles.validation)}>
        <h2 className="hero__subtitle">
          Trivule: There's more to it than meets the eye...
        </h2>
        <Heading as="h1" className="hero__title">
          <span>Two approaches to form validation</span>
        </Heading>
        <p className="">
          Trivule offers two distinct approaches to form validation, catering to <br />
          a wide range of developer needs and preferences.
        </p>

        <div className={clsx("row", styles.mt3)}>
          <div className={clsx("col col--6")}>
            <h2 className="text--primary">Declarative Validation</h2>
            <p className={clsx(styles.fs16)}>
              Trivule offers a declarative approach to form validation, suitable
              for beginner developers or those who don't want to write
              JavaScript code. By simply defining validation rules via custom
              HTML attributes, you can quickly add validation checks to your
              forms without coding.
            </p>
            <img
              src={declarativeImg}
              alt={declarativeImg}
              className={clsx(styles.mpb0)}
            />
            <br />
            <br />
            <Link to="/docs/validation-mode#declarative-validation">Explore Declarative Validation</Link>
          </div>
          <div className={clsx("col col--6")}>
            <h2 className="text--primary">Imperative Validation</h2>
            <p className={clsx(styles.fs16)}>
              For more advanced validation needs, Trivule also provides an
              imperative approach. This allows for complex conditional
              validation and programmatic custom validation operations. It gives
              you full control to create tailored validation flows that meet
              your specific requirements.
            </p>
            <img
              src={imperativeImg}
              alt={imperativeImg}
              className={clsx(styles.mpb0)}
            />
            <br />
            <br />
            <Link to="/docs/validation-mode#imperative-validation">Dive into Imperative Validation</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
