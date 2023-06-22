import { Container, Grid } from "@mantine/core"
import { MantineProvider } from '@mantine/core';
import { theme } from 'src/theme'
import Header from "src/components/layout/Header";
import Aside from "src/components/layout/Aside";
import Main from "src/components/layout/Main";
import Tabs from "src/components/layout/Tabs";

type LayoutProps = {
  children: React.ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={theme}
    >
      <Header />
      <Container size="xl" pt={50} px={0}>
        <Grid w="100%" m={0}>
          <Grid.Col xs={12} sm={3}>
            <Aside />
          </Grid.Col>
          <Grid.Col span="auto">
            <Tabs />
            <Main>
              {children}
            </Main>
          </Grid.Col>
        </Grid>
      </Container>
    </MantineProvider >
  )
}