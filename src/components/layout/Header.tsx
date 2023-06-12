import { Header as MantineHeader } from '@mantine/core'
import { useSiteMetadata } from 'src/hooks/useSiteMetadata';

interface HeaderProps {

}
const Header = (props: HeaderProps) => {
  const { title } = useSiteMetadata()

  return (
    <MantineHeader height={50} p="sm">
      {title}
    </MantineHeader>
  );
};

export default Header;