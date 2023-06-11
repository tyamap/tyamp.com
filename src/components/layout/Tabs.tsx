import { Badge as MantineBadge, Tabs as MantineTabs } from '@mantine/core'
import { useLocation } from "@reach/router"
import { navigate } from "gatsby"
import { IconBook, IconNotebook, IconBriefcase, IconBookmark, IconMail } from '@tabler/icons-react';


const Badge = ({ children }: { children: React.ReactNode }) => {
  return <MantineBadge color="cyan" size="md" p={0} w="xl" h="lg">{children}</MantineBadge>
}
type Tab = { title: string, value: string, icon?: JSX.Element, rightSection?: JSX.Element }
const tabs: Tab[] = [
  { title: 'Overview', value: 'overview', icon: <IconBook /> },
  { title: 'Projects', value: 'projects', icon: <IconNotebook />, rightSection: <Badge>12</Badge> },
  { title: 'Works', value: 'works', icon: <IconBriefcase />, rightSection: <Badge>4</Badge> },
  { title: 'Posts', value: 'posts', icon: <IconBookmark />, rightSection: <Badge>120</Badge> },
  { title: 'Contact', value: 'contact', icon: <IconMail /> },
]
const rootTab = tabs[0]

interface TabsProps {
}
const Tabs = (props: TabsProps) => {
  const location = useLocation()

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
              rightSection={tab.rightSection}
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
