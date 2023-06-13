import { Title } from "@mantine/core";
import { HeadFC } from "gatsby";
import { Layout } from "src/components/layout";
import SEO from "src/components/SEO";

interface ContactPageProps {

}
const ContactPage = (props: ContactPageProps) => {

  return (
    <Layout>
      <Title>Contact</Title>
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <SEO pathname="/contact" title="Contact" />
