import * as React from "react"
import { HeadFC } from "gatsby"
import {
  Anchor,
  Container,
  Divider,
  List,
  Stack,
  Text,
  Title,
} from "@mantine/core"
import { Layout } from "src/components/layout/en"
import PageTitle from "src/components/PageTitle"
import SEO from "src/components/SEO"

const PrivacyPolicyPage: React.FC = () => {
  return (
    <Layout>
      <PageTitle>Privacy Policy</PageTitle>
      <Container size="sm">
        <Stack spacing="lg">
          <section>
            <Text component="p" size="sm">
              This privacy policy applies to the SAIKURU app (hereby referred to
              as &quot;Application&quot;) for mobile devices that was created by
              Tomoya Yamashita (hereby referred to as &quot;Service
              Provider&quot;) as an Ad Supported service. This service is
              intended for use &quot;AS IS&quot;.
            </Text>
          </section>

          <section>
            <Title order={2} size="h3" mb="sm">
              Information Collection and Use
            </Title>
            <Text component="p" size="sm" mb="sm">
              The Application collects information when you download and use it.
              This information may include information such as
            </Text>
            <List size="sm" spacing="xs" withPadding>
              <List.Item>
                Your device&apos;s Internet Protocol address (e.g. IP address)
              </List.Item>
              <List.Item>
                The pages of the Application that you visit, the time and date
                of your visit, the time spent on those pages
              </List.Item>
              <List.Item>The time spent on the Application</List.Item>
              <List.Item>
                The operating system you use on your mobile device
              </List.Item>
            </List>
            <Text component="p" size="sm" mt="sm">
              The Application does not gather precise information about the
              location of your mobile device.
            </Text>
            <Text component="p" size="sm" mt="sm">
              The Application does not use Artificial Intelligence (AI)
              technologies to process your data or provide features.
            </Text>
            <Text component="p" size="sm" mt="sm">
              The Service Provider may use the information you provided to
              contact you from time to time to provide you with important
              information, required notices and marketing promotions.
            </Text>
            <Text component="p" size="sm" mt="sm">
              For a better experience, while using the Application, the Service
              Provider may require you to provide us with certain personally
              identifiable information. The information that the Service Provider
              request will be retained by them and used as described in this
              privacy policy.
            </Text>
          </section>

          <section>
            <Title order={2} size="h3" mb="sm">
              Third Party Access
            </Title>
            <Text component="p" size="sm" mb="sm">
              Only aggregated, anonymized data is periodically transmitted to
              external services to aid the Service Provider in improving the
              Application and their service. The Service Provider may share
              your information with third parties in the ways that are
              described in this privacy statement.
            </Text>
            <Text component="p" size="sm" mb="sm">
              Please note that the Application utilizes third-party services that
              have their own Privacy Policy about handling data. Below are the
              links to the Privacy Policy of the third-party service providers
              used by the Application:
            </Text>
            <List size="sm" spacing="xs" withPadding>
              <List.Item>
                <Anchor
                  href="https://support.google.com/admob/answer/6128543?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AdMob
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics for Firebase
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor
                  href="https://firebase.google.com/support/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firebase Crashlytics
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor
                  href="https://www.revenuecat.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RevenueCat
                </Anchor>
              </List.Item>
            </List>
            <Text component="p" size="sm" mt="sm">
              The Service Provider may disclose User Provided and Automatically
              Collected Information:
            </Text>
            <List size="sm" spacing="xs" withPadding mt="xs">
              <List.Item>
                as required by law, such as to comply with a subpoena, or
                similar legal process;
              </List.Item>
              <List.Item>
                when they believe in good faith that disclosure is necessary to
                protect their rights, protect your safety or the safety of others,
                investigate fraud, or respond to a government request;
              </List.Item>
              <List.Item>
                with their trusted services providers who work on their behalf,
                do not have an independent use of the information we disclose to
                them, and have agreed to adhere to the rules set forth in this
                privacy statement.
              </List.Item>
            </List>
          </section>

          <section>
            <Title order={2} size="h3" mb="sm">
              Opt-Out Rights
            </Title>
            <Text component="p" size="sm">
              You can stop all collection of information by the Application
              easily by uninstalling it. You may use the standard uninstall
              processes as may be available as part of your mobile device or via
              the mobile application marketplace or network.
            </Text>
          </section>

          <section>
            <Title order={2} size="h3" mb="sm">
              Data Retention Policy
            </Title>
            <Text component="p" size="sm">
              The Service Provider will retain User Provided data for as long as
              you use the Application and for a reasonable time thereafter. If
              you&apos;d like them to delete User Provided Data that you have
              provided via the Application, please contact them at{" "}
              <Anchor href="mailto:tyamap03@gmail.com">tyamap03@gmail.com</Anchor>{" "}
              and they will respond in a reasonable time.
            </Text>
          </section>

          <section>
            <Title order={2} size="h3" mb="sm">
              Children
            </Title>
            <Text component="p" size="sm">
              The Service Provider does not use the Application to knowingly
              solicit data from or market to children under the age of 13.
            </Text>
            <Text component="p" size="sm" mt="sm">
              The Application does not address anyone under the age of 13. The
              Service Provider does not knowingly collect personally identifiable
              information from children under 13 years of age. In the case the
              Service Provider discover that a child under 13 has provided
              personal information, the Service Provider will immediately delete
              this from their servers. If you are a parent or guardian and you
              are aware that your child has provided us with personal
              information, please contact the Service Provider (
              <Anchor href="mailto:tyamap03@gmail.com">tyamap03@gmail.com</Anchor>
              ) so that they will be able to take the necessary actions.
            </Text>
          </section>

          <section>
            <Title order={2} size="h3" mb="sm">
              Security
            </Title>
            <Text component="p" size="sm">
              The Service Provider is concerned about safeguarding the
              confidentiality of your information. The Service Provider provides
              physical, electronic, and procedural safeguards to protect
              information the Service Provider processes and maintains.
            </Text>
          </section>

          <section>
            <Title order={2} size="h3" mb="sm">
              Changes
            </Title>
            <Text component="p" size="sm">
              This Privacy Policy may be updated from time to time for any
              reason. The Service Provider will notify you of any changes to the
              Privacy Policy by updating this page with the new Privacy Policy.
              You are advised to consult this Privacy Policy regularly for any
              changes, as continued use is deemed approval of all changes.
            </Text>
            <Text component="p" size="sm" mt="sm">
              This privacy policy is effective as of 2026-04-01
            </Text>
          </section>

          <section>
            <Title order={2} size="h3" mb="sm">
              Your Consent
            </Title>
            <Text component="p" size="sm">
              By using the Application, you are consenting to the processing of
              your information as set forth in this Privacy Policy now and as
              amended by us.
            </Text>
          </section>

          <section>
            <Title order={2} size="h3" mb="sm">
              Contact Us
            </Title>
            <Text component="p" size="sm">
              If you have any questions regarding privacy while using the
              Application, or have questions about the practices, please contact
              the Service Provider via email at{" "}
              <Anchor href="mailto:tyamap03@gmail.com">tyamap03@gmail.com</Anchor>
              .
            </Text>
          </section>

          <Divider my="md" />

          <Text size="xs" c="dimmed">
            This privacy policy page was generated by{" "}
            <Anchor
              href="https://app-privacy-policy-generator.nisrulz.com/"
              target="_blank"
              rel="noopener noreferrer"
              size="xs"
            >
              App Privacy Policy Generator
            </Anchor>
          </Text>
        </Stack>
      </Container>
    </Layout>
  )
}

export default PrivacyPolicyPage

export const Head: HeadFC = () => (
  <SEO
    pathname="/saikuru/privacy-policy"
    title="SAIKURU — Privacy Policy"
    description="Privacy policy for the SAIKURU mobile application by Tomoya Yamashita."
  />
)
