module.exports = {
    plugins: [
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "UA-68633468-1",
          head: false,
          anonymize: true,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    ],

  }
  