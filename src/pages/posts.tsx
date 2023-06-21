import { Card, Title, Text, SimpleGrid, Image, Box } from "@mantine/core";
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
      <Title display="none">Posts</Title>
      <SimpleGrid
        cols={4}
        spacing="xs"
        breakpoints={[{ maxWidth: 'xs', cols: 2 }]}
      >
        {zennPosts.nodes.map((post) => (
          <Card key={post.id} p="xs" withBorder>
            <Card.Section >
              <Link href={post.link} label={post.title!}>
                {/* TODO: サムネイルを取得して表示 */}
                <Image src={`https://picsum.photos/seed/${post.id}/200/300`}
                  alt={post.title!}
                  height={160}
                />
              </Link>
            </Card.Section>
            <Text c="dimmed">{formatPubDate(post.pubDate!)}</Text>
            <Link href={post.link}>
              {truncate(post.title!, 27)} | {post.platform}
            </Link>
          </Card>
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export default PostsPage;

export const Head: HeadFC = () => <SEO pathname="/posts" title="Blog posts" />
