import clsx from "clsx";
import Heading from "@theme/Heading";
import global from "@site/src/pages/index.module.css";
import particular from "./index.module.css";
import Link from "@docusaurus/Link";
const styles = { ...global, ...particular };

export default function More() {
  return (
    <div>
      <div className={clsx("container", styles.flexColumn, styles.more)}>
        <Heading as="h1" className="hero__title">
          <span className="text--primary">
            Unlock the Full Potential of Trivule
          </span>
        </Heading>
        <p>
          While we've covered some of Trivule's key features, <br />
          this merelyscratches the surface of its capabilities. From advanced{" "}
          <br />
          validation techniques to seamless integration options, Trivule offers
          a <br />
          wealth of powerful tools to elevate your form validation experience.
        </p>
        <div className={clsx(styles.flex, styles.center)}>
          <Link to="/docs">
            <button className={clsx(styles.btn_bg)}>
              Explore Trivule's Robust Features
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
