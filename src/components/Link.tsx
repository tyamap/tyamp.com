import { css } from "@emotion/react";

interface LinkProps {
  children: React.ReactNode;
  href: string | undefined | null;
}
const Link = (props: LinkProps) => {
  const { children, href } = props;
  return (
    <a
      href={href || undefined}
      target="_blank"
      rel="noopener"
      // @ts-ignore
      css={style}
    >
      {children}
    </a>
  );
};

export default Link;

const style = css`
  &:link,
  &:visited {
    cursor: pointer;
    color: blue;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;