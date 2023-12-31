import { Title } from "@mantine/core";
import { ReactNode } from "react";

type PageTitleProps = {
  children: ReactNode
};
const PageTitle = (props: PageTitleProps) => {
  return <Title mb="sm">{props.children}</Title>;
};

export default PageTitle
