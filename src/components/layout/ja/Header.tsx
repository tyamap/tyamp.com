import {
  ActionIcon,
  Box,
  Header as MantineHeader,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { useLocation } from "@reach/router";
import { IconMail, IconMoonStars, IconSun } from "@tabler/icons-react";
import { Link } from "gatsby";
import { useSiteMetadata } from "src/hooks/useSiteMetadata";

interface HeaderProps {}
const Header = (props: HeaderProps) => {
  const { title } = useSiteMetadata();
  const location = useLocation();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <MantineHeader
      height={50}
      p="sm"
      fixed
      display="flex"
      sx={{ justifyContent: "space-between" }}
    >
      <Box
        display="inline-block"
        sx={(theme) => ({
          backgroundImage: theme.fn.gradient({
            from: "teal",
            to: "blue",
            deg: 45,
          }),
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        })}
      >
        <Link
          to="/ja"
          aria-label="go to home"
          style={{ textDecoration: "none" }}
        >
          <Text c="teal" fw={700} component="span">
            {title}
          </Text>
        </Link>
      </Box>
      <Box display="flex" sx={{ justifyContent: "space-between", gap: 6 }}>
        <ActionIcon
          variant="outline"
          color="steelblue"
          title="Toggle language to English"
          component={Link}
          to={location.pathname.replace("/ja", "")}
        >
          <Text fw={500} component="span">
            EN
          </Text>
        </ActionIcon>
        <ActionIcon
          variant="outline"
          color="steelblue"
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
        </ActionIcon>
        <ActionIcon
          variant="outline"
          color="steelblue"
          title="Go to contact page"
          component={Link}
          to="/ja/contact"
        >
          <IconMail size="1.1rem" />
        </ActionIcon>
      </Box>
    </MantineHeader>
  );
};

export default Header;
