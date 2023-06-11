import { HeadFC } from "gatsby";
import { Layout } from "src/components/layout";

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

export const Head: HeadFC = () => <title>Posts</title>
