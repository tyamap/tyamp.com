import * as React from "react"
import { HeadFC } from "gatsby"
import { Accordion, Anchor, Stack, Text, Title } from "@mantine/core"
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

const SupportJaPage: React.FC = () => {
  return (
    <StandaloneLayout>
      <LegalBundleNav bundle={bundle} />
      <PageTitle>サポート</PageTitle>
      <Stack spacing="lg">
        <section>
          <Text component="p" size="sm">
            SAIKURU をご利用いただきありがとうございます。本アプリは、
            ローリングストック方式で家庭の防災備蓄を管理するモバイルアプリです。
            このページでは、お問い合わせ窓口とよくあるご質問をご案内します。
          </Text>
        </section>

        <section>
          <Title order={2} size="h3" mb="sm">
            お問い合わせ
          </Title>
          <Text component="p" size="sm">
            ご質問・不具合のご報告・ご要望などは、
            <Anchor href="/ja/contact">お問い合わせフォーム</Anchor>
            よりご連絡ください。原則として数営業日以内に返信いたします。
          </Text>
          <Text component="p" size="sm" mt="sm">
            不具合をご報告いただく際は、以下の情報を添えていただけると
            スムーズな対応が可能です。
          </Text>
          <Text component="ul" size="sm" mt={4}>
            <li>ご利用端末の機種・OS バージョン（例: iPhone 15 / iOS 18.2）</li>
            <li>アプリのバージョン（設定 &gt; アプリについて）</li>
            <li>発生した現象と、再現までの手順</li>
          </Text>
        </section>

        <section>
          <Title order={2} size="h3" mb="sm">
            よくあるご質問
          </Title>
          <Accordion variant="separated">
            <Accordion.Item value="notifications">
              <Accordion.Control>
                期限アラートの通知が届きません
              </Accordion.Control>
              <Accordion.Panel>
                <Text size="sm">
                  端末の設定で SAIKURU の通知が有効になっているか、
                  アプリにサインインしているかをご確認ください
                  （通知はアカウント単位で配信されます）。通知は毎日 8:00（JST）
                  に配信されます。長期間アプリを起動していない場合は、
                  一度アプリを開いて通知スケジュールを更新してください。
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="offline">
              <Accordion.Control>
                オフラインでも利用できますか？
              </Accordion.Control>
              <Accordion.Panel>
                <Text size="sm">
                  はい。SAIKURU は備蓄データを端末にキャッシュしているため、
                  通信できない場所でもアイテム一覧・数量をご確認いただけます。
                  オフライン中の変更は、ネットワーク接続時に自動で同期されます。
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="account-delete">
              <Accordion.Control>
                アカウントとデータを削除するには？
              </Accordion.Control>
              <Accordion.Panel>
                <Text size="sm">
                  アプリ内の「設定 &gt; アカウント &gt; アカウント削除」から
                  削除できます。サーバー上のユーザープロフィール・
                  ひも付く世帯データすべてが削除されます。アプリ内から
                  削除できない場合は、
                  <Anchor href="/ja/contact">お問い合わせフォーム</Anchor>
                  よりご連絡ください。
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="data-loss">
              <Accordion.Control>
                登録したデータが表示されません
              </Accordion.Control>
              <Accordion.Panel>
                <Text size="sm">
                  データはアカウント単位で保存されます。ゲストモードで
                  利用後にサインインした場合、サインイン時の引き継ぎ設定を
                  有効にしていないとゲストデータは引き継がれません。
                  以前とは別の Google / Apple アカウントでサインインしている
                  可能性もあるため、元のアカウントで再度サインインをお試しください。
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="ads">
              <Accordion.Control>
                広告を非表示にできますか？
              </Accordion.Control>
              <Accordion.Panel>
                <Text size="sm">
                  広告は無料プランで表示されます。広告を非表示にできる
                  有料プラン（追加機能付き）は今後のアップデートで提供予定です。
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </section>

        <section>
          <Title order={2} size="h3" mb="sm">
            関連情報
          </Title>
          <Text component="p" size="sm">
            あわせて
            <Anchor href="/ja/saikuru/privacy-policy">
              プライバシーポリシー
            </Anchor>
            および
            <Anchor href="/ja/saikuru/terms">利用規約</Anchor>
            もご確認ください。
          </Text>
        </section>
      </Stack>
    </StandaloneLayout>
  )
}

export default SupportJaPage

export const Head: HeadFC = () => (
  <SEO
    pathname="/ja/saikuru/support"
    title="SAIKURU — サポート"
    description="モバイルアプリ SAIKURU のサポートページ。お問い合わせ窓口とよくあるご質問。"
  />
)
