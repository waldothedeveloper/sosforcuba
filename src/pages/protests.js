import React from "react"
import Layout from "../components/layout"
import { useFetchProtests } from "../hooks/useFetchProtests"
import { useFetchPhotos } from "../hooks/useFetchPhotos"
const options = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
}

const Protests = () => {
  const data = useFetchProtests()
  const photos = useFetchPhotos()

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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                libero labore natus atque, ducimus sed.
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {data.map(post => (
                <div
                  key={post.node.id}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  {/*  banner image */}
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={
                        photos[Math.floor(Math.random() * photos.length) + 1]
                          .urls.small
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
                        <p className="text-sm font-medium text-red-600">
                          {new Date(post.node.date).toLocaleDateString(
                            "en-US",
                            options
                          )}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {post.node.location}
                        </p>
                      </div>
                    </div>
                    {/* organizer */}
                    <div className="mt-6 flex items-center">
                      <p className="text-sm font-medium text-gray-900">
                        {post.node.organizer}
                      </p>
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
