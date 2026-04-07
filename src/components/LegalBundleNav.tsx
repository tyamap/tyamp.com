import { Anchor, Box, Group, Text } from "@mantine/core"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import { Fragment } from "react"
import {
  getLegalPageBundle,
  type LegalPageBundle,
} from "src/data/legalPageBundles"

type LegalBundleNavProps =
  | { bundleId: string }
  | { bundle: LegalPageBundle }

function normalizePath(path: string) {
  return path.replace(/\/$/, "") || "/"
}

function isCurrentPage(pathname: string, to: string) {
  return normalizePath(pathname) === normalizePath(to)
}

/**
 * プライバシーポリシー・利用規約・（将来）LP などをひとまとめにしたナビ。
 */
export function LegalBundleNav(props: LegalBundleNavProps) {
  const location = useLocation()
  const bundle =
    "bundle" in props ? props.bundle : getLegalPageBundle(props.bundleId)

  if (!bundle) {
    return null
  }

  return (
    <Box
      component="nav"
      aria-label={`${bundle.title} — legal & info`}
      mb="xl"
    >
      <Text fw={700} size="lg" mb="sm">
        {bundle.title}
      </Text>
      <Group spacing={0} sx={{ flexWrap: "wrap", rowGap: 6 }}>
        {bundle.items.map((item, index) => {
          const active = isCurrentPage(location.pathname, item.to)
          return (
            <Fragment key={item.to}>
              {index > 0 ? (
                <Text component="span" c="dimmed" size="sm" px={4}>
                  |
                </Text>
              ) : null}
              {active ? (
                <Text
                  component="span"
                  size="sm"
                  fw={600}
                  color="cyan"
                  aria-current="page"
                >
                  {item.label}
                </Text>
              ) : (
                <Anchor
                  component={Link}
                  to={item.to}
                  size="sm"
                  fw={500}
                  underline
                >
                  {item.label}
                </Anchor>
              )}
            </Fragment>
          )
        })}
      </Group>
    </Box>
  )
}
