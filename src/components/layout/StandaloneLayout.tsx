import {
  Box,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core"
import { useColorScheme, useLocalStorage } from "@mantine/hooks"
import { type ReactNode } from "react"
import { theme } from "src/theme"

type StandaloneLayoutProps = {
  children: ReactNode
}

/**
 * サイト共通のヘッダー・ナビ・タブを出さない単独ページ用レイアウト。
 */
export const StandaloneLayout = ({ children }: StandaloneLayoutProps) => {
  const preferredColorScheme = useColorScheme()
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: false,
  })
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

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
        <Box component="main" py="lg" px="md" mih="100vh">
          {children}
        </Box>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
