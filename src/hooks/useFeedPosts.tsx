import { useStaticQuery, graphql } from "gatsby"

type Post = {
  title: string | null
  link: string | null
  pubDate: string | null
  platform: 'Zenn' | 'Qiita' | 'note'
}

export const useFeedPosts = () => {
  const data = useStaticQuery<Queries.Query>(graphql`
  query {
    allFeedZenn {
      nodes {
        title
        link
        pubDate
      }
      totalCount
    }
    allFeedNote {
      nodes {
        title
        link
        pubDate
      }
      totalCount
    }
  }
  `)

  const totalCount = data.allFeedZenn.totalCount + data.allFeedNote.totalCount

  const zennPosts: Post[] = data.allFeedZenn.nodes.map((post) => {
    return {
      platform: 'Zenn',
      ...post,
    }
  })
  const notePosts: Post[] = data.allFeedNote.nodes.map((post) => {
    return {
      platform: 'note',
      ...post,
    }
  })

  // 日付でソート
  const nodes = [...zennPosts, ...notePosts].sort((a, b) => {
    return a.pubDate! > b.pubDate! ? 1 : -1
  })

  return { totalCount, nodes }
}