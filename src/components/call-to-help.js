import React from "react"
import { ExternalLinkIcon } from "@heroicons/react/solid"

//
const CallToHelp = () => {
  /* This example requires Tailwind CSS v2.0+ */

  return (
    <div className="py-12 md:py-6">
      <div className="relative bg-gray-800">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          {/* <h2 className="text-sm font-semibold uppercase tracking-wider text-blueGray-400">
              Learn more about
            </h2> */}
          <p className="mt-2 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent text-3xl font-extrabold tracking-tight sm:text-4xl">
            How can you help?
          </p>
          <p className="mt-3 text-lg bg-gradient-to-r from-coolGray-100 to-coolGray-300 bg-clip-text text-transparent max-w-2xl mx-auto">
            International solidarity at this time is urgent. If you are Cuban or
            you want to support the freedom of the Cuban people, here&apos;s
            what you can do.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-gradient-to-r from-red-500 to-red-800 text-coolGray-50">
                Visit Help Center
                <ExternalLinkIcon
                  className="-mr-1 ml-3 h-5 w-5 text-coolGray-50"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CallToHelp
