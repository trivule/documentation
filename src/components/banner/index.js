import clsx from "clsx";
import Heading from "@theme/Heading";
import trivuleLogo from "@site/static/img/logo.png";
import global from "@site/src/pages/index.module.css";
import particular from "./index.module.css";
import Link from "@docusaurus/Link";
const styles = { ...global, ...particular };

export default function Banner() {
  return (
    <div className={clsx(styles.banner)}>
      <img src={trivuleLogo} alt="trivule logo" width={100} />
      <Heading as="h1" className="hero__title">
        <span>Trivule</span>
      </Heading>
      <p className="hero__subtitle">
        Dynamic form validation without needing
        <br /> to write or know JavaScript, saving
        <br /> developers time and effort.
      </p>
      <div className={clsx(styles.flex)}>
        <Link to="/docs">
          <button className={clsx(styles.btn_bg)}>
            Get started with Trivule
          </button>
        </Link>
        <Link to="/try-trivule">
          <button className={clsx(styles.btn)}>Try Trivule</button>
        </Link>
      </div>
    </div>
  );
}
