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
    { label: "サポート", to: "/ja/saikuru/support" },
    { label: "プライバシーポリシー", to: "/ja/saikuru/privacy-policy" },
    { label: "利用規約", to: "/ja/saikuru/terms" },
  ],
}

const PrivacyPolicyJaPage: React.FC = () => {
  return (
    <StandaloneLayout>
      <LegalBundleNav bundle={bundle} />
      <PageTitle>プライバシーポリシー</PageTitle>
      <Stack spacing="lg">
        <section>
          <Text component="p" size="sm">
            本プライバシーポリシーは、Tomoya Yamashita（以下「サービス提供者」）
            が広告付きサービスとして提供するモバイルアプリ「SAIKURU」
            （以下「本アプリ」）に適用されます。本サービスは
            「現状有姿（AS IS）」で提供されます。
          </Text>
        </section>

        <section>
          <Title order={2} size="h3" mb="sm">
            1. 収集する情報と利用目的
          </Title>
          <Text component="p" size="sm" mb="sm">
            本アプリは、ダウンロードおよび利用時に情報を収集することがあります。
            収集される情報には、例えば次のものが含まれます。
          </Text>
          <List size="sm" spacing="xs" withPadding>
            <List.Item>ご利用端末の IP アドレスなどの情報</List.Item>
            <List.Item>
              閲覧した本アプリ内のページ、閲覧日時、そのページでの滞在時間
            </List.Item>
            <List.Item>本アプリ全体の利用時間</List.Item>
            <List.Item>ご利用のモバイル端末の OS 情報</List.Item>
            <List.Item>
              サインイン時にご提供いただくアカウント識別子やプロフィール情報（メールアドレス、表示名など）
            </List.Item>
            <List.Item>
              Google または Apple でサインインする場合、各サービスの設定に従い提供される識別子やプロフィール情報
            </List.Item>
            <List.Item>
              プッシュ通知の配信に用いるデバイストークン（Firebase Cloud Messaging）
            </List.Item>
            <List.Item>
              クラッシュログやスタックトレースなどの診断情報（Firebase によるクラッシュ解析）
            </List.Item>
            <List.Item>
              広告の最適化のため、利用者が許可した場合に取得する広告識別子（iOS の IDFA など。下記 ATT に関する説明を参照）
            </List.Item>
          </List>
          <Text component="p" size="sm" mt="sm">
            本アプリは、モバイル端末の正確な位置情報を取得しません。
          </Text>
          <Text component="p" size="sm" mt="sm">
            本アプリは、データ処理や機能提供のために人工知能（AI）技術を使用しません。
          </Text>
          <Text component="p" size="sm" mt="sm">
            広告配信や計測のため、対応端末では Apple の App Tracking Transparency（ATT）に基づき、
            広告識別子（IDFA）へのアクセスを求める場合があります。利用者はシステムのダイアログで許可または拒否を選択できます。
            拒否した場合でも本アプリの主要な機能は利用できますが、広告のパーソナライズが行われにくくなる場合があります。
          </Text>
          <Text component="p" size="sm" mt="sm">
            Cloud Firestore のオフライン永続化が有効な場合、ネットワークが利用できないときにも本アプリが動作できるよう、
            端末内にデータのキャッシュが保存されることがあります。当該キャッシュは、端末のセキュリティおよびアカウント設定の範囲で管理されます。
          </Text>
          <Text component="p" size="sm" mt="sm">
            サービス提供者は、重要なお知らせ、必要な通知、またはマーケティング上のご案内を行うため、
            ご提供いただいた情報を用いて連絡する場合があります。
          </Text>
          <Text component="p" size="sm" mt="sm">
            また、本アプリの利用体験を向上させるため、サービス提供者は個人を特定し得る情報の提供をお願いする場合があります。
            その情報は、サービス提供者により保持され、本プライバシーポリシーに従って利用されます。
          </Text>
        </section>

        <section>
          <Title order={2} size="h3" mb="sm">
            2. 第三者サービスへの提供
          </Title>
          <Text component="p" size="sm" mb="sm">
            本アプリは、認証、分析、クラッシュレポート、広告、プッシュ通知、リモート設定などの目的で、
            本プライバシーポリシーに記載のとおり第三者サービスを利用します。
            機能提供に必要な範囲で、アカウントや端末を識別する情報が送信される場合があります。
            サービス提供者は、本プライバシーポリシーに記載された方法で、情報を第三者と共有することがあります。
          </Text>
          <Text component="p" size="sm" mb="sm">
            本アプリでは、独自のプライバシーポリシーを持つ第三者サービスを利用しています。
            利用中の第三者サービスのプライバシーポリシーは以下をご確認ください。
          </Text>
          <List size="sm" spacing="xs" withPadding>
            <List.Item>
              <Anchor
                href="https://support.google.com/admob/answer/6128543?hl=ja"
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
                Firebase Authentication、Crashlytics、Cloud Messaging、Remote
                Config、Cloud Firestore
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor
                href="https://policies.google.com/privacy?hl=ja"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google サインイン
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor
                href="https://www.apple.com/jp/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign in with Apple
              </Anchor>
            </List.Item>
          </List>
          <Text component="p" size="sm" mt="sm">
            サービス提供者は、次の場合に、利用者が提供した情報または自動的に収集された情報を開示することがあります。
          </Text>
          <List size="sm" spacing="xs" withPadding mt="xs">
            <List.Item>
              法令に基づく場合、または召喚状その他これに類する法的手続に従う必要がある場合
            </List.Item>
            <List.Item>
              権利保護、利用者または第三者の安全確保、不正調査、または政府機関からの要請への対応のために、
              開示が必要であると誠実に判断した場合
            </List.Item>
            <List.Item>
              サービス提供者の業務を委託する信頼できる事業者に対して開示する場合。
              これらの事業者は、開示された情報を独自目的で利用せず、
              本プライバシーポリシーに従うことに同意しています。
            </List.Item>
          </List>
        </section>

        <section>
          <Title order={2} size="h3" mb="sm">
            3. オプトアウト
          </Title>
          <Text component="p" size="sm">
            利用者は、本アプリをアンインストールすることで、本アプリによる情報収集を容易に停止できます。
            アンインストールには、端末の標準機能またはアプリマーケット等で提供される通常の手順をご利用ください。
            また、ATT に対応した端末では、初回のダイアログ表示後も、端末の設定からトラッキングの許可・拒否を変更できます。
          </Text>
        </section>

        <section>
          <Title order={2} size="h3" mb="sm">
            4. データ保持方針
          </Title>
          <Text component="p" size="sm">
            サービス提供者は、利用者が本アプリを利用している期間中、およびその後合理的な期間、
            利用者提供データを保持します。アカウントの削除は、本アプリ内の設定など、アプリ内で案内される方法から行えます。
            アプリ外からの削除のご依頼や、その他のお手続きが必要な場合は、
            <Anchor href="/ja/contact">お問い合わせフォーム</Anchor>
            からご連絡ください。合理的な期間内に対応します。
          </Text>
        </section>

        <section>
          <Title order={2} size="h3" mb="sm">
            5. 子どもの利用について
          </Title>
          <Text component="p" size="sm">
            サービス提供者は、13歳未満の子どもから故意にデータを収集したり、
            13歳未満の子どもに向けてマーケティングを行ったりすることはありません。
          </Text>
          <Text component="p" size="sm" mt="sm">
            本アプリは、13歳未満の方を対象としていません。サービス提供者は、
            13歳未満の子どもから個人を特定できる情報を故意に収集することはありません。
            万が一、13歳未満の子どもが個人情報を提供したことが判明した場合、
            サービス提供者は当該情報を速やかに削除します。保護者の方で、
            お子さまが個人情報を提供したことにお気づきの場合は、
            <Anchor href="/ja/contact">お問い合わせフォーム</Anchor>
            からご連絡ください。必要な対応を行います。
          </Text>
        </section>

        <section>
          <Title order={2} size="h3" mb="sm">
            6. セキュリティ
          </Title>
          <Text component="p" size="sm">
            サービス提供者は、利用者情報の機密性保護を重視しています。処理および保持する情報を保護するため、
            物理的、電子的、手続的な安全対策を講じています。
          </Text>
        </section>

        <section>
          <Title order={2} size="h3" mb="sm">
            7. 変更について
          </Title>
          <Text component="p" size="sm">
            本プライバシーポリシーは、必要に応じて更新されることがあります。
            変更がある場合は、本ページに最新のプライバシーポリシーを掲載することでお知らせします。
            継続して本アプリを利用した場合、変更内容に同意したものとみなされます。
          </Text>
          <Text component="p" size="sm" mt="sm">
            本プライバシーポリシーの施行日は 2026-04-01 です。
          </Text>
        </section>

        <section>
          <Title order={2} size="h3" mb="sm">
            8. 同意
          </Title>
          <Text component="p" size="sm">
            本アプリを利用することにより、利用者は本プライバシーポリシーに記載された内容、
            および今後の変更後の内容に従って情報が取り扱われることに同意したものとみなされます。
          </Text>
        </section>

        <section>
          <Title order={2} size="h3" mb="sm">
            9. お問い合わせ
          </Title>
          <Text component="p" size="sm">
            本アプリの利用におけるプライバシーや運用についてご質問がある場合は、
            <Anchor href="/ja/contact">お問い合わせフォーム</Anchor>
            からご連絡ください。
          </Text>
        </section>
      </Stack>
    </StandaloneLayout>
  )
}

export default PrivacyPolicyJaPage

export const Head: HeadFC = () => (
  <SEO
    pathname="/ja/saikuru/privacy-policy"
    title="SAIKURU - プライバシーポリシー"
    description="SAIKURU モバイルアプリのプライバシーポリシー"
    locale="ja"
  />
)
