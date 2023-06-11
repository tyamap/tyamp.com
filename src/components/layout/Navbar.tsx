import { Text, Navbar as MantineNavbar, Title, AspectRatio, Avatar } from "@mantine/core"

interface NavbarProps {
}
const Navbar = (props: NavbarProps) => {
  return (
    <MantineNavbar width={{ base: '30%' }} p="lg">
      <MantineNavbar.Section>
        <AspectRatio ratio={1} w="100%" mx="auto">
          <Avatar radius="100%" size="100%" />
        </AspectRatio>
      </MantineNavbar.Section>
      <MantineNavbar.Section>
        <Title order={2}>ID</Title>
        <Text c="dimmed">Name</Text>
      </MantineNavbar.Section>
      <MantineNavbar.Section>
        <Text>Description</Text>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};

export default Navbar;