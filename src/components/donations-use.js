import React from "react"
import medicinesIcon from "../images/medicines-icon.png"
import internetIcon from "../images/internet-icon.png"
import aidIcon from "../images/aid-icon.png"

const incentives = [
  {
    name: "Medicines and Supplies",
    icon: medicinesIcon,
    imageSrc: medicinesIcon,
    description:
      "Allows us to send medicines to church groups for distribution to families of jailed dissidents.",
  },
  {
    name: "Internet access",
    imageSrc: internetIcon,
    description:
      "Provides cellular Internet access to keep information flowing.",
  },
  {
    name: "Mutual Aid",
    imageSrc: aidIcon,
    description:
      "Provides aid to support protests, social media advertising, and electronic devices such a smartphone for citizen journalism.",
  },
]

const DonationsUse = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-2xl px-6 py-16 sm:p-16">
          <div className="max-w-xl mx-auto lg:max-w-none">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-800">
                What your donations will provide?
              </h2>
            </div>
            <div className="mt-12 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
              {incentives.map(incentive => (
                <div
                  key={incentive.name}
                  className="text-center sm:flex sm:text-left lg:block lg:text-center"
                >
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <img
                        src={incentive.imageSrc}
                        className="w-16 h-16 mx-auto"
                      />
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">
                      {incentive.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {incentive.description}
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
