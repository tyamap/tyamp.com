import { HeadFC } from "gatsby";
import { Layout } from "src/components/layout";
import SEO from "src/components/SEO";

interface PostsPageProps {

}
const PostsPage = (props: PostsPageProps) => {

  return (
    <Layout>
      <h1>Posts</h1>
    </Layout>
  );
};

export default PostsPage;

export const Head: HeadFC = () => <SEO pathname="/posts" title="Posts" />
