import clsx from "clsx";
import Heading from "@theme/Heading";
import global from "@site/src/pages/index.module.css";
import particular from "./index.module.css";
const styles = { ...global, ...particular };
import managementImg from "@site/static/img/management.png";
import Link from "@docusaurus/Link";

export default function Management() {
  return (
    <div className={clsx(styles.bgSeparator)}>
      <div className={clsx("container", styles.flexColumn, styles.management)}>
        <Heading as="h1" className="hero__title">
          <span>Dynamically Manage Validated and Invalidated Input Fields</span>
        </Heading>
        <p className="">
          Harness the power of Trivule's dynamic input validation management to{" "}
          <br />
          craft a seamless and responsive form experience for your users.
        </p>

        <div className={clsx("row row--align-center", styles.mt3)}>
          <div className={clsx("col col--6")}>
            <div className={clsx(styles.featureCardExample)}>
              <div className={styles.header}>Example of use </div>
              <img
                src={managementImg}
                alt={managementImg}
                className={clsx(styles.mpb0)}
              />
            </div>
          </div>
          <div className={clsx("col col--6", styles.featureCard)}>
            <p>
              Trivule provides methods to dynamically remove or manipulate
              validated and invalidated input fields based on your application's
              requirements. This flexibility allows you to create a tailored
              form experience, ensuring optimal usability and performance.
            </p>
            {/* <Link to="/">Discover Dynamic Field Management</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
