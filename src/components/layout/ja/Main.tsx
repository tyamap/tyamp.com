import { Box } from "@mantine/core";

interface MainProps {
  children: React.ReactNode
}
const Main = (props: MainProps) => {
  return (
    <Box component="main" py="md" px='xs'>
      {props.children}
    </Box>
  );
};

export default Main;