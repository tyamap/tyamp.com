import { Text, Aside as MantineAside, Title, AspectRatio, SpacingValue, SystemProp, Badge } from "@mantine/core"
import { useProfile } from "src/hooks/useProfile";
import { GatsbyImage } from 'gatsby-plugin-image'

interface AsideProps {
}
const Aside = (props: AsideProps) => {
  const profile = useProfile()
  return (
    <MantineAside height="auto" p="lg" withBorder={false} sx={{ borderRight: '1px solid #e9ecef' }}>
      <MantineAside.Section>
        <AspectRatio ratio={1} w="100%" mx="auto" maw={360}>
          <GatsbyImage
            image={profile!.avatar!.gatsbyImageData!}
            alt={profile?.avatar?.description || profile?.avatar?.title || 'avatar image'}
            style={{ borderRadius: '100%', width: '100%', zIndex: 1 }} />
        </AspectRatio>
      </MantineAside.Section>
      <MantineAside.Section>
        <Title order={2}>{profile?.name}</Title>
        <Text c="dimmed">{profile?.userId}</Text>
      </MantineAside.Section>
      <MantineAside.Section>
        <Badge color="cyan">{profile?.label}</Badge>
      </MantineAside.Section>
    </MantineAside>
  );
};

export default Aside;