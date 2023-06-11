import { HeadFC } from "gatsby";
import { Layout } from "src/components/layout";

interface WorksPageProps {

}
const WorksPage = (props: WorksPageProps) => {

  return (
    <Layout>
      <h1>Works</h1>
    </Layout>
  );
};

export default WorksPage;

export const Head: HeadFC = () => <title>Works</title>
