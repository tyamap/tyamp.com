import * as React from "react"
import { HeadFC } from "gatsby"
import { Anchor, List, Stack, Text, Title } from "@mantine/core"
import { LegalBundleNav } from "src/components/LegalBundleNav"
import { StandaloneLayout } from "src/components/layout/StandaloneLayout"
import PageTitle from "src/components/PageTitle"
import SEO from "src/components/SEO"

const PrivacyPolicyPage: React.FC = () => {
  return (
    <StandaloneLayout>
      <LegalBundleNav bundleId="saikuru" />
      <PageTitle>Privacy Policy</PageTitle>
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
              <List.Item>
                Account identifiers and profile information you provide when you
                sign in, such as email address and display name
              </List.Item>
              <List.Item>
                When you sign in with Google or Apple, identifiers and profile
                information made available by those sign-in methods, as permitted
                by your account settings
              </List.Item>
              <List.Item>
                Device tokens used to deliver push notifications (Firebase
                Cloud Messaging)
              </List.Item>
              <List.Item>
                Crash logs and diagnostic data such as stack traces (Firebase
                crash reporting)
              </List.Item>
              <List.Item>
                The advertising identifier (IDFA on iOS) when you grant access,
                as described below under App Tracking Transparency
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
              To support ads and measurement, the Application may request access
              to the advertising identifier (IDFA) through Apple&apos;s App
              Tracking Transparency (ATT) framework on supported devices. You can
              allow or deny this request in the system dialog. If you deny
              tracking, core features of the Application remain available;
              however, ads may be less personalized.
            </Text>
            <Text component="p" size="sm" mt="sm">
              Cloud Firestore may store a local cache of your data on your device
              when offline persistence is enabled, so that the Application can
              work when the network is unavailable. This cache is subject to
              your device&apos;s security and your account settings.
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
              The Application uses third-party services that process data as
              described in this privacy statement, including for authentication,
              analytics, crash reporting, ads, push notifications, and remote
              configuration. Some providers may receive data that identifies your
              account or device where necessary to provide those features. The
              Service Provider may share your information with third parties in
              the ways that are described in this privacy statement.
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
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firebase Authentication, Crashlytics, Cloud Messaging, Remote
                  Config, and Cloud Firestore
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Sign-In
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign in with Apple
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
              the mobile application marketplace or network. Where the system
              offers an App Tracking Transparency choice, you can also change
              your tracking preference in device settings after the initial
              prompt.
            </Text>
          </section>

          <section>
            <Title order={2} size="h3" mb="sm">
              Data Retention Policy
            </Title>
            <Text component="p" size="sm">
              The Service Provider will retain User Provided data for as long as
              you use the Application and for a reasonable time thereafter. You
              may delete your account from within the Application (for example,
              through the in-app settings where account deletion is offered). If
              you need help or wish to request deletion outside the Application,
              please use the{" "}
              <Anchor href="/contact">contact form</Anchor> and the Service
              Provider will respond in a reasonable time.
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
              this from their servers.               If you are a parent or guardian and you
              are aware that your child has provided us with personal
              information, please contact the Service Provider using the{" "}
              <Anchor href="/contact">contact form</Anchor> so that they will be
              able to take the necessary actions.
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
              the Service Provider through the{" "}
              <Anchor href="/contact">contact form</Anchor>.
            </Text>
          </section>
      </Stack>
    </StandaloneLayout>
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
