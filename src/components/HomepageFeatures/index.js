import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function HomepageFeatures() {
  return (
    <section>
      <div className={clsx("container", styles.padY5, styles.features)}>
        <Heading as="h1" className={clsx("hero__title", styles.margB3)}>
          Features
        </Heading>
        <div className="row">
          <div className="col col--6">
            <div className={clsx(styles.features_card, styles.margB3, styles.intallation)}>
              <div></div>
                <h2 className="text--primary">Easy to install and initialize</h2>
                <p>
                  Trivule is straightforward to install and initialize.
                  Installation requires just two lines of code, making it
                  accessible even for those without JavaScript knowledge.
                  Initialization is equally simple. Once installed, you can
                  immediately begin using Trivule by adding custom attributes to
                  your HTML forms. These attributes allow you to define complex
                  validation rules without writing additional JavaScript code.
                  Trivule seamlessly integrates with your forms, enabling dynamic
                  validation with minimal setup.
                </p>
            </div>
            <div className={clsx(styles.features_card, styles.customize)}>
              <div></div>
              <h2 className="text--primary">Easy to customize and extend</h2>
              <p>
                Trivule allows you to customize validation messages, rules, and
                event triggers to suit your specific needs. You can create
                custom rules for unique validation scenarios and define tailored
                feedback messages in different languages for an
                internationalized user experience. Additionally, you can control
                when validation checks occur, such as on form submission or
                input changes, providing a smooth, user-friendly form
                experience. Trivule's options enable you to streamline form
                validation while saving time and effort.
              </p>
            </div>
          </div>
          <div className="col col--6">
            <div className={clsx(styles.features_card, styles.margT10, styles.margB3, styles.effortless)}>
              <div></div>
              <h2 className="text--primary">Effortless and Intuitive Usage</h2>
              <p>
                Trivule simplifies form validation with predefined rules that
                you can easily apply to your form fields using custom HTML
                attributes. These attributes let you specify validation criteria
                directly within your HTML code, such as required fields,
                character length, patterns, or value ranges. By adding these
                attributes to your form elements, Trivule automatically handles
                the validation process for you. When users interact with your
                form, Trivule checks their inputs against the specified rules,
                ensuring data accuracy and consistency without requiring you to
                write any JavaScript code. This streamlined approach saves time
                and effort, making form validation effortless and efficient.
              </p>
            </div>
            <div className={clsx(styles.features_card, styles.effortless)}>
              <div></div>
              <h2 className="text--primary">Fourth feature</h2>
              <p>
                Trivule allows you to customize validation messages, rules, and
                event triggers to suit your specific needs. You can create
                custom rules for unique validation scenarios and define tailored
                feedback messages in different languages for an
                internationalized user experience. Additionally, you can control
                when validation checks occur, such as on form submi ssion or
                input changes, providing a smooth, user-friendly form
                experience. Trivule's options enable you to streamline form
                validation while saving time and effort.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.getStarted)}>
        <h1>Ready to simplify form validation ?</h1>
        <p>Trivule is the intuitive and powerful solution you need.  <br/>
          Start today and save time and effort.</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/tuto">
            Get started with Trivule
          </Link>
        </div>
      </div>
    </section>
  );
}
