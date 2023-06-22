import { ActionIcon, Box, Header as MantineHeader, Text } from '@mantine/core'
import { IconMail } from '@tabler/icons-react';
import { Link } from 'gatsby';
import { useSiteMetadata } from 'src/hooks/useSiteMetadata';

interface HeaderProps {

}
const Header = (props: HeaderProps) => {
  const { title } = useSiteMetadata()

  return (
    <MantineHeader height={50} p="sm" fixed display="flex" sx={{ justifyContent: "space-between" }}>
      <Box display="inline-block"
        sx={(theme) => ({
          backgroundImage: theme.fn.gradient({ from: 'teal', to: 'blue', deg: 45 }),
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        })}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Text c="teal" fw={700} component='span'>
            {title}
          </Text>
        </Link>
      </Box>
      <Link to="/contact">
        <IconMail color='steelblue' />
      </Link>
    </MantineHeader>
  );
};

export default Header;