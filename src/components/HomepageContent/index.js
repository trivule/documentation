import clsx from "clsx";
import { Features } from "./Features";
import { ValidationTypes } from "./ValidationTypes";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function HomepageContent() {
  return (
    <section>
      <Features />
      <ValidationTypes />
      <div className={clsx(styles.getStarted)}>
        <h1>Ready to simplify form validation ?</h1>
        <p>
          Trivule is the intuitive and powerful solution you need. <br />
          Start today and save time and effort.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/tuto">
            Get started with Trivule
          </Link>   
        </div>
      </div>
    </section>
  );
}
