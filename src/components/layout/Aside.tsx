import { Text, Aside as MantineAside, Title, AspectRatio, Badge, Group, Image } from "@mantine/core"
import { useProfile } from "src/hooks/useProfile";
import { GatsbyImage } from 'gatsby-plugin-image'
import Link from "../Link";

interface AsideProps {
}
const Aside = (props: AsideProps) => {
  const profile = useProfile()
  return (
    <MantineAside
      h="auto"
      p={{ sx: "md", sm: 'lg' }}
      withBorder={false}
      sx={{
        "@media (max-width: 767px)": {
          flexDirection: 'row',
          gap: 10
        }
      }}
    >
      <MantineAside.Section sx={{ flexBasis: "25%" }}>
        <AspectRatio ratio={1} w="100%" maw={360}>
          <GatsbyImage
            image={profile!.avatar!.gatsbyImageData!}
            alt={profile?.avatar?.description || profile?.avatar?.title || 'avatar image'}
            style={{ borderRadius: '100%', width: '100%', zIndex: 1 }} />
        </AspectRatio>
      </MantineAside.Section>
      <MantineAside.Section sx={{ flexBasis: "75%" }}>
        <Title order={2}>{profile?.name}</Title>
        <Text c="dimmed">{profile?.userId}</Text>
        <Badge color="cyan">{profile?.label}</Badge>
        <Group m="xs" spacing="xs">
          {profile?.socials?.map((social) => {
            return (
              <Link href={social?.link} key={social?.link}>
                <Image src={social?.icon?.file?.url || ''} alt="sns icon" width={24} />
              </Link>
            )
          })
          }
        </Group>
      </MantineAside.Section>
    </MantineAside>
  );
};

export default Aside;