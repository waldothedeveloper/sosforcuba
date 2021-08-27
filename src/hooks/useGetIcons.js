import { useStaticQuery, graphql } from "gatsby"

export const useGetIcons = () => {
  const whereDonationsGo = [
    {
      name: "Medicines and Supplies",
      imageSrc: "",
      description:
        "Allows us to send medicines to church groups for distribution to families of jailed dissidents.",
    },
    {
      name: "Internet access",
      imageSrc: "",
      description:
        "Allow us to purchase of internet access packages to keep information flowing.",
    },
    {
      name: "Mutual Aid",
      imageSrc: "",
      description:
        "Allow us to provide support for protests, social media advertising, and electronic devices such as smartphones for citizen journalism.",
    },
  ]
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { regex: "/-icon/" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  data?.allFile?.edges.map(data => {
    if (data.node.name === "medicines-icon") {
      whereDonationsGo[0].imageSrc = data.node.childImageSharp.gatsbyImageData
      whereDonationsGo[0].id = data.node.id
    }

    if (data.node.name === "internet-icon") {
      whereDonationsGo[1].imageSrc = data.node.childImageSharp.gatsbyImageData
      whereDonationsGo[1].id = data.node.id
    }

    if (data.node.name === "aid-icon") {
      whereDonationsGo[2].imageSrc = data.node.childImageSharp.gatsbyImageData
      whereDonationsGo[2].id = data.node.id
    }
  })

  return whereDonationsGo
}
