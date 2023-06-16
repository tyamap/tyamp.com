import { Box } from "@mantine/core";

interface MainProps {
  children: React.ReactNode
}
const Main = (props: MainProps) => {
  return (
    <Box component="main" p='md'>
      {props.children}
    </Box>
  );
};

export default Main;