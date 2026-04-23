import * as React from "react"
import { HeadFC } from "gatsby"
import { Accordion, Anchor, Stack, Text, Title } from "@mantine/core"
import { LegalBundleNav } from "src/components/LegalBundleNav"
import { StandaloneLayout } from "src/components/layout/StandaloneLayout"
import PageTitle from "src/components/PageTitle"
import SEO from "src/components/SEO"

const SupportPage: React.FC = () => {
  return (
    <StandaloneLayout>
      <LegalBundleNav bundleId="saikuru" />
      <PageTitle>Support</PageTitle>
      <Stack spacing="lg">
        <section>
          <Text component="p" size="sm">
            Thank you for using SAIKURU — a mobile app that helps households
            manage emergency stockpiles through the rolling-stock method.
            This page provides ways to contact support and answers to common
            questions.
          </Text>
        </section>

        <section>
          <Title order={2} size="h3" mb="sm">
            Contact
          </Title>
          <Text component="p" size="sm">
            For any questions, bug reports, or feedback, please reach out via
            the <Anchor href="/contact">contact form</Anchor>. We reply
            within a few business days.
          </Text>
          <Text component="p" size="sm" mt="sm">
            When reporting an issue, it helps to include:
          </Text>
          <Text component="ul" size="sm" mt={4}>
            <li>Your device model and OS version (e.g. iPhone 15, iOS 18.2)</li>
            <li>App version (Settings → About)</li>
            <li>Steps to reproduce the issue</li>
          </Text>
        </section>

        <section>
          <Title order={2} size="h3" mb="sm">
            Frequently Asked Questions
          </Title>
          <Accordion variant="separated">
            <Accordion.Item value="notifications">
              <Accordion.Control>
                Expiry notifications do not arrive.
              </Accordion.Control>
              <Accordion.Panel>
                <Text size="sm">
                  Please confirm that notifications are enabled for SAIKURU in
                  your device settings, and that you are signed in to the app
                  (notifications are scheduled per account). Notifications are
                  dispatched once a day at 8:00 JST. If the app has not been
                  opened for an extended period, open it once to refresh the
                  notification schedule.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="offline">
              <Accordion.Control>
                Can I use the app offline?
              </Accordion.Control>
              <Accordion.Panel>
                <Text size="sm">
                  Yes. SAIKURU caches your stockpile data locally, so you can
                  view items and quantities even without a network connection.
                  Changes made offline are synchronized automatically when the
                  device is back online.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="account-delete">
              <Accordion.Control>
                How do I delete my account and data?
              </Accordion.Control>
              <Accordion.Panel>
                <Text size="sm">
                  Open the app and go to Settings → Account → Delete Account.
                  This removes your user profile and all associated household
                  data from the server. If you cannot access the in-app
                  deletion, please contact us via the{" "}
                  <Anchor href="/contact">contact form</Anchor>.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="data-loss">
              <Accordion.Control>
                My data seems to have disappeared.
              </Accordion.Control>
              <Accordion.Panel>
                <Text size="sm">
                  Data is stored per account. If you previously used the app
                  as a guest and then signed in, any guest data is preserved
                  only if you chose the migration option at sign-in time. If
                  you are signed in with a different account than before,
                  sign in again with your original Google or Apple account to
                  restore your data.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="ads">
              <Accordion.Control>
                How can I remove ads?
              </Accordion.Control>
              <Accordion.Panel>
                <Text size="sm">
                  Ads are shown on the free plan. Paid plans that remove ads
                  and add advanced features are planned for a future update.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </section>

        <section>
          <Title order={2} size="h3" mb="sm">
            Related Information
          </Title>
          <Text component="p" size="sm">
            See also our{" "}
            <Anchor href="/saikuru/privacy-policy">Privacy Policy</Anchor> and{" "}
            <Anchor href="/saikuru/terms">Terms &amp; Conditions</Anchor>.
          </Text>
        </section>
      </Stack>
    </StandaloneLayout>
  )
}

export default SupportPage

export const Head: HeadFC = () => (
  <SEO
    pathname="/saikuru/support"
    title="SAIKURU — Support"
    description="Support page for the SAIKURU mobile application — contact and frequently asked questions."
  />
)
