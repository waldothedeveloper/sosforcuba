import React from "react"
import Layout from "../components/layout"
import { useFetchPhotos } from "../hooks/useFetchPhotos"
import ProtestFilter from "../components/protestFilter"
import { militaryToStandard } from "../utils/militaryToStandardTime"
import { Link } from "gatsby"
import { useFilterProtests } from "../hooks/useFilterProtests"
import moment from "moment"
import EmptyProtestResults from "../components/empty-protest-result"

// Math.floor(Math.random() * (30 - 0) + 0)
//
const Protests = () => {
  const photos = useFetchPhotos()
  console.log("photos: ", photos)
  const { tabs, filterProtests, handleChange } = useFilterProtests()
  console.log("filterProtests: ", filterProtests)

  return (
    <>
      <Layout>
        <div className="relative bg-gray-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-gray-800 h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-50 sm:text-4xl">
                Upcoming Protests
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-base text-gray-400 sm:mt-4 ">
                To submit a protest, click{" "}
                <Link
                  className="underline text-sky-400 font-medium"
                  to="/submit-protest"
                >
                  here
                </Link>
              </p>
            </div>

            {/* TO FILTER PROTESTS */}
            <ProtestFilter tabs={tabs} handleChange={handleChange} />

            {/*  */}
            <div>
              {filterProtests.length > 0 ? (
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                  {filterProtests.map((post, id) => (
                    <div
                      key={post.node.id}
                      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                      {/*  banner image */}
                      <div className="flex-shrink-0 relative">
                        <img
                          className="h-48 w-full object-cover"
                          src={
                            photos[id].urls.small ||
                            "https://images.unsplash.com/photo-1584026695379-979d8dbda7f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                          }
                          alt={photos[id].alt_description}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-800" />
                        <p className="text-gray-400 text-xs absolute -mt-5 ml-1">
                          Photo by{" "}
                          <a
                            className="text-gray-300"
                            target="blank"
                            rel="noopener noreferrer"
                            href={`https://unsplash.com/@${photos[id].user.username}?utm_source=sos_for_cuba&utm_medium=referral`}
                          >
                            {photos[id].user.username}
                          </a>{" "}
                          on{" "}
                          <a
                            className="text-gray-300"
                            target="blank"
                            rel="noopener noreferrer"
                            href="https://unsplash.com/?utm_source=sos_for_cuba&utm_medium=referral"
                          >
                            Unsplash
                          </a>
                        </p>
                      </div>
                      {/* card content */}

                      <div className="flex-1 bg-gray-700 p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <div className="block mt-2">
                            <p className="text-2xl font-semibold text-gray-50">
                              {post.node.name}
                            </p>
                            {/* Date of the protest */}
                            <p className="mt-2 text-sm font-medium bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                              {moment(post.node.date).format("dddd, MMM Do")}
                              {` `}
                              {militaryToStandard(post.node.time)}
                            </p>

                            <p className="mt-3 text-base text-gray-300">
                              {post.node.address.street_address.replace(
                                /(^,)|(,$)/g,
                                ""
                              )}
                              {" • "}
                              <span className="font-bold text-gray-300">
                                {" "}
                                {post.node.address.city}{" "}
                                {post.node.address.state}
                              </span>
                              <br />
                              {post.node.address.country ===
                              "United States of America"
                                ? "USA"
                                : post.node.address.country}
                              {", "}
                              {post.node.address.zipcode}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyProtestResults />
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Protests
// Protests.propTypes = {
//   data: PropTypes.object,
// }

//
// export const data = graphql`
//   query getAllUpcomingProtests($currentDate: Date!) {
//     allProtest(
//       filter: { date: { gte: $currentDate }, approved: { eq: "true" } }
//     ) {
//       edges {
//         node {
//           id
//           name
//           contact {
//             email
//             message
//             phone_number
//           }
//           address {
//             city
//             country
//             state
//             street_address
//             zipcode
//           }
//           _id
//           time
//           date(formatString: "dddd, MMM Do")
//         }
//       }
//     }
//   }
// `
