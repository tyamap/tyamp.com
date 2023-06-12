import { HeadFC } from "gatsby";
import { Layout } from "src/components/layout";
import SEO from "src/components/SEO";

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

export const Head: HeadFC = () => <SEO pathname="/projects" title="Projects" />
