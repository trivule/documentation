import clsx from "clsx";
import Heading from "@theme/Heading";
import global from "@site/src/pages/index.module.css";
import particular from "./index.module.css";
const styles = { ...global, ...particular };
import stylisationImg from "@site/static/img/stylisation.png";
import Link from "@docusaurus/Link";

export default function Stylisation() {
  return (
    <div>
      <div className={clsx("container", styles.flexColumn, styles.stylisation)}>
        <Heading as="h1" className="hero__title">
          <span>You can also style validated form fields with ease</span>
        </Heading>
        <p className="">
          Leverage Trivule's flexibility to create visually appealing forms that <br />
          seamlessly blend with your application's visual identity, while <br />
          benefiting from robust and transparent validation. <br />
        </p>

        <div className={clsx("row row--align-center", styles.mt3)}>
          <div className={clsx("col col--6")}>
            <div className={clsx(styles.featureCardExample)}>
              <div className={styles.header}>style.js</div>
              <img
                src={stylisationImg}
                alt={stylisationImg}
                className={clsx(styles.mpb0)}
              />
            </div>
          </div>
          <div className={clsx("col col--6", styles.featureCard)}>
            <p>
              Trivule offers complete control over the styling of validated and
              invalidated form fields. Customize the appearance of your forms by
              applying custom CSS classes during validation, ensuring a
              consistent user experience that aligns with your design.
            </p>
            <Link to="/docs/form-validation">Discover Form Styling</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
