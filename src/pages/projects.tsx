import { Card, Title, Text, Flex, Grid, Stack, Badge, Group } from "@mantine/core";
import { HeadFC } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Layout } from "src/components/layout";
import Link from "src/components/Link";
import SEO from "src/components/SEO";
import { useProjects } from "src/hooks/useProjects";
import { formatDate, stringToColor } from "src/utils";

interface ProjectsPageProps {

}
const ProjectsPage = (props: ProjectsPageProps) => {
  const projects = useProjects()

  return (
    <Layout>
      <Title display="none">Projects</Title>
      <Stack>
        {projects?.nodes?.map((project) => (
          <Card key={project?.name} withBorder p={0}>
            <Grid >
              <Grid.Col xs={12} sm={4}>
                <Link href={project.url} label={project.name!}>
                  <GatsbyImage
                    image={project.thumbnail?.gatsbyImageData!}
                    alt={`${project.name} image`}
                  />
                </Link>
              </Grid.Col>
              <Grid.Col xs={12} sm={8} p="md"
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                <Title order={3}>
                  <Link href={project.url}>
                    {project?.name}
                  </Link>
                </Title>
                <Text sx={{ flexGrow: 1 }}>
                  {project?.description?.description}
                </Text>
                <Flex align="center" sx={{ justifyContent: 'space-between' }}>
                  <Group spacing="xs">
                    {project.startDate &&
                      <Text c="dimmed">{formatDate(project.startDate)} ~</Text>
                    }
                    {project?.tags?.map((tag) => (
                      <Badge key={tag} color={stringToColor(tag!)}>{tag}</Badge>
                    ))}
                  </Group>
                  {project.githubLink && (
                    <Link href={project.githubLink} label="github link">
                      <StaticImage src="../images/github-mark.png" alt="" width={32} />
                    </Link>
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
