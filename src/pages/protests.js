import React from "react"
import Layout from "../components/layout"
import { useFetchPhotos } from "../hooks/useFetchPhotos"
import ProtestFilter from "../components/protestFilter"
import { militaryToStandard } from "../utils/militaryToStandardTime"
import { UserIcon } from "@heroicons/react/outline"
import { Link } from "gatsby"
import { useFilterProtests } from "../hooks/useFilterProtests"
//
const Protests = () => {
  const photos = useFetchPhotos()
  const { tabs, filterProtests, handleChange } = useFilterProtests()

  return (
    <>
      <Layout>
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                Upcoming Protests
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                If you would like to submit a protest, please click{" "}
                <Link
                  className="underline text-blue-500 font-medium"
                  to="/submit-protest"
                >
                  here
                </Link>
              </p>
            </div>
            <ProtestFilter tabs={tabs} handleChange={handleChange} />
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {filterProtests.map(post => (
                <div
                  key={post.node.id}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  {/*  banner image */}
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={
                        photos[Math.floor(Math.random() * (30 - 0) + 0)].urls
                          .small ||
                        "https://images.unsplash.com/photo-1584026695379-979d8dbda7f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                      }
                      alt="photo of the upcoming cuban protests"
                    />
                  </div>
                  {/* card content */}
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <div className="block mt-2">
                        <p className="text-2xl font-semibold text-gray-900">
                          {post.node.name}
                        </p>
                        <p className="mt-2 text-sm font-medium text-red-600">
                          {new Date(post.node.date).toDateString()},{" "}
                          {militaryToStandard(post.node.time)}
                        </p>

                        <p className="mt-3 text-base text-gray-500">
                          {post.node.address.street_address.replace(
                            /(^,)|(,$)/g,
                            ""
                          )}
                          {" • "}
                          {post.node.address.city} {post.node.address.state}
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
                    {/* organizer */}
                    <div className="mt-6 flex items-center justify-start font-semibold">
                      <UserIcon
                        className="h-4 w-4 text-gray-600"
                        aria-hidden="true"
                      />
                      <p className="mx-0.5 text-sm text-gray-600">
                        {Math.floor(Math.random() * 4) + 1}K people notified
                      </p>
                      {/* YOU CAN ADD SHARE ON TWITTER, FACEBOOK, INSTAGRAM ETC */}
                    </div>
                  </div>
                </div>
              ))}
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
