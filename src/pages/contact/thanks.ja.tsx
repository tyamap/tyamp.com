import { Title, Text, Box } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import { HeadFC, Link } from "gatsby";
import { Layout } from "src/components/layout/ja";
import PageTitle from "src/components/PageTitle";
import SEO from "src/components/SEO";

interface ThanksProps {

}
const Thanks = (props: ThanksProps) => {

  return (
    <Layout>
      <Box sx={{ textAlign: 'center' }}>
        <PageTitle>Thank you!</PageTitle>
        <IconCircleCheck
          color="teal"
          size={128}
        />
        <Text>
          Your message has been sent. I will get back to you as soon as possible!
        </Text>
        <Link to="/">Home</Link>
      </Box>
    </Layout>
  );
};

export default Thanks;

export const Head: HeadFC = () => (
  <SEO
    pathname="/thanks"
    title="Thank you!"
    description="Your message has been sent. I will get back to you as soon as possible!"
    locale="ja"
  />
);