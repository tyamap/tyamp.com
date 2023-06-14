import { Title, Text, Image } from "@mantine/core"
import type { HeadFC, PageProps } from "gatsby"
import React from "react"
import { Layout } from "src/components/layout"
import SEO from "src/components/SEO"
import { useProfile } from "src/hooks/useProfile"

const categories = ["Programming Languages", "Frameworks", "Tools", "Databases", "Clouds", "Others"]
const IndexPage: React.FC<PageProps> = () => {
  const profile = useProfile()
  return (
    <Layout>
      <Title>Overview</Title>
      <Title order={2}>About me</Title>
      <Text>{profile?.description?.description}</Text>
      <Title order={2}>Skills</Title>
      {categories?.map((category) => (
        <React.Fragment>
          <Title key={category} order={3}>{category}</Title>
          {profile?.skills?.filter((skill) => skill?.category === category)?.map((skill) => (
            <React.Fragment key={skill?.name}>
              <Image
                src={skill?.icon?.file?.url || ""}
                alt={`${skill?.name} icon`}
                height={32} width={32}
              />
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
      <Title order={2}>Biography</Title>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO pathname="/" title="" />
