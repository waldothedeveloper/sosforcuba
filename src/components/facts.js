import React from "react"

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
    message:
      "Numerous special police forces deployed all over Cuba after the peaceful protests",
  },
  {
    name: "INCARCERATION",
    imageSrc: luisma_preso,
    imageAlt: "Luis Manuel Otero being taken prisoner in Cuba.",
    message:
      "Luis Manuel Otero, the cuban artist and leader of the 'San Isidro' Movement being handcuffed and violently taken prisoner by the police for protesting against the government.",
  },
  {
    name: "INTIMIDATION",
    imageSrc: intimidation,
    imageAlt: "A police officer pointing a finger to intimidate in Cuba.",
    message:
      "Police surveillance of activists of the San Isidro Movement in Havana.",
  },
  {
    name: "HARASSMENT",
    imageSrc: alpidio_harrasment,
    imageAlt: "Cuban Ministry of Culture harrasing cuban artists.",
    message:
      "Minister of Culture in Cuba, Alpidio Alonso physically assaulting members of the 27N movement.",
  },
  {
    name: "SURVEILLANCE",
    imageSrc: surveillance,
    imageAlt:
      "Numerous police officials outside the house of a political opposer in Cuba.",
    message:
      "Repression against UNPACU members and CubaDecide promoters in Santiago de Cuba, assault on the home of Jesus Sanchez Romero.",
  },
  {
    name: "BEATINGS",
    imageSrc: beatings,
    imageAlt: "A reporter is beaten for recording the protests in Cuba",
    message:
      "AP photographer, Spanish Ramon Espinosa, is attacked by the police while covering a demonstration against Cuban President Miguel Diaz-Canel in Havana, on July 11, 2021.",
  },
  {
    name: "ARBITRARY DETENTIONS",
    imageSrc: detention,
    imageAlt: "A young boy is detained for peacefully protesting in Cuba.",
    message:
      "Police detain a young boy during protests in Havana July 11, 2021.",
  },
  {
    name: "PUBLIC ACTS OF REPUDIATION",
    imageSrc: repudiation,
    imageAlt: "Repudiation against Lady in White Sara Martha Fonseca.",
    message: "Repudiation against Lady in White Sara Martha Fonseca",
  },
]

const Facts = () => {
  return (
    <div className="max-w-7xl mx-auto sm:py-32 sm:px-2 lg:px-4">
      <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
        <div className="max-w-3xl text-right">
          {/* <h2 className="font-semibold text-gray-400 text-sm">
            That&apos;s about {(new Date().getFullYear() - 1959) * 365} days...
          </h2> */}
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
        {features.map(fact => (
          <div
            key={fact.imageSrc}
            className="min-h-screen flex flex-col items-center justify-center"
          >
            <div className="mt-6 lg:mt-0">
              <h3 className="text-3xl font-semibold text-red-600 my-12">
                {fact.name}
              </h3>
            </div>
            <div className="md:w-auto w-80 h-96 rounded-lg overflow-hidden">
              <img
                src={fact.imageSrc}
                alt={fact.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
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
            And that&apos;s just the beginning...
          </p>
          <p className="mt-24 text-3xl font-extrabold tracking-tight text-gray-400 sm:text-4xl">
            The list of prohibitions keeps getting worse.
          </p>
          <p className="mt-24 text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl text-left">
            Cubans <span className="text-red-600">can NOT:</span>
          </p>
          <ul className="mt-16 text-gray-400 space-y-12 text-xl text-left font-medium">
            <li>Embark touristic boats.</li>
            <li>Have a contract for cable television</li>
            <li>Live in the capital without a special permit</li>
            <li>Kill a cow</li>
            <li>Protest against anything</li>
            <li>Have double citizenship</li>
            <li>Create opposing political parties</li>
            <li>Invest in the middle to big companies</li>
            <li>Import cordless microphones</li>
            <li>Invite a tourist to their house</li>
            <li>Sell shrimp or lobster</li>
            <li>Be outside of Cuban territory for more than 2 years</li>
            <li>Educate their children in unconventional or private ways</li>
            <li>Bring donations to Cuba</li>
            <li>Belong to a different political syndicate</li>
            <li>Critique the government</li>
            <li>Take food from one province to another</li>
            <li>
              Come back to Cuba after immigrating (unless approved by the gov)
            </li>
            <li>
              Organize any sports or artistic activities without the
              government&apos;s consent.
            </li>
            <li>Create a private press business.</li>
            <li>
              Distribute information coming from the USA&apos;s government or
              any other private agency or entity.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Facts
