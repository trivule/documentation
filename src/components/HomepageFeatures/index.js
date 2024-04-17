import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import InstallationImageUrl from "@site/static/img/installation.png";
import CustumImageUrl from "@site/static/img/custum.png";
import EffortlessImageUrl from "@site/static/img/effortless.png";

export default function HomepageFeatures() {
  return (
    <section>
      <div className={clsx("container", styles.padY5)}>
        <div className="row row--align-center">
          <div className={clsx("col col--6")}>
            <h2>Easy to install and initialize</h2>
            <p>
              Trivule is straightforward to install and initialize. Installation
              requires just two lines of code, making it accessible even for
              those without JavaScript knowledge. Initialization is equally
              simple. Once installed, you can immediately begin using Trivule by
              adding custom attributes to your HTML forms. These attributes
              allow you to define complex validation rules without writing
              additional JavaScript code. Trivule seamlessly integrates with
              your forms, enabling dynamic validation with minimal setup.
            </p>
          </div>
          <div className={clsx("col col--6")}>
            <img src={InstallationImageUrl} />
          </div>
        </div>
      </div>
      <div className={clsx("container", styles.padY5)}>
        <div className="row row--align-center">
          <div className={clsx("col col--6")}>
            <img src={EffortlessImageUrl} />
          </div>
          <div className={clsx("col col--6")}>
            <h2>Effortless and Intuitive Usage</h2>
            <p>
              Trivule simplifies form validation with predefined rules that you
              can easily apply to your form fields using custom HTML attributes.
              These attributes let you specify validation criteria directly
              within your HTML code, such as required fields, character length,
              patterns, or value ranges. By adding these attributes to your form
              elements, Trivule automatically handles the validation process for
              you. When users interact with your form, Trivule checks their
              inputs against the specified rules, ensuring data accuracy and
              consistency without requiring you to write any JavaScript code.
              This streamlined approach saves time and effort, making form
              validation effortless and efficient.
            </p>
          </div>
        </div>
      </div>

      <div className={clsx("container", styles.padY5)}>
        <div className="row row--align-center">
          <div className={clsx("col col--6")}>
            <h2>Easy to customize and extend</h2>
            <p>
              Trivule allows you to customize validation messages, rules, and
              event triggers to suit your specific needs. You can create custom
              rules for unique validation scenarios and define tailored feedback
              messages in different languages for an internationalized user
              experience. Additionally, you can control when validation checks
              occur, such as on form submission or input changes, providing a
              smooth, user-friendly form experience. Trivule's options enable
              you to streamline form validation while saving time and effort.
            </p>
          </div>
          <div className={clsx("col col--6")}>
            <img src={CustumImageUrl} />
          </div>
        </div>
      </div>
    </section>
  );
}
