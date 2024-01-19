import { Box, Header as MantineHeader, Text } from "@mantine/core";
import { IconMail } from "@tabler/icons-react";
import { Link } from "gatsby";
import { useSiteMetadata } from "src/hooks/useSiteMetadata";

interface HeaderProps {}
const Header = (props: HeaderProps) => {
  const { title } = useSiteMetadata();

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
        <Link to="/" aria-label="go to home" style={{ textDecoration: "none" }}>
          <Text c="teal" fw={700} component="span">
            {title}
          </Text>
        </Link>
      </Box>
      <Box display="flex" sx={{ justifyContent: "space-between" }}>
        <Box mr={10} sx={{ fontSize: 12, lineHeight: 2 }}>
          <Text c="steelblue" component="span">
            EN
          </Text>
          <Text c="steelblue" mx={3} component="span">
            /
          </Text>
          <Link
            to="/ja"
            aria-label="Japanaese"
            style={{ textDecoration: "none" }}
          >
            <Text c="steelblue" fw={700} component="span">
              JA
            </Text>
          </Link>
        </Box>
        <Link to="/contact" aria-label="go to contact page">
          <IconMail color="steelblue" />
        </Link>
      </Box>
    </MantineHeader>
  );
};

export default Header;
