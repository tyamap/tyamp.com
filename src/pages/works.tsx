import { Title } from "@mantine/core";
import { HeadFC } from "gatsby";
import { Layout } from "src/components/layout";
import SEO from "src/components/SEO";

interface WorksPageProps {

}
const WorksPage = (props: WorksPageProps) => {

  return (
    <Layout>
      <Title>Works</Title>
    </Layout>
  );
};

export default WorksPage;

export const Head: HeadFC = () => <SEO pathname="/works" title="Works" />
