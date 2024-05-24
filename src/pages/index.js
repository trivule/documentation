import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import Banner from "@site/src/components/banner";
import Installation from "@site/src/components/installation";
import Using from "@site/src/components/using";
import Customization from "@site/src/components/customize";
import Management from "@site/src/components/management";
import Stylisation from "@site/src/components/styles";
import Validation from "@site/src/components/validations";
import More from "@site/src/components/more";
import trivuleLogo from "@site/static/img/logo.png";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Trivule is a library that simplifies web form validation, making it a seamless, intuitive, and effortless experience."
      image={trivuleLogo}
      url="https://trivule.com"
    >
      <Banner />
      <div className={clsx("features")}>
        <Installation />
        <Validation />
        <Using />
        <Customization />
        <Management />
        <Stylisation />
        <More />
      </div>
    </Layout>
  );
}


