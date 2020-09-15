module.exports = {
  siteMetadata: {
    title: `Elas@Computação UFCG`,
    //siteUrl: `https://www.gatsbyjs.org`, adicionar depois!
    description: `Site do Elas@Computação UFCG`,
    social: [
      {
        name: "github",
        url: "https://github.com/elasComputacao"
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/elascomputacao"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#d27c90`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            subsets: [`latin`],
            variants: [`400`, `500`, `600`]
          },
          {
            family: `Raleway`,
            subsets: [`latin`],
            variants: [`300`, `400`, `500`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elas@Computação UFCG`,
        short_name: `Elas@Computação UFCG`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#d27c90`,
        display: `standalone`,
        icon: `src/assets/logos/elas_vertical.png`
      },
    },
  ],
}