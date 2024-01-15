import { Title, Text, Flex, SimpleGrid, Timeline, HoverCard } from "@mantine/core"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import React from "react"
import { Layout } from "src/components/layout"
import PageTitle from "src/components/PageTitle"
import SEO from "src/components/SEO"

const categories = ["Programming Languages", "Frameworks", "Databases", "Tools", "Clouds", "Others"]
const IndexPage = ({ data }: PageProps<Queries.Query>) => {
  const profile = data.contentfulProfile;
  return (
    <Layout>
      <PageTitle>Overview</PageTitle>
      <Title order={2} id="about" mb="md">
        About
      </Title>
      <Text mb="sm" sx={{ whiteSpace: "break-spaces" }}>
        {profile?.description?.description}
      </Text>
      <Title order={2} id="about" mb="md">
        Skills
      </Title>
      <Text mb="sm">Hover over the icon to check the years of experience</Text>
      {categories?.map((category) => (
        <React.Fragment key={category}>
          <Title key={category} order={3}>
            {category}
          </Title>
          <SimpleGrid
            cols={6}
            breakpoints={[{ maxWidth: "xs", cols: 3 }]}
            my="sm"
          >
            {profile?.skills
              ?.filter((skill) => skill?.category === category)
              .sort((a, b) => (b?.level || 0) - (a?.level || 0))
              .map((skill) => (
                <Flex direction="column" align="center" key={skill?.name}>
                  <HoverCard offset={-1} closeDelay={500}>
                    <HoverCard.Target>
                      <img
                        src={skill?.icon?.file?.url || ""}
                        alt={`${skill?.name} icon`}
                        height={32}
                        width={32}
                      />
                    </HoverCard.Target>
                    <HoverCard.Dropdown p="xs">
                      <Text fw={700} c="indigo">
                        {(skill?.level || 0) > 0
                          ? `${skill?.level}+ years`
                          : "Hobby"}
                      </Text>
                    </HoverCard.Dropdown>
                    <Text>{skill?.name}</Text>
                  </HoverCard>
                </Flex>
              ))}
          </SimpleGrid>
        </React.Fragment>
      ))}
      <Title id="biography" order={2} mb="md">
        Biography
      </Title>
      <Timeline active={0} py="md">
        {profile?.histories?.map((history) => {
          const time = history?.split(",")[0];
          const content = history?.split(",")[1];
          return (
            <Timeline.Item key={history} title={time}>
              <Text>{content}</Text>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </Layout>
  );
};

export default IndexPage

export const Head: HeadFC = () => <SEO pathname="/" />

export const query = graphql`
  {
    contentfulProfile(userId: { eq: "tyamap" }, node_locale: { eq: "en-US" }) {
      name
      userId
      label
      histories
      description {
        description
      }
      skills {
        name
        category
        level
        icon {
          file {
            url
          }
        }
      }
      socials {
        link
        icon {
          file {
            url
          }
        }
      }
      avatar {
        description
        title
        gatsbyImageData
      }
    }
  }
`;
