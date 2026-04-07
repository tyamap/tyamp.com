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

const TermsPage: React.FC = () => {
  return (
    <Layout>
      <PageTitle>Terms &amp; Conditions</PageTitle>
      <Container size="sm">
        <Stack spacing="lg">
          <section>
            <Text component="p" size="sm">
              These terms and conditions apply to the SAIKURU app (hereby
              referred to as &quot;Application&quot;) for mobile devices that was
              created by Tomoya Yamashita (hereby referred to as &quot;Service
              Provider&quot;) as an Ad Supported service.
            </Text>
            <Text component="p" size="sm" mt="sm">
              Upon downloading or utilizing the Application, you are
              automatically agreeing to the following terms. It is strongly
              advised that you thoroughly read and understand these terms prior
              to using the Application.
            </Text>
            <Text component="p" size="sm" mt="sm">
              Unauthorized copying, modification of the Application, any part of
              the Application, or our trademarks is strictly prohibited. Any
              attempts to extract the source code of the Application, translate
              the Application into other languages, or create derivative
              versions are not permitted. All trademarks, copyrights, database
              rights, and other intellectual property rights related to the
              Application remain the property of the Service Provider.
            </Text>
            <Text component="p" size="sm" mt="sm">
              The Service Provider is dedicated to ensuring that the Application
              is as beneficial and efficient as possible. As such, they reserve
              the right to modify the Application or charge for their services at
              any time and for any reason. The Service Provider assures you that
              any charges for the Application or its services will be clearly
              communicated to you.
            </Text>
            <Text component="p" size="sm" mt="sm">
              The Application stores and processes personal data that you have
              provided to the Service Provider in order to provide the Service.
              It is your responsibility to maintain the security of your phone and
              access to the Application. The Service Provider strongly advise
              against jailbreaking or rooting your phone, which involves removing
              software restrictions and limitations imposed by the official
              operating system of your device. Such actions could expose your
              phone to malware, viruses, malicious programs, compromise your
              phone&apos;s security features, and may result in the Application
              not functioning correctly or at all.
            </Text>
            <Text component="p" size="sm" mt="sm">
              Please note that the Application utilizes third-party services that
              have their own Terms and Conditions. Below are the links to the
              Terms and Conditions of the third-party service providers used by
              the Application:
            </Text>
            <List size="sm" spacing="xs" withPadding>
              <List.Item>
                <Anchor
                  href="https://developers.google.com/admob/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AdMob
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor
                  href="https://www.google.com/analytics/terms/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics for Firebase
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor
                  href="https://firebase.google.com/terms/crashlytics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firebase Crashlytics
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor
                  href="https://www.revenuecat.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RevenueCat
                </Anchor>
              </List.Item>
            </List>
            <Text component="p" size="sm" mt="sm">
              Please be aware that the Service Provider does not assume
              responsibility for certain aspects. Some functions of the
              Application require an active internet connection, which can be
              Wi-Fi or provided by your mobile network provider. The Service
              Provider cannot be held responsible if the Application does not
              function at full capacity due to lack of access to Wi-Fi or if you
              have exhausted your data allowance.
            </Text>
            <Text component="p" size="sm" mt="sm">
              If you are using the application outside of a Wi-Fi area, please
              be aware that your mobile network provider&apos;s agreement terms
              still apply. Consequently, you may incur charges from your mobile
              provider for data usage during the connection to the application, or
              other third-party charges. By using the application, you accept
              responsibility for any such charges, including roaming data charges
              if you use the application outside of your home territory (i.e.,
              region or country) without disabling data roaming. If you are not
              the bill payer for the device on which you are using the
              application, they assume that you have obtained permission from the
              bill payer.
            </Text>
            <Text component="p" size="sm" mt="sm">
              Similarly, the Service Provider cannot always assume responsibility
              for your usage of the application. For instance, it is your
              responsibility to ensure that your device remains charged. If your
              device runs out of battery and you are unable to access the Service,
              the Service Provider cannot be held responsible.
            </Text>
            <Text component="p" size="sm" mt="sm">
              In terms of the Service Provider&apos;s responsibility for your use
              of the application, it is important to note that while they strive
              to ensure that it is updated and accurate at all times, they do rely
              on third parties to provide information to them so that they can
              make it available to you. The Service Provider accepts no liability
              for any loss, direct or indirect, that you experience as a result of
              relying entirely on this functionality of the application.
            </Text>
            <Text component="p" size="sm" mt="sm">
              The Service Provider may wish to update the application at some
              point. The application is currently available as per the
              requirements for the operating system (and for any additional
              systems they decide to extend the availability of the application
              to) may change, and you will need to download the updates if you
              want to continue using the application. The Service Provider does
              not guarantee that it will always update the application so that it
              is relevant to you and/or compatible with the particular operating
              system version installed on your device. However, you agree to
              always accept updates to the application when offered to you. The
              Service Provider may also wish to cease providing the application
              and may terminate its use at any time without providing
              termination notice to you. Unless they inform you otherwise, upon
              any termination, (a) the rights and licenses granted to you in these
              terms will end; (b) you must cease using the application, and (if
              necessary) delete it from your device.
            </Text>
          </section>

          <section>
            <Title order={2} size="h3" mb="sm">
              Changes to These Terms and Conditions
            </Title>
            <Text component="p" size="sm">
              The Service Provider may periodically update their Terms and
              Conditions. Therefore, you are advised to review this page regularly
              for any changes. The Service Provider will notify you of any
              changes by posting the new Terms and Conditions on this page.
            </Text>
            <Text component="p" size="sm" mt="sm">
              These terms and conditions are effective as of 2026-04-01
            </Text>
          </section>

          <section>
            <Title order={2} size="h3" mb="sm">
              Contact Us
            </Title>
            <Text component="p" size="sm">
              If you have any questions or suggestions about the Terms and
              Conditions, please do not hesitate to contact the Service Provider
              at{" "}
              <Anchor href="mailto:tyamap03@gmail.com">tyamap03@gmail.com</Anchor>
              .
            </Text>
          </section>

          <Divider my="md" />

          <Text size="xs" c="dimmed">
            This Terms and Conditions page was generated by{" "}
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

export default TermsPage

export const Head: HeadFC = () => (
  <SEO
    pathname="/saikuru/terms"
    title="SAIKURU — Terms & Conditions"
    description="Terms and conditions for the SAIKURU mobile application by Tomoya Yamashita."
  />
)
