import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path')

const config: GatsbyConfig = {
  siteMetadata: {
    title: `tyamap.com`,
    description: 'Welcome to my website! I\'m a full-stack web engineer. I approach freelancing as a side gig alongside my primary job.',
    image: '/icon.jpg',
    siteUrl: `https://www.tyamap.com`,
    social: {
      twitter: `@tyamap03`,
    },
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-mantine',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GTM_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src')
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://zenn.dev/tyamap/feed?include_scraps=1&all=1`,
        name: `Zenn`,
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://note.com/tyamap/rss`,
        name: `Note`,
      },
    },
  ]
};

export default config;
