import { Card, Title, Text } from "@mantine/core";
import { HeadFC } from "gatsby";
import { Layout } from "src/components/layout";
import Link from "src/components/Link";
import SEO from "src/components/SEO";
import { useFeedPosts } from "src/hooks/useFeedPosts";
import { formatPubDate } from "src/utils";

interface PostsPageProps {

}
const PostsPage = (props: PostsPageProps) => {
  const zennPosts = useFeedPosts()
  return (
    <Layout>
      <Title display="none">Posts</Title>
      {zennPosts.nodes.map((post, index) => (
        <Card key={index}>
          <Text c="dimmed">{post.platform}</Text>
          <Link href={post.link}>
            {post.title}
          </Link>
          <Text c="dimmed">{formatPubDate(post.pubDate!)}</Text>
        </Card>
      ))}
    </Layout>
  );
};

export default PostsPage;

export const Head: HeadFC = () => <SEO pathname="/posts" title="Blog posts" />
