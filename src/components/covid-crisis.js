import React from "react"
import covid_under_control from "../images/covid-under-control-granma-2020.png"
import HLSVideoPlayer from "./hls-player"
import { useMazorra } from "../hooks/useMazorra"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { useHospital } from "../hooks/useHospital"
import CubaCovidData from "./cubaCovidData"

//
const CovidCrisis = () => {
  const mazorra = useMazorra()
  const mazGroup1and2 = mazorra.slice(0, 2)
  const mazGroup3to5 = mazorra.slice(2, 5)
  const mazGroup6to7 = mazorra.slice(5, 7)
  const hospitals = useHospital()

  //
  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-4 space-y-6 overflow-hidden">
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-red-600 sm:text-4xl">
          FOR {new Date().getFullYear() - 1959} YEARS
        </p>
        <p className="mt-4 text-3xl font-extrabold tracking-tight bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent sm:text-4xl">
          The Cuban Government has claimed to have the{" "}
          <span className="underline text-red-600">
            best free healthcare system.
          </span>
        </p>
        <p className="mt-6 text-xl font-medium text-gray-400 sm:text-2xl leading-relaxed tracking-wide">
          Back in January of 2010, a cold wave of temperatures whipped the
          capital, Havana. Temperatures dropped down to 39°F degrees(4° Celcius
          degrees).
        </p>

        <p className="mt-6 text-xl font-medium text-gray-400 sm:text-2xl leading-relaxed tracking-wide">
          In a psychiatric hospital known as &apos;Mazorra&apos; more than a two
          dozen people lost their lives of hypothermia.{" "}
        </p>
        <p className="py-32 text-lg font-bold text-red-600 sm:text-xl leading-relaxed tracking-wide underline">
          WARNING: THE FOLLOWING IMAGES ARE GRAPHIC AND MAY BE DISTURBING TO
          SOME USERS
        </p>
      </div>
      {/* psychiatric hospital -> photos of dead patients */}
      <div className="relative">
        <div className="mt-10">
          {/* Decorative image grid */}
          <div aria-hidden="true" className="pointer-events-none">
            {/* small screens */}
            <div className="md:hidden">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-2">
                  {mazGroup1and2.map(person => (
                    <GatsbyImage
                      imgStyle={{ borderRadius: "0.5rem" }}
                      key={person.node.id}
                      className="w-44 h-64 overflow-hidden"
                      image={person.node.childImageSharp.gatsbyImageData}
                      alt=""
                    />
                  ))}
                </div>
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                  {mazGroup3to5.map(person => (
                    <GatsbyImage
                      imgStyle={{ borderRadius: "0.5rem" }}
                      key={person.node.id}
                      className="w-44 h-64 rounded-lg overflow-hidden"
                      image={person.node.childImageSharp.gatsbyImageData}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* medium and large screens */}
            <div className="hidden md:block">
              <div className="flex items-center justify-center space-x-6 lg:space-x-8">
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6">
                  {mazGroup1and2.map(person => (
                    <GatsbyImage
                      key={person.node.id}
                      className="w-64 h-80 rounded-lg overflow-hidden"
                      image={person.node.childImageSharp.gatsbyImageData}
                      alt=""
                    />
                  ))}
                </div>
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6">
                  {mazGroup3to5.map(person => (
                    <GatsbyImage
                      key={person.node.id}
                      className="w-80 h-80 rounded-lg overflow-hidden"
                      image={person.node.childImageSharp.gatsbyImageData}
                      alt=""
                    />
                  ))}
                </div>
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6">
                  {/* mazGroup6to7 */}
                  {mazGroup6to7.map(person => (
                    <GatsbyImage
                      key={person.node.id}
                      className="w-96 h-64 rounded-lg overflow-hidden"
                      image={person.node.childImageSharp.gatsbyImageData}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 space-y-6 overflow-hidden">
        <p className="pt-32 text-3xl font-extrabold tracking-tight text-red-600 sm:text-4xl">
          They let them freeze to death.
        </p>

        <p className="mt-4 text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl">
          These patients were severely malnourished, almost naked, and without
          blankets to survive the cold temperatures before dying.
        </p>
        <p className="mt-6 text-xl font-medium text-gray-400 sm:text-2xl leading-relaxed tracking-wide">
          This place, like many facilities in Cuba, has many windows broken or
          missing.
        </p>
        <p className="mt-6 text-xl font-medium text-gray-400 sm:text-2xl leading-relaxed tracking-wide">
          The government organized a security operation around the hospital, and
          the workers{" "}
          <span className="underline font-semibold text-red-600">
            were instructed to remain silent.
          </span>
        </p>

        <p className="text-gray-400 text-2xl flex justify-center py-6 leading-relaxed tracking-wide">
          ...
        </p>
        <p className="mt-6 text-xl font-medium text-gray-400 sm:text-2xl leading-relaxed tracking-wide">
          The same is happening now with COVID but in numbers closely comparable
          to the Nazi Holocaust.
        </p>

        <p className="mt-6 text-3xl font-extrabold tracking-tight text-red-600 sm:text-4xl">
          Hospitals are collapsed. People are dying without oxygen, medicines,
          medical attention, antibiotics, syringes, sanitary conditions,
          nothing.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 space-y-6 overflow-hidden py-12">
        <p className="mt-4 text-3xl font-extrabold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent sm:text-4xl">
          But the government speech sounds different. <br />
          For them, everything is &apos;under control.&apos;
        </p>

        {/* covid cases CUBA from google */}
        <p className="py-6 text-xl font-medium text-gray-400 sm:text-2xl leading-relaxed tracking-wide">
          Let&apos;s examine the latest data on COVID cases in Cuba taken
          straight from Google.
        </p>

        <CubaCovidData />

        <p className="py-6 text-xl font-medium text-gray-400 sm:text-2xl leading-relaxed tracking-wide">
          Cuba has a population of approx 11,326,616 million people. And there
          are only five (5) hospital beds available per a thousand habitants?
          What?
        </p>

        <p className="py-6 text-xl font-medium text-gray-400 sm:text-2xl leading-relaxed tracking-wide">
          There are more than 500K total cases and only 4K deaths and 80
          something deaths?
        </p>

        <div className="py-12 md:max-w-3xl md:mx-auto">
          <div aria-hidden="true" className="relative">
            <div>
              <img
                src={covid_under_control}
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800" />
          </div>
          <div className="px-4 flex items-start h-full">
            <blockquote className="text-red-600">
              <p className="text-2xl md:text-3xl">
                “A week without deaths, the epidemic in Cuba is{" "}
                <span className="underline uppercase font-semibold">
                  under control
                </span>
                ”
              </p>
              <p className="mt-6 text-gray-400 text-md">
                “President Díaz-Canel assured on June 6th, 2020, at the meeting
                of the temporary working group for the prevention and control of
                COVID-19, that with the contribution of the Health system and
                Cuban scientists{" "}
                <span className="underline font-semibold text-gray-300">
                  we are decreasing, to what is almost impossible , the
                  affectations in critical and serious patients.”
                </span>
              </p>
            </blockquote>
          </div>
        </div>
        <p className="mt-4 text-3xl font-extrabold tracking-loose text-gray-50 sm:text-4xl">
          The reality is overwhelmingly <br />
          <span className="text-red-600 underline uppercase">different.</span>
        </p>

        <p className="py-32 text-lg font-bold text-red-600 sm:text-xl leading-relaxed tracking-wide underline">
          WARNING: THE FOLLOWING IMAGES ARE GRAPHIC AND MAY BE DISTURBING TO
          SOME USERS
        </p>
        {/* images of hospitals */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6">
          {hospitals.map(sos => (
            <div key={sos.id} className="group relative">
              <GatsbyImage
                imgStyle={{ objectPosition: "top" }}
                className="w-full bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 h-96"
                image={sos.imageSrc}
                alt={sos.imageAlt}
              />
            </div>
          ))}
        </div>
        <p className="pt-12 text-xl font-medium text-red-600 sm:text-2xl leading-relaxed tracking-wide">
          Hospitals are collapsed. People are dying without oxygen, medicines,
          medical attention, antibiotics, syringes, sanitary conditions,
          nothing.
        </p>

        {/* Videos of hospital facilities in Cuba */}
        <div className="flex flex-col space-y-4 py-12">
          <p className="py-6 text-xl font-medium text-gray-50 sm:text-2xl leading-relaxed tracking-wide">
            A video shows the men&apos;s bathroom in a principal hospital in
            Cuba.
          </p>
          <div className="md:aspect-w-3 md:aspect-h-2 w-full px-12">
            <HLSVideoPlayer
              url="https://stream.mux.com/wAQIaCanjwed3XdBo3KIqpwJEQWjP98R011c4NkSzaeE.m3u8"
              poster="https://image.mux.com/wAQIaCanjwed3XdBo3KIqpwJEQWjP98R011c4NkSzaeE/thumbnail.png?width=600&height=600&fit_mode=pad"
            />
          </div>
          <p className="py-6 text-xl font-medium text-gray-50 sm:text-2xl leading-relaxed tracking-wide">
            Another video showing the hallways and dark rooms of the internal
            medicine area of a hospital in Cuba.
          </p>

          <div className="md:aspect-w-3 md:aspect-h-2 w-full px-12">
            <HLSVideoPlayer
              url="https://stream.mux.com/DEVxUQndm7sbQ02kCVzEBk9p601iop02hwU6aJkvow3MoA.m3u8"
              poster="https://image.mux.com/DEVxUQndm7sbQ02kCVzEBk9p601iop02hwU6aJkvow3MoA/thumbnail.png?width=600&height=600&fit_mode=pad&time=03"
            />
          </div>

          <p className="py-6 text-xl font-medium text-gray-50 sm:text-2xl leading-relaxed tracking-wide">
            An old man screams &apos;Get me out of here&apos; in a hospital in
            Cuba.
          </p>

          <div className="md:aspect-w-3 md:aspect-h-2 w-full px-12">
            <HLSVideoPlayer
              url="https://stream.mux.com/CfKqliT97mYn6yqmyaTgb00hqAAquH00HKux01ARjIoNpg.m3u8"
              poster="https://image.mux.com/CfKqliT97mYn6yqmyaTgb00hqAAquH00HKux01ARjIoNpg/thumbnail.png?width=600&height=600&fit_mode=pad"
            />
          </div>
        </div>

        <p className="mt-4 text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl">
          In the meantime, the Cuban government sends thousands of doctors to
          international missions.
        </p>

        <StaticImage
          imgStyle={{ borderRadius: "0.5rem" }}
          className="w-full rounded-md overflow-hidden group-hover:opacity-75 h-96"
          src="../images/cuban-doctors-going-to-international-missions.jpeg"
          alt="Cuban doctors ready to go on an international mission"
          placeholder="blurred"
          layout="fullWidth"
          transformOptions={{ fit: "cover" }}
        />
        <div className="space-y-12">
          <p className="py-6 text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl">
            They pay the Cuban doctors pennies and put the rest in their
            pockets.
          </p>

          <p className="pt-12 text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl">
            These have become one of the most lucrative businesses for the
            totalitarian regime.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CovidCrisis
