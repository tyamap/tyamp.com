import { Title } from "@mantine/core";
import { HeadFC } from "gatsby";
import { Layout } from "src/components/layout";
import SEO from "src/components/SEO";

interface PostsPageProps {

}
const PostsPage = (props: PostsPageProps) => {

  return (
    <Layout>
      <Title>Posts</Title>
    </Layout>
  );
};

export default PostsPage;

export const Head: HeadFC = () => <SEO pathname="/posts" title="Posts" />
