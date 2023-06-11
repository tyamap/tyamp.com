import { Box } from "@mantine/core";

interface MainProps {
  children: React.ReactNode
}
const Main = (props: MainProps) => {
  return (
    <Box component="main" px="md" w={{md: '70%', xs: '100%'}}>
      {props.children}
    </Box>
  );
};

export default Main;