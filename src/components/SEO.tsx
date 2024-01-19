import React from "react";
import { useSiteMetadata } from "src/hooks/useSiteMetadata";

interface SEOProps {
  pathname?: string
  title?: string
  description?: string
  locale?: 'en' | 'ja'
  children?: React.ReactNode
}
const SEO = ({ title, description, locale, pathname, children }: SEOProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    social,
  } = useSiteMetadata();

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    type: pathname ? "article" : "website",
    social,
  };

  return (
    <React.Fragment>
      <html lang={locale || "en"} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content={seo.type} />
      {seo.social?.twitter && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={seo.social.twitter} />
        </>
      )}
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🍜</text></svg>"
      />
      {children}
    </React.Fragment>
  );
};

export default SEO;