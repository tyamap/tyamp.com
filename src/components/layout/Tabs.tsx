import { Badge as MantineBadge, Tabs as MantineTabs } from '@mantine/core'
import { useLocation } from "@reach/router"
import { navigate } from "gatsby"
import { IconBook, IconNotebook, IconBriefcase, IconBookmark, IconMail } from '@tabler/icons-react';
import { useProjects } from 'src/hooks/useProjects';
import { useClientWorks } from 'src/hooks/useClientWorks';
import { useFeedPosts } from 'src/hooks/useFeedPosts';


const Badge = ({ children }: { children: React.ReactNode }) => {
  return <MantineBadge color="cyan" size="md" p={0} w="xl" h="lg">{children}</MantineBadge>
}
type Tab = { title: string, value: string, icon?: JSX.Element, count?: number }
const tabs: Tab[] = [
  { title: 'Overview', value: 'overview', icon: <IconBook /> },
  { title: 'Projects', value: 'projects', icon: <IconNotebook /> },
  { title: 'Works', value: 'works', icon: <IconBriefcase /> },
  { title: 'Posts', value: 'posts', icon: <IconBookmark /> },
  { title: 'Contact', value: 'contact', icon: <IconMail /> },
]
const rootTab = tabs[0]

interface TabsProps {
}
const Tabs = (props: TabsProps) => {
  const location = useLocation()

  // コンテンツの総数を取得して、タブにバッジを表示
  tabs[1].count = useProjects().totalCount
  tabs[2].count = useClientWorks().totalCount
  tabs[3].count = useFeedPosts().totalCount

  return (
    <nav>
      <MantineTabs color="cyan" defaultValue="overview"
        // The first tab element is treated as the root page.
        value={location.pathname === '/'
          ? rootTab.value
          : location.pathname.replaceAll('/', '')
        }
        onTabChange={(value) => {
          if (value === rootTab.value) {
            navigate('/')
          } else {
            navigate(`/${value}`)
          }
        }}
      >
        <MantineTabs.List>
          {tabs.map((tab) => (
            <MantineTabs.Tab key={tab.value} value={tab.value}
              icon={tab.icon}
              rightSection={tab.count && <Badge>{tab.count}</Badge>}
            >
              {tab.title}
            </MantineTabs.Tab>
          ))}
        </MantineTabs.List >
      </MantineTabs >
    </nav>
  );
};

export default Tabs;
