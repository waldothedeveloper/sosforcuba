import React from "react"
// import diaz_and_raul from "../images/diaz-canel-and-raul.jpg"
import repression from "../images/repression.jpg"
import luisma_preso from "../images/luisma_preso.jpg"
import intimidation from "../images/intimidation.jpg"
import alpidio_harrasment from "../images/harassment.jpeg"
import surveillance from "../images/surveillance.jpeg"
import beatings from "../images/beatings.jpg"
import detention from "../images/arbitrary_detention.jpeg"
import repudiation from "../images/repudiation.jpg"

const features = [
  {
    name: "REPRESSION",
    imageSrc: repression,
    imageAlt: "Several special police forces in Cuba after protests.",
  },
  {
    name: "INCARCERATION",
    imageSrc: luisma_preso,
    imageAlt: "Luis Manuel Otero being taken prisoner in Cuba.",
  },
  {
    name: "INTIMIDATION",
    imageSrc: intimidation,
    imageAlt: "A police officer pointing a finger to intimidate in Cuba.",
  },
  {
    name: "HARASSMENT",
    imageSrc: alpidio_harrasment,
    imageAlt: "Cuban Ministry of Culture harrasing cuban artists.",
  },
  {
    name: "SURVEILLANCE",
    imageSrc: surveillance,
    imageAlt:
      "Numerous police officials outside the house of a political opposer in Cuba.",
  },
  {
    name: "BEATINGS",
    imageSrc: beatings,
    imageAlt: "A reporter is beaten for recording the protests in Cuba",
  },
  {
    name: "ARBITRARY DETENTIONS",
    imageSrc: detention,
    imageAlt: "A young boy is detained for peacefully protesting in Cuba.",
  },
  {
    name: "PUBLIC ACTS OF REPUDIATION",
    imageSrc: repudiation,
    imageAlt: "Repudiation against Lady in White Sara Martha Fonseca.",
  },
]

const Facts = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto pb-24 sm:py-32 sm:px-2 lg:px-4">
        <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
          <div className="max-w-3xl text-right">
            <h2 className="font-semibold text-gray-400 text-sm">
              That&apos;s about {(new Date().getFullYear() - 1959) * 365}{" "}
              thousand days...
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-red-600 sm:text-4xl">
              FOR {new Date().getFullYear() - 1959} YEARS
            </p>
            <p className="mt-4 text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl">
              the good people of Cuba have{" "}
              <span className="text-red-600">suffered,</span> without deserving
              it:
            </p>
          </div>

          <div className="space-y-16 pt-10 mt-10 sm:pt-16 sm:mt-16">
            {features.map(feature => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
              >
                <div className="mt-6 lg:mt-0 lg:col-span-5 xl:col-span-4">
                  <h3 className="text-lg font-medium text-red-600">
                    {feature.name}
                  </h3>
                  {/* <p className="mt-2 text-sm text-gray-400">
                    {feature.description}
                  </p> */}
                </div>
                <div className="flex-auto lg:col-span-7 xl:col-span-8">
                  <div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                    <img
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      className="object-center object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-32 max-w-3xl text-right">
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-red-600 sm:text-4xl">
              and have been denied political and human rights by the
              totalitarian Cuban communist regime.
            </p>
            {/* <p className="mt-4 text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl">
              the good people of Cuba have{" "}
              <span className="text-red-600">suffered,</span> without deserving
              it:
            </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facts
