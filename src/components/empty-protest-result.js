import React from "react"
import { PlusIcon } from "@heroicons/react/solid"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//

const EmptyProtestResults = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center">
        <StaticImage
          className="mx-auto w-24 h-24"
          src="../images/empty-protests.png"
          alt="protest icon"
          placeholder="blurred"
          layout="fullWidth"
        />

        <h3 className="mt-2 text-sm font-medium text-gray-50">
          No upcoming protests
        </h3>
        <p className="mt-1 text-sm text-gray-400">
          Submit a new protest or spread the word.
        </p>
      </div>
      <div className="mt-6">
        <Link
          to="/submit-protest"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          New Protest
        </Link>
      </div>
    </div>
  )
}

export default EmptyProtestResults
