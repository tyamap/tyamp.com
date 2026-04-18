import { useStaticQuery, graphql } from "gatsby"

type Post = {
  id: string | null
  title: string | null
  link: string | null
  pubDate: string | null
  thumbnail?: string | null
  platform: 'Zenn' | 'Qiita' | 'note' | 'Speaker Deck'
}

export const useFeedPosts = () => {
  const data = useStaticQuery<Queries.Query>(graphql`
  query {
    allFeedZenn {
      nodes {
        id
        title
        link
        pubDate
        enclosure {
          url
        }
      }
      totalCount
    }
    allFeedNote {
      nodes {
        id
        title
        link
        pubDate
        media {
          thumbnail
        }
      }
      totalCount
    }
    allFeedSpeakerdeck {
      nodes {
        id
        title
        link
        pubDate
        media {
          thumbnail {
            attrs {
              url
            }
          }
        }
      }
      totalCount
    }
  }
  `)

  const totalCount =
    data.allFeedZenn.totalCount +
    data.allFeedNote.totalCount +
    data.allFeedSpeakerdeck.totalCount

  const zennPosts: Post[] = data.allFeedZenn.nodes.map((post) => {
    return {
      ...post,
      thumbnail: post.enclosure?.url,
      platform: 'Zenn',
    }
  })
  const notePosts: Post[] = data.allFeedNote.nodes.map((post) => {
    return {
      ...post,
      thumbnail: post.media?.thumbnail,
      platform: 'note',
    }
  })
  const speakerdeckPosts: Post[] = data.allFeedSpeakerdeck.nodes.map((post) => {
    return {
      ...post,
      thumbnail: post.media?.thumbnail?.attrs?.url,
      platform: 'Speaker Deck',
    }
  })

  // 日付でソート
  const nodes = [...zennPosts, ...notePosts, ...speakerdeckPosts].sort((a, b) => {
    // Date型で比べる
    const aDate = new Date(a.pubDate!)
    const bDate = new Date(b.pubDate!)
    return bDate.getTime() - aDate.getTime()
  })

  return { totalCount, nodes }
}