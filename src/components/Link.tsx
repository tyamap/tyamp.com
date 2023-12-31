import { css } from "@emotion/react";

interface LinkProps {
  children: React.ReactNode;
  href: string | undefined | null;
  label?: string;
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
      aria-label={props.label}
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
    color: steelblue;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;