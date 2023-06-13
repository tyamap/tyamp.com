import { Box, Container, Flex, Grid } from "@mantine/core"
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
      <Container size="xl" px={0}>
        <Grid>
          <Grid.Col xs={12} sm={3}>
            <Aside />
          </Grid.Col>
          <Grid.Col span="auto">
            <Box>
              <Tabs />
              <Main>
                {children}
              </Main>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </MantineProvider >
  )
}