import { Card, Title, Text, SimpleGrid, Image, AspectRatio } from "@mantine/core";
import { HeadFC } from "gatsby";
import { Layout } from "src/components/layout";
import Link from "src/components/Link";
import SEO from "src/components/SEO";
import { useFeedPosts } from "src/hooks/useFeedPosts";
import { formatPubDate, truncate } from "src/utils";

interface PostsPageProps {

}
const PostsPage = (props: PostsPageProps) => {
  const zennPosts = useFeedPosts()
  return (
    <Layout>
      <Title>Posts</Title>
      <SimpleGrid
        cols={4}
        spacing="xs"
        breakpoints={[{ maxWidth: 'xs', cols: 2 }]}
      >
        {zennPosts.nodes.map((post) => (
          <Card key={post.id} p="xs" withBorder>
            <Card.Section >
              <Link href={post.link} label={post.title!}>
                <AspectRatio ratio={1200 / 630}>
                  <Image
                    src={post.thumbnail || `https://picsum.photos/seed/${post.id}/400/210`}
                    alt={post.title!}
                  />
                </AspectRatio>
              </Link>
            </Card.Section>
            <Text c="dimmed">{formatPubDate(post.pubDate!)}</Text>
            <Text fw={700}>
              <Link href={post.link}>
                {truncate(post.title!, 27)} | {post.platform}
              </Link>
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export default PostsPage;

export const Head: HeadFC = () => <SEO pathname="/posts"
  title="Blog posts"
  description="Here are my blog posts, obtained via RSS from each platform. I write about programming, tech, and my life."
/>
