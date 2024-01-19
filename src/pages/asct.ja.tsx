import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import SEO from "src/components/SEO"
import PageTitle from "src/components/PageTitle"
import { Layout } from "src/components/layout/ja"
import { Button, Table, Text } from "@mantine/core"

// 特定商取引法に基づく表記ページ
// ASCT = Act on Specified Commercial Transactions
const ASCTPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <PageTitle>特定商取引法に基づく表記</PageTitle>
      <Table>
        <tbody>
          {elements.map((element) => (
            <tr key={element.name}>
              <th>{element.name}</th>
              <td>{element.desc}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  )
}

export default ASCTPage

export const Head: HeadFC = () => <SEO title="特定商取引法に基づく表記" />

const elements = [
  { name: '事業者名', desc: '山下智矢' },
  { name: '所在地', desc: '請求があったら遅延なく開示します。' },
  { name: '電話番号', desc: '請求があったら遅延なく開示します。' },
  { name: 'メールアドレス', desc: 'tom333my@outlook.com' },
  { name: '運営統括責任者', desc: '山下智矢' },
  { name: '追加料金手数料等の追加料金', desc: '特にありません。' },
  { name: '交換及び返品', desc: 'お客様都合による返品・交換は原則として対応しておりません。' },
  { name: '引渡時期', desc: '注文後すぐにご利用いただけます。' },
  { name: '受け付け可能な決済手段', desc: 'クレジットカード' },
  { name: '決済期間', desc: 'クレジットカード決済の場合はただちに処理されます。' },
  { name: '販売価格', desc: '各商品ページに記載の金額とします。' },
];