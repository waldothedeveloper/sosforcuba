import React from "react"
import { useGetIcons } from "../hooks/useGetIcons"
import { GatsbyImage } from "gatsby-plugin-image"

const DonationsUse = () => {
  const data = useGetIcons()

  //
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-coolGray-100 to-coolGray-200 rounded-2xl px-6 py-16 sm:p-16">
          <div className="max-w-xl mx-auto lg:max-w-none">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-800">
                What your donations will provide?
              </h2>
            </div>
            <div className="mt-12 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
              {data.map(data => (
                <div
                  key={data.id}
                  className="text-center sm:flex sm:text-left lg:block lg:text-center"
                >
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <GatsbyImage
                        imgStyle={{ borderRadius: "0.5rem" }}
                        className="w-16 h-16 mx-auto"
                        image={data.imageSrc}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">
                      {data.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {data.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

//
export default DonationsUse
