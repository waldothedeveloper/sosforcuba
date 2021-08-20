import React from "react"
import { useFacts } from "../hooks/useFacts"
import { GatsbyImage } from "gatsby-plugin-image"

const listOfFacts = [
  "Embark touristic boats.",
  "Have a contract for cable television",
  "Live in the capital without a special permit",
  "Kill a cow",
  "Protest against anything",
  "Have double citizenship",
  "Create opposing political parties",
  "Invest in the middle to big companies",
  "Import cordless microphones",
  "Invite a tourist to their house",
  "Sell shrimp or lobster",
  "Be outside of Cuban territory for more than 2 years",
  "Educate their children in unconventional or private ways",
  "Bring donations to Cuba",
  "Belong to a different political syndicate",
  "Critique the government",
  "Take food from one province to another",
  "Come back to Cuba after immigrating -unless approved by the gov-",
  "Organize any sports or artistic activities without the government's consent.",
  "Create a private press business.",
  "Distribute information coming from the USA's government or any other private agency or entity.",
]
//
const Facts = () => {
  const facts = useFacts()

  //
  return (
    <div className="max-w-7xl mx-auto sm:py-32 sm:px-2 lg:px-4">
      <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
        <div className="max-w-3xl text-right">
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-red-600 sm:text-4xl">
            FOR {new Date().getFullYear() - 1959} YEARS
          </p>
          <p className="mt-4 text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl">
            the good people of Cuba have{" "}
            <span className="text-red-600">suffered,</span> without deserving
            it:
          </p>
        </div>
        {/* each of the facts */}
        {facts.map(fact => (
          <div
            key={fact.id}
            className="min-h-screen flex flex-col items-center justify-center"
          >
            <div className="mt-6 lg:mt-0">
              <h3 className="text-3xl font-semibold text-red-600 my-12">
                {fact.name}
              </h3>
            </div>

            <GatsbyImage
              imgStyle={{ borderRadius: "0.5rem" }}
              className="md:w-full md:h-full md:max-w-4xl w-80 h-96 rounded-lg overflow-hidden mx-auto"
              image={fact.imageSrc}
              alt=""
            />

            <p className="mt-4 text-gray-400 text-base text-center mx-auto max-w-xl px-4 md:px-0">
              {fact.message}
            </p>
          </div>
        ))}
        {/* list of prohibitions */}
        <div className="mt-32 max-w-3xl">
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl">
            and have been denied{` `}
            <span className="text-red-600 underline">
              basic political and human rights
            </span>{" "}
            by the totalitarian Cuban communist regime.
          </p>
          <p className="mt-24 text-3xl font-extrabold tracking-tight text-gray-400 sm:text-4xl">
            If you want to know more..
          </p>
          <p className="mt-24 text-3xl font-extrabold tracking-tight text-gray-400 sm:text-4xl">
            The list of prohibitions that Cubans have faced in all these years
            is even worse.
          </p>
          <p className="mt-24 text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl text-left">
            Cubans <span className="text-red-600">can NOT:</span>
          </p>
        </div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div>
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
              {listOfFacts.map(faq => (
                <div key={faq}>
                  <dt className="text-xl leading-6 font-medium text-gray-400">
                    {faq}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facts
