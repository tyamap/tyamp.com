import { Text, Title } from "@mantine/core"
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from "src/components/layout"
import SEO from "src/components/SEO"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Title order={1}>Overview</Title>
      <Title order={2}>About me</Title>
      <Title order={2}>Skills</Title>
      <Title order={2}>Biography</Title>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO pathname="/" title="" />
