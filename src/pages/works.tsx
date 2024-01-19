import { Badge, Group, Title, Text, Box, Stack } from "@mantine/core";
import { IconLink, IconLock } from "@tabler/icons-react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { Layout } from "src/components/layout/en";
import Link from "src/components/Link";
import PageTitle from "src/components/PageTitle";
import SEO from "src/components/SEO";
import { formatDate, stringToColor } from "src/utils";

const WorksPage = ({ data }: PageProps<Queries.Query>) => {
  const works = data.allContentfulClientWork;

  return (
    <Layout>
      <PageTitle>Client works</PageTitle>
      {works?.nodes?.map((work) => (
        <Box
          key={work.name}
          py="md"
          px="xs"
          sx={{
            borderBottom: '1px lightgray solid',
          }}
        >
          <Stack spacing="xs">
            <Group spacing="xs">
              {work.url
                ? <IconLink />
                : <IconLock />
              }
              <Title order={3}>
                <Link href={work.url}>
                  {work?.name}
                </Link>
              </Title>
            </Group>
            <Text>Client: {work.client}</Text>
            <Group spacing="xs">
              {work.startDate &&
                <Text c="dimmed">{formatDate(work.startDate)} ~</Text>
              }
              {work.tags?.map((tag) => (
                <Badge key={tag} color={stringToColor(tag!)}>{tag}</Badge>
              ))}
            </Group>
          </Stack>
        </Box>
      ))}
    </Layout>
  );
};

export default WorksPage;

export const Head: HeadFC = () => <SEO pathname="/works"
  title="Client Works"
  description="Here are some of the client work I have been involved in as a freelancer. Please check out the links and feel free to contact me!"
/>

export const query = graphql`
  {
    allContentfulClientWork(
      sort: { startDate: DESC }
      filter: { node_locale: { eq: "en-US" } }
    ) {
      totalCount
      nodes {
        tags
        client
        name
        startDate
        url
      }
    }
  }
`;
