import type { HeadFC, PageProps } from "gatsby"
import { Layout } from "src/components/layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Overview</h1>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Overview</title>
