import {
  ColorScheme,
  ColorSchemeProvider,
  Container,
  Grid,
} from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import { theme } from "src/theme";
import Header from "src/components/layout/ja/Header";
import Aside from "src/components/layout/ja/Aside";
import Main from "src/components/layout/ja/Main";
import Tabs from "src/components/layout/ja/Tabs";
import { useColorScheme, useLocalStorage } from "@mantine/hooks";

type LayoutProps = {
  children: React.ReactNode;
};
export const Layout = ({ children }: LayoutProps) => {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: false,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme, ...theme }}
      >
        <Header />
        <Container size="xl" pt={50} px={0}>
          <Grid w="100%" m={0}>
            <Grid.Col xs={12} sm={3}>
              <Aside />
            </Grid.Col>
            <Grid.Col span="auto">
              <Tabs />
              <Main>{children}</Main>
            </Grid.Col>
          </Grid>
        </Container>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
