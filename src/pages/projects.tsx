import { HeadFC } from "gatsby";
import { Layout } from "src/components/layout";

interface ProjectsPageProps {

}
const ProjectsPage = (props: ProjectsPageProps) => {

  return (
    <Layout>
      <h1>Projects</h1>
    </Layout>
  );
};

export default ProjectsPage;

export const Head: HeadFC = () => <title>Projects</title>
