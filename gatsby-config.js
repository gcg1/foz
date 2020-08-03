/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "FOZ",
    titleTemplate: "%s",
    description:
      "London-based product agency turning ideas into beautiful, useful websites and applications.",
    url: "https://www.foz.agency", // No trailing slash allowed!
    // image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
  },

  plugins: [
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `$(__dirname/src/assets/`,
    //   },
    // },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
