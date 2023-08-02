import { Title, TextInput, Textarea, Button, Stack, Container } from "@mantine/core";
import { HeadFC } from "gatsby";
import { Layout } from "src/components/layout";
import PageTitle from "src/components/PageTitle";
import SEO from "src/components/SEO";

interface ContactPageProps { }

const ContactPage = (props: ContactPageProps) => {

  return (
    <Layout>
      <PageTitle>Contact</PageTitle>
      <Container size="sm" >
        <Title order={2} mb="md">Send Message</Title>
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
            <div className="g-recaptcha" data-sitekey={process.env.GATSBY_RECAPTCHA_SITEKEY} style={{ marginLeft: 'auto' }} />
            <Button type="submit" color="cyan">Send</Button>
          </Stack>
        </form>
      </Container>
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <SEO pathname="/contact"
  title="Contact"
  description="Feel free to reach out to me, and let's embark on this creative journey together!"
>
  <script src="https://www.google.com/recaptcha/api.js" async defer />
</SEO>
