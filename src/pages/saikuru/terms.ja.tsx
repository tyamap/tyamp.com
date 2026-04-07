import * as React from "react"
import { HeadFC } from "gatsby"
import { Anchor, List, Stack, Text, Title } from "@mantine/core"
import { LegalBundleNav } from "src/components/LegalBundleNav"
import { StandaloneLayout } from "src/components/layout/StandaloneLayout"
import PageTitle from "src/components/PageTitle"
import SEO from "src/components/SEO"
import { type LegalPageBundle } from "src/data/legalPageBundles"

const bundle: LegalPageBundle = {
  id: "saikuru-ja",
  title: "SAIKURU",
  items: [
    { label: "プライバシーポリシー", to: "/ja/saikuru/privacy-policy" },
    { label: "利用規約", to: "/ja/saikuru/terms" },
  ],
}

const TermsJaPage: React.FC = () => {
  return (
    <StandaloneLayout>
      <LegalBundleNav bundle={bundle} />
      <PageTitle>利用規約</PageTitle>
      <Stack spacing="lg">
        <section>
          <Text component="p" size="sm">
            本利用規約は、Tomoya Yamashita（以下「サービス提供者」）が広告付きサービスとして提供する
            モバイルアプリ「SAIKURU」（以下「本アプリ」）に適用されます。
          </Text>
          <Text component="p" size="sm" mt="sm">
            本アプリをダウンロードまたは利用することにより、利用者は本規約に同意したものとみなされます。
            本アプリをご利用になる前に、本規約を十分にご確認ください。
          </Text>
          <Text component="p" size="sm" mt="sm">
            本アプリ、本アプリの一部、またはサービス提供者の商標を、無断で複製、改変、解析、翻訳、
            派生物の作成等を行うことは禁止されています。本アプリに関する商標権、著作権、データベース権、
            その他の知的財産権は、すべてサービス提供者に帰属します。
          </Text>
          <Text component="p" size="sm" mt="sm">
            サービス提供者は、本アプリを有益かつ効率的なものにするよう努めています。
            そのため、サービス提供者は、いつでも理由を問わず本アプリを変更し、またはサービスに料金を設定する権利を留保します。
            本アプリまたはサービスに関する料金が発生する場合には、利用者に対して明確にお知らせします。
          </Text>
          <Text component="p" size="sm" mt="sm">
            本アプリは、サービス提供のために、利用者がサービス提供者に提供した個人データを保存および処理する場合があります。
            端末の安全性や本アプリへのアクセス管理は、利用者ご自身の責任で行ってください。
            サービス提供者は、端末の制限を解除するいわゆる jailbreaking や rooting を推奨しません。
            これらの行為は、マルウェアやウイルス等への脆弱性を高め、端末のセキュリティ機能を損なう可能性があり、
            本アプリが正常に動作しなくなるおそれがあります。
          </Text>
          <Text component="p" size="sm" mt="sm">
            本アプリでは、独自の利用規約を有する第三者サービスを利用しています。
            利用中の第三者サービスの利用規約は、以下をご確認ください。
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
            本アプリの一部機能の利用には、Wi-Fi または携帯通信会社によるモバイル通信など、
            有効なインターネット接続が必要です。Wi-Fi が利用できない場合やデータ通信量の上限に達した場合などに、
            本アプリが十分に機能しなくても、サービス提供者は責任を負いません。
          </Text>
          <Text component="p" size="sm" mt="sm">
            Wi-Fi 環境外で本アプリを利用する場合、利用者と携帯通信会社との契約条件が適用されます。
            その結果、本アプリ利用中のデータ通信料やその他第三者による料金が発生することがあります。
            利用者は、特にデータローミングを無効にせず居住地域外で利用した場合を含め、
            これらの費用について自ら責任を負うものとします。
            また、利用端末の料金支払者が利用者本人でない場合、利用者はその支払者の承諾を得ているものとみなします。
          </Text>
          <Text component="p" size="sm" mt="sm">
            同様に、サービス提供者は、常に利用者による本アプリの利用状況について責任を負うものではありません。
            例えば、端末の充電状態を保つことは利用者の責任です。端末の電池切れ等によりサービスへアクセスできない場合でも、
            サービス提供者は責任を負いません。
          </Text>
          <Text component="p" size="sm" mt="sm">
            サービス提供者は、本アプリの内容が常に最新かつ正確であるよう努めますが、
            一部の情報は第三者から提供されるため、その完全性や正確性を保証するものではありません。
            利用者が本アプリの機能に全面的に依拠したことにより生じた直接的または間接的な損害について、
            サービス提供者は責任を負いません。
          </Text>
          <Text component="p" size="sm" mt="sm">
            サービス提供者は、将来にわたり本アプリを更新する場合があります。
            本アプリは現在の OS 要件に基づいて提供されており、今後対象 OS や提供条件が変更されることがあります。
            利用者が本アプリを継続して利用するには、必要な更新をダウンロードする必要があります。
            ただし、サービス提供者は、常に利用者の端末や OS バージョンに適合する更新を提供することを保証しません。
            また、サービス提供者は、事前の通知なく本アプリの提供を終了し、利用を停止させることがあります。
            別途通知がない限り、提供終了時には、本規約に基づき利用者に付与された権利は終了し、
            利用者は本アプリの利用を中止し、必要に応じて端末から削除しなければなりません。
          </Text>
        </section>

        <section>
          <Title order={2} size="h3" mb="sm">
            規約の変更
          </Title>
          <Text component="p" size="sm">
            サービス提供者は、本利用規約を随時更新することがあります。
            変更がある場合は、本ページに最新の利用規約を掲載することでお知らせします。
            利用者は、定期的に本ページをご確認ください。
          </Text>
          <Text component="p" size="sm" mt="sm">
            本利用規約の施行日は 2026-04-01 です。
          </Text>
        </section>

        <section>
          <Title order={2} size="h3" mb="sm">
            お問い合わせ
          </Title>
          <Text component="p" size="sm">
            本利用規約に関するご質問やご提案がある場合は、
            <Anchor href="mailto:tyamap03@gmail.com">tyamap03@gmail.com</Anchor>
            までご連絡ください。
          </Text>
        </section>
      </Stack>
    </StandaloneLayout>
  )
}

export default TermsJaPage

export const Head: HeadFC = () => (
  <SEO
    pathname="/ja/saikuru/terms"
    title="SAIKURU - 利用規約"
    description="SAIKURU モバイルアプリの利用規約"
    locale="ja"
  />
)
