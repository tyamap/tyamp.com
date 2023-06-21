import { Title, TextInput, Textarea, Button, Stack, Container } from "@mantine/core";
import { HeadFC } from "gatsby";
import { Layout } from "src/components/layout";
import SEO from "src/components/SEO";

interface ContactPageProps { }

const ContactPage = (props: ContactPageProps) => {

  return (
    <Layout>
      <Title display="none">Contact</Title>
      <Container size="sm" >
        <Title order={2}>Send Message</Title>
        <form action={process.env.GATSBY_FORM_ENDPOINT} method="POST">
          <Stack>
            <TextInput
              label="Full name"
              type="text"
              withAsterisk
              required
            />
            <TextInput
              label="Email address"
              type="email"
              withAsterisk
              required
            />
            <Textarea
              label="Message"
              withAsterisk
              required
            />
            <div className="g-recaptcha" data-sitekey={process.env.GATSBY_RECAPTCHA_SITEKEY} style={{ marginLeft: 'auto' }} />
            <Button type="submit" color="cyan">Send</Button>
          </Stack>
        </form>
      </Container>
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <SEO pathname="/contact" title="Contact">
  <script src="https://www.google.com/recaptcha/api.js" async defer />
</SEO>
