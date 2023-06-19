import { Title, Text, Image, Flex, SimpleGrid, Timeline } from "@mantine/core"
import type { HeadFC, PageProps } from "gatsby"
import React from "react"
import { Layout } from "src/components/layout"
import SEO from "src/components/SEO"
import { useProfile } from "src/hooks/useProfile"

const categories = ["Programming Languages", "Frameworks", "Databases", "Tools", "Clouds", "Others"]
const IndexPage: React.FC<PageProps> = () => {
  const profile = useProfile()
  return (
    <Layout>
      <Title display="none">Overview</Title>
      <Title order={2} id="about" mb="md">About me</Title>
      <Text mb="sm">{profile?.description?.description}</Text>
      {categories?.map((category) => (
        <React.Fragment key={category}>
          <Title key={category} order={3}>{category}</Title>
          <SimpleGrid
            cols={6}
            breakpoints={[{ maxWidth: 'xs', cols: 3 }]}
            my="sm"
          >
            {profile?.skills?.filter((skill) => skill?.category === category)?.map((skill) => (
              <Flex direction="column" align="center" key={skill?.name}>
                <Image
                  src={skill?.icon?.file?.url || ""}
                  alt={`${skill?.name} icon`}
                  height={32} width={32}
                />
                <Text c="dimmed">{skill?.name}</Text>
              </Flex>
            ))}
          </SimpleGrid>
        </React.Fragment>
      ))
      }
      <Title id="biography" order={2} mb="md">Biography</Title>
      <Timeline active={0} py="md">
        {profile?.histories?.map((history) => {
          const time = history?.split(",")[0]
          const content = history?.split(",")[1]
          return <Timeline.Item
            key={history}
            title={time}
          >
            <Text>{content}</Text>
          </Timeline.Item>
        })}
      </Timeline>
    </Layout >
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO pathname="/" title="" />
