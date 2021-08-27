import React from "react"
import { StaticImage } from "gatsby-plugin-image"

//
const features = [
  {
    name: "Do not Negotiate",
    description:
      "Do not negotiate with the Cuban communist regime. Demand the release of political prisoners, the end of repression and guarantees of civil liberties.",
  },
  {
    name: "Apply Sanctions",
    description:
      "Apply political, diplomatic, and financial sanctions for those inflicting human rights abuses.",
  },
  {
    name: "Spread awarness",
    description:
      "Demand accountability and social responsibility from private companies to stop enriching the regime by violating the rights of Cubans.",
  },
  {
    name: "Use your leadership",
    description:
      "Invite all governments to take similar steps. Enforce different mechanisms of individual sanctions at the disposal of the UN, OAS, European Union, and U.S. government. Exclude the dictatorial regime from all international forums.",
  },
]

const Donations_WhatElse = () => {
  return (
    <div className="bg-gradient-to-r from-coolGray-50 to-coolGray-100">
      <section aria-labelledby="features-heading" className="relative">
        <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
          <StaticImage
            className="object-top"
            src="../images/girl_protesting.jpg"
            alt="A girl in Washington protesting for the freedom of Cuba"
            placeholder="blurred"
            layout="fullWidth"
            transformOptions={{ fit: "cover" }}
          />
        </div>

        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="lg:col-start-2">
            <h2 id="features-heading" className="font-medium text-gray-500">
              Can&apos;t donate?
            </h2>
            <p className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">
              What else can you do?
            </p>
            <p className="mt-4 text-gray-500">
              Demand the following from your governments and representatives.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
              {features.map(feature => (
                <div key={feature.name}>
                  <dt className="font-bold text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Donations_WhatElse
