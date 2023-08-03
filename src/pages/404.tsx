import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import SEO from "src/components/SEO"
import PageTitle from "src/components/PageTitle"
import { Layout } from "src/components/layout"
import { Button, Text } from "@mantine/core"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <PageTitle>Page not found</PageTitle>
      <Text component="p">
        Sorry 😔, we couldn’t find what you were looking for...
      </Text>
      <Button
        component={Link}
        to="/"
        variant="gradient" 
        gradient={{ from: 'teal', to: 'blue' }}
      >
        Go Home
      </Button>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <SEO title="404" />
