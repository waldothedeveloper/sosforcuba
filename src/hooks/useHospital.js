import { useStaticQuery, graphql } from "gatsby"

export const useHospital = () => {
  const newData = []
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { regex: "/hosp_/" } }) {
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

  //
  data.allFile.edges.map(fact => {
    switch (fact.node.name) {
      case "hosp_hospital-in-cuba-1":
        newData.push({
          id: fact.node.id,
          imageSrc: fact.node.childImageSharp.gatsbyImageData,
          imageAlt: "And old man naked in a hospital in Cuba",
        })
        break

      case "hosp_person_hospital_2":
        newData.push({
          id: fact.node.id,
          imageSrc: fact.node.childImageSharp.gatsbyImageData,
          imageAlt: "people in rusted beds in a hospital in Cuba",
        })
        break

      case "hosp_person_hospital_3":
        newData.push({
          id: fact.node.id,
          imageSrc: fact.node.childImageSharp.gatsbyImageData,
          imageAlt: "people on the floor in a hospital in Cuba",
        })
        break

      case "hosp_hospital-in-cuba-4":
        newData.push({
          id: fact.node.id,
          imageSrc: fact.node.childImageSharp.gatsbyImageData,
          imageAlt: "flooded floors in a hospital in Cuba",
        })
        break

      case "hosp_hospital-in-cuba-5":
        newData.push({
          id: fact.node.id,
          imageSrc: fact.node.childImageSharp.gatsbyImageData,
          imageAlt: "a bathroom broken in a hospital in Cuba",
        })
        break

      case "hosp_doctor_hospital":
        newData.push({
          id: fact.node.id,
          name: "BEATINGS",
          imageSrc: fact.node.childImageSharp.gatsbyImageData,
          imageAlt:
            "a doctor showing a disgusting mattress in a hospital in Cuba",
        })
        break

      case "hosp_hospital_bed_in_cuba":
        newData.push({
          id: fact.node.id,
          imageSrc: fact.node.childImageSharp.gatsbyImageData,
          imageAlt: "a broken hospital bed in Cuba",
        })
        break

      case "hosp_hospital-in-cuba-3":
        newData.push({
          id: fact.node.id,
          imageSrc: fact.node.childImageSharp.gatsbyImageData,
          imageAlt: "Repudiation against Lady in White Sara Martha Fonseca.",
        })
        break

      case "hosp_hospital-in-cuba":
        newData.push({
          id: fact.node.id,
          imageSrc: fact.node.childImageSharp.gatsbyImageData,
          imageAlt: "horrible conditions in a hospital in Cuba",
        })
        break

      case "hosp_old-people-hospital-in-cuba":
        newData.push({
          id: fact.node.id,
          imageSrc: fact.node.childImageSharp.gatsbyImageData,
          imageAlt: "horrible conditions in a hospital in Cuba",
        })
        break

      case "hosp_person_hospital_4":
        newData.push({
          id: fact.node.id,
          imageSrc: fact.node.childImageSharp.gatsbyImageData,
          imageAlt: "a mom holds her child in her arms in a hospital in Cuba",
        })
        break

      default:
        break
    }
  })

  return newData
}
