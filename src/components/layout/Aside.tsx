import { Text, Aside as MantineAside, Title, AspectRatio, Avatar } from "@mantine/core"

interface AsideProps {
}
const Aside = (props: AsideProps) => {
  return (
    <MantineAside w={{ md: '30%', xs: "100%" }} p="lg" withBorder={false} sx={{borderRight: '1px solid #e9ecef'}}>
      <MantineAside.Section>
        <AspectRatio ratio={1} w="100%" mx="auto">
          <Avatar radius="100%" size="100%" />
        </AspectRatio>
      </MantineAside.Section>
      <MantineAside.Section>
        <Title order={2}>ID</Title>
        <Text c="dimmed">Name</Text>
      </MantineAside.Section>
      <MantineAside.Section>
        <Text>Description</Text>
      </MantineAside.Section>
    </MantineAside>
  );
};

export default Aside;