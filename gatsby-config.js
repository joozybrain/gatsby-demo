module.exports = {
  pathPrefix: `/repo-name`,
  siteMetadata: {
    title: "Ben's Portfolio Page",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./src/typography.js`,
      },
    },
  ],
}
