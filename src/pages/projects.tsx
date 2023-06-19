import { Card, Title, Text, Flex, Grid, Stack, Badge, Group, ActionIcon } from "@mantine/core";
import { HeadFC } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Layout } from "src/components/layout";
import SEO from "src/components/SEO";
import { useProjects } from "src/hooks/useProjects";
import { formatDate } from "src/utils";

interface ProjectsPageProps {

}
const ProjectsPage = (props: ProjectsPageProps) => {
  const projects = useProjects()

  return (
    <Layout>
      <Title mb="md">Projects</Title>
      <Stack>
        {projects?.nodes?.map((project) => (
          <Card key={project?.name} withBorder p={0} component="a" href={project.url || '#'} target="_blank">
            <Grid >
              <Grid.Col xs={12} sm={4}>
                <GatsbyImage
                  image={project.thumbnail?.gatsbyImageData!}
                  alt={`${project.name} image`}
                />
              </Grid.Col>
              <Grid.Col xs={12} sm={8} p="md"
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                <Title order={3}>{project?.name}</Title>
                <Text sx={{ flexGrow: 1 }}>
                  {project?.description?.description}
                </Text>
                <Flex align="center" sx={{ justifyContent: 'space-between' }}>
                  <Group spacing="xs">
                    {project.startDate &&
                      <Text c="dimmed">{formatDate(project.startDate)} ~</Text>
                    }
                    {project?.tags?.map((tag) => (
                      // TODO: use stringToColorCode
                      <Badge key={tag} color="cyan">{tag}</Badge>
                    ))}
                  </Group>
                  {project.githubLink && (
                    <ActionIcon>
                      <a href={project.githubLink} target="_blank" rel="noopener">
                        <StaticImage src="../images/github-mark.png" alt="" width={32} />
                      </a>
                    </ActionIcon>
                  )}
                </Flex>
              </Grid.Col>
            </Grid>
          </Card>
        ))}
      </Stack>
    </Layout >
  );
};

export default ProjectsPage;

export const Head: HeadFC = () => <SEO pathname="/projects" title="Projects" />
