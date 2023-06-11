import { Box, Container, Flex } from "@mantine/core"
import { MantineProvider } from '@mantine/core';
import { theme } from 'src/theme'
import Header from "src/components/layout/Header";
import Navbar from "src/components/layout/Aside";
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
        <Flex wrap="wrap">
          <Navbar w={{ sm: '30%', xs: '100%' }} />
          <Box w={{ sm: '70%', xs: '100%' }}>
            <Tabs />
            <Main>
              {children}
            </Main>
          </Box>
        </Flex>
      </Container>
    </MantineProvider >
  )
}