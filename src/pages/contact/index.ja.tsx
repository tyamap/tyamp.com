import {
  Title,
  TextInput,
  Textarea,
  Button,
  Stack,
  Container,
  Group,
} from "@mantine/core";
import { HeadFC, Link } from "gatsby";
import { Layout } from "src/components/layout/ja";
import PageTitle from "src/components/PageTitle";
import SEO from "src/components/SEO";

interface ContactPageProps { }

const ContactPage = (props: ContactPageProps) => {
  return (
    <Layout>
      <PageTitle>Contact</PageTitle>
      <Container size="sm">
        <Group position="right">
          <a href="https://www.buymeacoffee.com/tyamap" target="_blank">
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              style={{ height: 40, width: 162.75 }}
            />
          </a>
        </Group>
        <Group position="right">
          <Link to="/asct" style={{ fontSize: '12px' }}>特定商取引法に基づく表記</Link>
        </Group>
        <Title order={2} mb="md">
          Send Message
        </Title>
        <form action={process.env.GATSBY_FORM_ENDPOINT} method="POST">
          <Stack>
            <TextInput
              label="Full name"
              type="text"
              name="name"
              autoComplete="name"
              withAsterisk
              required
            />
            <TextInput
              label="Email address"
              type="email"
              name="email"
              autoComplete="email"
              withAsterisk
              required
            />
            <Textarea
              label="Message"
              name="message"
              autosize
              minRows={5}
              maxRows={10}
              withAsterisk
              required
            />
            <div
              className="g-recaptcha"
              data-sitekey={process.env.GATSBY_RECAPTCHA_SITEKEY}
              style={{ marginLeft: "auto" }}
            />
            <Button type="submit" color="cyan">
              Send
            </Button>
          </Stack>
        </form>
      </Container>
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => (
  <SEO
    pathname="/contact"
    title="Contact"
    description="Feel free to reach out to me, and let's embark on this creative journey together!"
    locale="ja"
  >
    <script src="https://www.google.com/recaptcha/api.js" async defer />
  </SEO>
);
