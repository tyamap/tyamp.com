import { Flex, Header as MantineHeader } from '@mantine/core'

interface HeaderProps {

}
const Header = (props: HeaderProps) => {

  return (
    <MantineHeader height={50} p="sm">
        SITE NAME
    </MantineHeader>
  );
};

export default Header;