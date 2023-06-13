import { Text, Aside as MantineAside, Title, AspectRatio, SpacingValue, SystemProp, Badge } from "@mantine/core"
import { useSiteMetadata } from "src/hooks/useSiteMetadata";
import { StaticImage } from 'gatsby-plugin-image'
import React from "react";

interface AsideProps {
  w: SystemProp<SpacingValue>
}
const Aside = (props: AsideProps) => {
  const { profile } = useSiteMetadata()
  return (
    <MantineAside height="auto" w={props.w} p="lg" withBorder={false} sx={{ borderRight: '1px solid #e9ecef' }}>
      <MantineAside.Section>
        <AspectRatio ratio={1} w="100%" mx="auto" maw={360}>
          <StaticImage
            src="../../images/avatar.jpg"
            alt="Tyamap, a man long legs..."
            style={{ borderRadius: '100%', width: '100%', zIndex: 1 }} />
        </AspectRatio>
      </MantineAside.Section>
      <MantineAside.Section>
        <Title order={2}>{profile?.name}</Title>
        <Text c="dimmed">{profile?.id}</Text>
      </MantineAside.Section>
      <MantineAside.Section>
        {profile?.labels?.map((label) => (<Badge color="cyan">{label}</Badge>))}
      </MantineAside.Section>
    </MantineAside>
  );
};

export default Aside;