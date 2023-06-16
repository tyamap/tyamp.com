import { Badge, Group, Title, Text, Flex, Box, Stack, ActionIcon } from "@mantine/core";
import { IconLink, IconLinkOff } from "@tabler/icons-react";
import { HeadFC } from "gatsby";
import { Layout } from "src/components/layout";
import SEO from "src/components/SEO";
import { useClientWorks } from "src/hooks/useClientWorks";
import { formatDate } from "src/utils";

interface WorksPageProps {

}
const WorksPage = (props: WorksPageProps) => {
  const works = useClientWorks()

  return (
    <Layout>
      <Title mb="md">Client works</Title>
      {works?.nodes?.map((work) => (
        <Box
          key={work.name}
          p="md"
          sx={{
            borderBottom: '1px lightgray solid',
            borderTop: '1px lightgray solid'
          }}
        >
          <Stack spacing="xs">
            <Group spacing="xs">
              <a href={work.url || undefined} target="_blank">
                <Title order={3}>
                  {work?.name}
                </Title>
              </a>
              {work.url
                ? <IconLink />
                : <IconLinkOff />
              }
            </Group>
            <Text>Client: {work.client}</Text>
            <Group spacing="xs">
              {work.tags?.map((tag) => (
                // TODO: use stringToColorCode
                <Badge key={tag} color="cyan">{tag}</Badge>
              ))}
              {work.startDate &&
                <Text c="dimmed">{formatDate(work.startDate)} ~</Text>
              }
            </Group>
          </Stack>
        </Box>
      ))}
    </Layout>
  );
};

export default WorksPage;

export const Head: HeadFC = () => <SEO pathname="/works" title="Works" />
