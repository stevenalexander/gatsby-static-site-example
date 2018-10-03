module.exports = {
  siteMetadata: {
    title: 'Static site example'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-static-site-example',
        short_name: 'Static site',
        start_url: '/',
        background_color: '#03A9F4',
        theme_color: '#03A9F4',
        display: 'minimal-ui',
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-offline'
  ]
}
