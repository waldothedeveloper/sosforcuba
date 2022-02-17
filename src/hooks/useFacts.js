import { graphql, useStaticQuery } from "gatsby"

export const useFacts = () => {
  const newData = []
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { regex: "/facts_/" } }) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
            name
          }
        }
      }
    }
  `)

  data.allFile.edges.forEach(fact => {
    switch (fact.node.name) {
      case "facts_repression":
        newData.push({
          id: fact.node.id,
          name: "REPRESSION",
          imageSrc: fact.node.childImageSharp.gatsbyImageData,
          imageAlt: "Several special police forces in Cuba after protests.",
          message:
            "Numerous special police forces deployed all over Cuba after the peaceful protests",
        })
        break

      case "facts_luisma_preso":
        newData.push({
          id: fact.node.id,
          name: "INCARCERATION",
          imageSrc: fact.node.childImageSharp.gatsbyImageData,
          imageAlt: "Luis Manuel Otero being taken prisoner in Cuba.",
          message:
            "Luis Manuel Otero, the cuban artist and leader of the 'San Isidro' Movement being handcuffed and violently taken prisoner by the police for protesting against the government.",
        })
        break

      case "facts_intimidation":
        newData.push({
          id: fact.node.id,
          name: "INTIMIDATION",
          imageSrc: fact.node.childImageSharp.gatsbyImageData,
          imageAlt: "A police officer pointing a finger to intimidate in Cuba.",
          message:
            "Police surveillance of activists of the San Isidro Movement in Havana.",
        })
        break

      case "facts_harassment":
        newData.push({
          id: fact.node.id,
          name: "HARASSMENT",
          imageSrc: fact.node.childImageSharp.gatsbyImageData,
          imageAlt: "Cuban Ministry of Culture harrasing cuban artists.",
          message:
            "Minister of Culture in Cuba, Alpidio Alonso physically assaulting members of the 27N movement.",
        })
        break

      case "facts_surveillance":
        newData.push({
          id: fact.node.id,
          name: "SURVEILLANCE",
          imageSrc: fact.node.childImageSharp.gatsbyImageData,
          imageAlt:
            "Numerous police officials outside the house of a political opposer in Cuba.",
          message:
            "Repression against UNPACU members and CubaDecide promoters in Santiago de Cuba, assault on the home of Jesus Sanchez Romero.",
        })
        break

      case "facts_beatings":
        newData.push({
          id: fact.node.id,
          name: "BEATINGS",
          imageSrc: fact.node.childImageSharp.gatsbyImageData,
          imageAlt: "A reporter is beaten for recording the protests in Cuba",
          message:
            "AP photographer, Spanish Ramon Espinosa, is attacked by the police while covering a demonstration against Cuban President Miguel Diaz-Canel in Havana, on July 11, 2021.",
        })
        break

      case "facts_arbitrary_detention":
        newData.push({
          id: fact.node.id,
          name: "ARBITRARY DETENTIONS",
          imageSrc: fact.node.childImageSharp.gatsbyImageData,
          imageAlt:
            "A young boy is detained for peacefully protesting in Cuba.",
          message:
            "Police detain a young boy during protests in Havana July 11, 2021.",
        })
        break

      case "facts_repudiation":
        newData.push({
          id: fact.node.id,
          name: "PUBLIC ACTS OF REPUDIATION",
          imageSrc: fact.node.childImageSharp.gatsbyImageData,
          imageAlt: "Repudiation against Lady in White Sara Martha Fonseca.",
          message: "Repudiation against Lady in White Sara Martha Fonseca",
        })
        break

      default:
        break
    }
  })

  return newData
}
