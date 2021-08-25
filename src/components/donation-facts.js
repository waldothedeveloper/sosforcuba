import React from "react"
import girlProtesting from "../images/girl_protesting.jpg"
import manProtesting from "../images/man-washington-protest.jpg"

//
const DonationFacts = () => {
  return (
    <div className="bg-gray-50">
      <div className="min-h-screen grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2">
        <div className="relative flex">
          <img
            src={girlProtesting}
            alt=""
            className="absolute inset-0 w-full h-full object-center object-cover"
          />
          <div className="relative w-full flex flex-col items-start justify-end bg-black bg-opacity-40 p-8 sm:p-12">
            <h2 className="text-lg font-medium text-white text-opacity-75">
              Self-Improvement
            </h2>
            <p className="mt-1 text-2xl font-medium text-white">
              Journals and note-taking
            </p>
            <a
              href="#"
              className="mt-4 text-sm font-medium text-gray-900 bg-white py-2.5 px-4 rounded-md hover:bg-gray-50"
            >
              Shop now
            </a>
          </div>
        </div>
        <div className="relative flex">
          <img
            src={manProtesting}
            alt=""
            className="absolute inset-0 w-full h-full object-center object-cover"
          />
          <div className="relative w-full flex flex-col items-start justify-end bg-black bg-opacity-40 p-8 sm:p-12">
            <h2 className="text-lg font-medium text-white text-opacity-75">
              Desk and Office
            </h2>
            <p className="mt-1 text-2xl font-medium text-white">
              Work from home accessories
            </p>
            <a
              href="#"
              className="mt-4 text-sm font-medium text-gray-900 bg-white py-2.5 px-4 rounded-md hover:bg-gray-50"
            >
              Shop now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonationFacts
