import clsx from "clsx";
import Heading from "@theme/Heading";
import ownStyles from "./styles.module.css";
import parentStyles from "../styles.module.css";
import installationImg from "@site/static/img/installation.png";
import customizeImg from "@site/static/img/custum.png";
import effortlessImg from "@site/static/img/effortless.png";

const styles = { ...ownStyles, ...parentStyles };

export function Features() {
  return (
    <div className={clsx("container", styles.padY5, styles.center)}>
      <Heading as="h1" className={clsx("hero__title")}>
        Features
      </Heading>
      <div className={clsx(styles.underline, styles.margB1)}>
        <div></div>
      </div>
      <p>
        Trivule provides a single validation interface suitable for modern{" "}
        <br />
        frameworks and vanilla JavaScript applications. It caters to both <br />
        beginner and advanced developers.
      </p>
      <div className="row">
        <div className="col col--6">
          <div className={clsx(styles.features_card)}>
            <div></div>
            <h2 className="text--primary">Easy to install and initialize</h2>
            <p>
              Trivule installs in two lines. Add custom attributes to enable
              dynamic form validation without JavaScript.
            </p>
            <img src={installationImg} alt="" />
          </div>
          <div
            className={clsx(
              styles.features_card,
              styles.margB3MediaScreen,
              styles.effortless
            )}
          >
            <div></div>
            <h2 className="text--primary">Effortless and Intuitive Usage</h2>
            <p>
              Trivule simplifies form validation using predefined rules applied
              via custom HTML attributes. Specify criteria in HTML, Trivule
              automatically validates inputs. Streamlined approach for efficient
              validation without JavaScript.
            </p>
            <img src={effortlessImg} alt="" />
          </div>
        </div>
        <div className="col col--6">
          <div className={clsx(styles.features_card, styles.margT10)}>
            <div></div>
            <h2 className="text--primary">Easy to customize and extend</h2>
            <p>
              Trivule customizes validation: rules, messages, triggers. Create
              unique rules and internationalized messages. Control validation
              timing for user-friendly experience. Streamlines validation
              efficiently.
            </p>
            <img src={customizeImg} alt="" />
          </div>
          <div className={clsx(styles.features_card)}>
            <div></div>
            <h2 className="text--primary">
              Dynamic Input Validation Management
            </h2>
            <p>
              Trivule provides methods to dynamically remove or manipulate
              validated and invalidated input fields based on your application's
              needs, allowing you to create a tailored form experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
