import { Tabs as MantineTabs } from '@mantine/core'
import { useLocation } from "@reach/router"
import { navigate } from "gatsby"

type Tab = { title: string, value: string }
const tabs: Tab[] = [
  { title: 'Overview', value: 'overview' },
  { title: 'Projects', value: 'projects' },
  { title: 'Works', value: 'works' },
  { title: 'Posts', value: 'posts' },
  { title: 'Contact', value: 'contact' },
]
const routeTab = tabs[0]

interface TabsProps {
}
const Tabs = (props: TabsProps) => {
  const location = useLocation()

  return (
    <nav>
      <MantineTabs color="cyan" defaultValue="overview"
        value={location.pathname === '/'
          ? routeTab.value
          : location.pathname.replaceAll('/', '')
        }
        onTabChange={(value) => {
          if (value === routeTab.value) {
            navigate('/')
          } else {
            navigate(`/${value}`)
          }
        }}
      >
        <MantineTabs.List>
          {tabs.map((tab) => (
            <MantineTabs.Tab key={tab.value} value={tab.value}>
              {tab.title}
            </MantineTabs.Tab>
          ))}
        </MantineTabs.List >
      </MantineTabs >
    </nav>
  );
};

export default Tabs;