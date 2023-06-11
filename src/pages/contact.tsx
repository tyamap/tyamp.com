import { HeadFC } from "gatsby";
import { Layout } from "src/components/layout";

interface ContactPageProps {

}
const ContactPage = (props: ContactPageProps) => {

  return (
    <Layout>
      <h1>Contact</h1>
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <title>Contact</title>
