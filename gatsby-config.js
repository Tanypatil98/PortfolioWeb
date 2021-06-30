/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Tanay Portfolio`,
    description: `Awesome WebDev Portfolio built with Gatsby`,
    titleTemplate: `%s | Tanay Patil`,
    url: `https://temp-strapi-portfolio.netlify.app`,
    twitterUsername: `@john_smilga`,
    image: `/mainImg.png`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
