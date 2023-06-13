import { Title } from "@mantine/core";
import { HeadFC } from "gatsby";
import { Layout } from "src/components/layout";
import SEO from "src/components/SEO";

interface ProjectsPageProps {

}
const ProjectsPage = (props: ProjectsPageProps) => {

  return (
    <Layout>
      <Title>Projects</Title>
    </Layout>
  );
};

export default ProjectsPage;

export const Head: HeadFC = () => <SEO pathname="/projects" title="Projects" />
