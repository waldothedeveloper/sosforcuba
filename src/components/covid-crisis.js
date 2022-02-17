import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import CubaCovidData from "./cubaCovidData"
import HLSVideoPlayer from "./hls-player"
import React from "react"
import { useCubaCovidData } from "../hooks/useCubaCovidData"
import { useHospital } from "../hooks/useHospital"
import { useMazorra } from "../hooks/useMazorra"

//
const CovidCrisis = () => {
  const mazorra = useMazorra()
  const mazGroup1and2 = mazorra.slice(0, 2)
  const mazGroup3to5 = mazorra.slice(2, 5)
  const mazGroup6to7 = mazorra.slice(5, 7)
  const hospitals = useHospital()
  const covidData = useCubaCovidData()

  //
  return (
    <div className="pt-16">
      <div className="mx-auto max-w-4xl space-y-6 overflow-hidden px-4">
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-red-600 sm:text-4xl">
          FOR {new Date().getFullYear() - 1959} YEARS
        </p>
        <p className="mt-4 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
          The Cuban Government has claimed to have the{" "}
          <span className="text-red-600 underline">
            best free healthcare system.
          </span>
        </p>
        <p className="mt-6 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
          Back in January of 2010, a cold wave of temperatures whipped the
          capital, Havana. Temperatures dropped down to 39°F degrees(4° Celcius
          degrees).
        </p>

        <p className="mt-6 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
          In a psychiatric hospital known as &apos;Mazorra&apos; more than a two
          dozen people lost their lives of hypothermia.{" "}
        </p>
        <p className="py-32 text-lg font-bold leading-relaxed tracking-wide text-red-600 underline sm:text-xl">
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
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-2">
                  {mazGroup1and2.map(person => (
                    <GatsbyImage
                      imgStyle={{ borderRadius: "0.5rem" }}
                      key={person.node.id}
                      className="h-64 w-44 overflow-hidden"
                      image={person.node.childImageSharp.gatsbyImageData}
                      alt=""
                    />
                  ))}
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  {mazGroup3to5.map(person => (
                    <GatsbyImage
                      imgStyle={{ borderRadius: "0.5rem" }}
                      key={person.node.id}
                      className="h-64 w-44 overflow-hidden rounded-lg"
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
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6">
                  {mazGroup1and2.map(person => (
                    <GatsbyImage
                      key={person.node.id}
                      className="h-80 w-64 overflow-hidden rounded-lg"
                      image={person.node.childImageSharp.gatsbyImageData}
                      alt=""
                    />
                  ))}
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6">
                  {mazGroup3to5.map(person => (
                    <GatsbyImage
                      key={person.node.id}
                      className="h-80 w-80 overflow-hidden rounded-lg"
                      image={person.node.childImageSharp.gatsbyImageData}
                      alt=""
                    />
                  ))}
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6">
                  {/* mazGroup6to7 */}
                  {mazGroup6to7.map(person => (
                    <GatsbyImage
                      key={person.node.id}
                      className="h-64 w-96 overflow-hidden rounded-lg"
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
      <div className="mx-auto max-w-4xl space-y-6 overflow-hidden px-4">
        <p className="pt-32 text-3xl font-extrabold tracking-tight text-red-600 sm:text-4xl">
          They let them freeze to death.
        </p>

        <p className="mt-4 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
          These patients were severely malnourished, almost naked, and without
          blankets to survive the cold temperatures before dying.
        </p>
        <p className="mt-6 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
          This place, like many facilities in Cuba, has many windows broken or
          missing.
        </p>
        <p className="mt-6 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
          The government organized a security operation around the hospital, and
          the workers{" "}
          <span className="font-semibold text-red-600 underline">
            were instructed to remain silent.
          </span>
        </p>

        <p className="flex justify-center py-6 text-2xl leading-relaxed tracking-wide text-gray-400">
          ...
        </p>
        <p className="mt-6 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
          The same is happening now with COVID but in numbers closely comparable
          to the Nazi Holocaust.
        </p>

        <p className="mt-6 text-3xl font-extrabold tracking-tight text-red-600 sm:text-4xl">
          Hospitals are collapsed. People are dying without oxygen, medicines,
          medical attention, antibiotics, syringes, sanitary conditions, they
          have nothing.
        </p>
      </div>

      <div className="mx-auto max-w-4xl space-y-6 overflow-hidden px-4 pb-12">
        <p className="mt-4 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
          But the government speech sounds different. <br />
          For them, everything is &apos;under control.&apos;
        </p>

        <p className="mt-6 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
          The &ldquo;Granma&rdquo; which is the official press of the communist
          party of Cuba published on 2020 the following news:
        </p>

        <div className="py-12 md:mx-auto md:max-w-3xl">
          <div aria-hidden="true" className="relative">
            <div className="mx-auto max-w-xl">
              <StaticImage
                className="w-full overflow-hidden"
                src="../images/covid-under-control-granma-2020.png"
                alt="The cuban press Granma published an editions saying Covid is under control"
                placeholder="blurred"
                layout="fullWidth"
                transformOptions={{ fit: "cover" }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800" />
          </div>
          <div className="flex h-full items-start px-4">
            <blockquote className="text-red-600">
              <p className="text-2xl md:text-3xl">
                “A week without deaths, the epidemic in Cuba is{" "}
                <span className="font-semibold uppercase underline">
                  under control
                </span>
                ”
              </p>
              <p className="text-md mt-6 text-gray-400">
                “President Díaz-Canel assured on June 6th, 2020, at the meeting
                of the temporary working group for the prevention and control of
                COVID-19, that with the contribution of the Health system and
                Cuban scientists{" "}
                <span className="font-semibold text-gray-300 underline">
                  we are decreasing, to what is almost impossible , the
                  affectations in critical and serious patients.”
                </span>
              </p>
            </blockquote>
          </div>
        </div>

        {/* covid cases CUBA from google */}
        <p className="py-6 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
          Let&apos;s examine the latest data of COVID cases in Cuba that the
          Cuban government has made public.
        </p>

        <CubaCovidData />

        <p className="py-6 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
          Cuba has a population of approx{" "}
          {Number.parseInt(covidData[5].stat).toLocaleString()} million people.
          And there are only {Number.parseInt(covidData[4].stat)} hospital beds
          available per a thousand habitants? WTF?
        </p>

        <p className="py-6 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
          There are {Number.parseInt(covidData[0].stat).toLocaleString()} total
          cases and only {Number.parseInt(covidData[2].stat).toLocaleString()}{" "}
          total deaths and {Number.parseInt(covidData[3].stat).toLocaleString()}
          {` `}
          new deaths?
        </p>

        <p className="py-6 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
          The majority of the population in Cuba has no private cars. For
          example, a doctor who makes 20 dollars a month cannot afford the
          skyrocket prices at what the government sells the cars.
        </p>

        <p className="py-6 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
          This means that the population depends on public transportation to go
          from point A to point B, or even a hospital. Public transportation in
          Cuba has stopped by order of the government allegedly to the high
          level of transmission. And private taxis have also been banned by the
          government.
        </p>

        <p className="py-6 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
          People depend on an ambulance sent by the government that either never
          comes or arrives after the patient has passed away in their homes.
        </p>

        <p className="mt-4 bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
          The reality is overwhelming
        </p>

        <p className="py-6 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
          The following video shows a desperate woman saying that the government
          let his father die at home. Medical attention never arrived. These
          horrible things are happening every few minutes in Cuba now.
        </p>

        <p className="text-lg font-bold leading-relaxed tracking-wide text-red-600 underline sm:text-xl">
          WARNING: THE FOLLOWING IMAGES AND VIDEOS ARE GRAPHIC AND MAY BE
          DISTURBING TO SOME USERS
        </p>

        <div className="w-full px-12 md:aspect-w-3 md:aspect-h-2">
          <HLSVideoPlayer
            url="https://stream.vidsrv.net/6pSyEiTelSt02B2H2JO018BpDffnyIIgZsMMUQL01nuU7o.m3u8"
            poster="https://image.vidsrv.net/6pSyEiTelSt02B2H2JO018BpDffnyIIgZsMMUQL01nuU7o/thumbnail.png?width=600&height=600&fit_mode=pad&time=050"
          />
        </div>

        <p className="py-6 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
          People are suffocating in hospitals without oxygen, no AC, and
          horrible conditions.
        </p>

        <div className="w-full px-12 md:aspect-w-3 md:aspect-h-2">
          <HLSVideoPlayer
            url="https://stream.vidsrv.net/BdQ7A021TFkWkWGAHlwN77wFejl6S1ZpQWjoBmQ4Od9A.m3u8"
            poster="https://image.vidsrv.net/BdQ7A021TFkWkWGAHlwN77wFejl6S1ZpQWjoBmQ4Od9A/thumbnail.png?width=600&height=600&fit_mode=pad&time=06"
          />
        </div>

        {/* Videos of hospital facilities in Cuba */}
        <div className="flex flex-col space-y-4 py-12">
          <p className="py-6 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
            A video shows the men&apos;s bathroom in a principal hospital in
            Cuba.
          </p>
          <div className="w-full px-12 md:aspect-w-3 md:aspect-h-2">
            <HLSVideoPlayer
              url="https://stream.vidsrv.net/wAQIaCanjwed3XdBo3KIqpwJEQWjP98R011c4NkSzaeE.m3u8"
              poster="https://image.vidsrv.net/wAQIaCanjwed3XdBo3KIqpwJEQWjP98R011c4NkSzaeE/thumbnail.png?width=600&height=600&fit_mode=pad"
            />
          </div>
          <p className="py-6 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
            Another video showing the hallways and dark rooms of the internal
            medicine area of a hospital in Cuba.
          </p>

          <div className="w-full px-12 md:aspect-w-3 md:aspect-h-2">
            <HLSVideoPlayer
              url="https://stream.vidsrv.net/DEVxUQndm7sbQ02kCVzEBk9p601iop02hwU6aJkvow3MoA.m3u8"
              poster="https://image.vidsrv.net/DEVxUQndm7sbQ02kCVzEBk9p601iop02hwU6aJkvow3MoA/thumbnail.png?width=600&height=600&fit_mode=pad&time=03"
            />
          </div>

          <p className="py-6 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
            An old man screams &apos;Get me out of here&apos; in a hospital in
            Cuba.
          </p>

          <div className="w-full px-12 md:aspect-w-3 md:aspect-h-2">
            <HLSVideoPlayer
              url="https://stream.vidsrv.net/CfKqliT97mYn6yqmyaTgb00hqAAquH00HKux01ARjIoNpg.m3u8"
              poster="https://image.vidsrv.net/CfKqliT97mYn6yqmyaTgb00hqAAquH00HKux01ARjIoNpg/thumbnail.png?width=600&height=600&fit_mode=pad"
            />
          </div>
        </div>

        <p className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text py-12 text-3xl font-extrabold text-transparent sm:text-4xl">
          Thousands of pictures were shared on social media showing the
          wretched, sorrowful, and inhumane conditions of the hospitals in Cuba.
        </p>

        {/* images of hospitals */}
        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-2">
          {hospitals.map(sos => (
            <div key={sos.id} className="group relative">
              <GatsbyImage
                imgStyle={{ objectPosition: "top" }}
                className="h-96 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75"
                image={sos.imageSrc}
                alt={sos.imageAlt}
              />
            </div>
          ))}
        </div>

        <p className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-3xl font-extrabold uppercase text-transparent sm:text-4xl">
          The Cuban government refuses to accept medical aid from international
          organizations.
        </p>

        {/* Hospitals in Cuba for tourism */}
        <div className="pt-12">
          <p className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
            But the PRIVATE HOSPITALS exclusively for foreigns in Cuba are a
            different story.
          </p>

          <div className="mx-auto max-w-4xl space-y-12 py-12">
            <StaticImage
              imgStyle={{ borderRadius: "0.5rem" }}
              className="w-full overflow-hidden"
              src="../images/tourism_clinic-cira-garcia.jpg"
              alt="The lobby of a private clinic in Cuba named Cira Garcia"
              placeholder="blurred"
              layout="fullWidth"
              transformOptions={{ fit: "cover" }}
            />
            <StaticImage
              imgStyle={{ borderRadius: "0.5rem" }}
              className="w-full overflow-hidden"
              src="../images/tourism_cira_garcia_lobby.png"
              alt="The lobby of a private clinic in Cuba named Cira Garcia"
              placeholder="blurred"
              layout="fullWidth"
              transformOptions={{ fit: "cover" }}
            />
          </div>

          <p className="py-6 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
            The clinic &ldquo;Cira Garcia&rdquo; located in Havana, counts on
            three hospitalization levels in which 39 private rooms are
            distributed, two of them suites with all the facilities of the most
            modern clinics: patient electronic bed with possibilities of direct
            oxygen and central aspiration, companion bed, full bathroom with hot
            and cold water 24 hours a day, air-condition, satellite TV, night
            light, intercommunication with nursery post, equipment for the
            disabled person, and safe box.
          </p>

          <div className="mx-auto max-w-4xl space-y-12 py-12">
            <StaticImage
              imgStyle={{ borderRadius: "0.5rem" }}
              className="w-full overflow-hidden"
              src="../images/tourism_cira_garcia_private_room.png"
              alt="The lobby of a private clinic in Cuba named Cira Garcia"
              placeholder="blurred"
              layout="fullWidth"
              transformOptions={{ fit: "cover" }}
            />

            <StaticImage
              imgStyle={{ borderRadius: "0.5rem" }}
              className="w-full overflow-hidden"
              src="../images/tourism_cira_garcia_surgery_room.png"
              alt="The lobby of a private clinic in Cuba named Cira Garcia"
              placeholder="blurred"
              layout="fullWidth"
              transformOptions={{ fit: "cover" }}
            />
          </div>

          <p className="py-6 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
            Who can seek medical attention in these centers?
          </p>

          <p className="py-6 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
            Diplomatic corps accredited in Cuba, foreign businessmen established
            in Cuba, and foreign persons who come to Cuba searching for the
            scientific progress and prestige of Cuban medicine. It also offers
            medical assurance to tourists, and the guarantee of health and
            well-being services providing a successful staying in Cuba.
          </p>

          <p className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
            Cubans are not allowed to seek medical attention in these
            facilities, even if they have the money.
          </p>

          <div className="mx-auto max-w-4xl space-y-12 py-12">
            <StaticImage
              imgStyle={{ borderRadius: "0.5rem" }}
              className="w-full overflow-hidden"
              src="../images/tourism_cira_garcia_private_room_2.png"
              alt="The lobby of a private clinic in Cuba named Cira Garcia"
              placeholder="blurred"
              layout="fullWidth"
              transformOptions={{ fit: "cover" }}
            />

            <StaticImage
              imgStyle={{ borderRadius: "0.5rem" }}
              className="w-full overflow-hidden"
              src="../images/tourism_cira_garcia_ctscan.png"
              alt="The lobby of a private clinic in Cuba named Cira Garcia"
              placeholder="blurred"
              layout="fullWidth"
              transformOptions={{ fit: "cover" }}
            />
          </div>

          <p className="pb-12 text-xl font-medium leading-relaxed tracking-wide text-gray-400 sm:text-2xl">
            Here&apos;s a marketing video taken from the clinic&apos;s own
            Facebook page:
          </p>

          <div className="w-full md:aspect-w-3 md:aspect-h-2 md:px-12">
            <HLSVideoPlayer
              url="https://stream.vidsrv.net/sAufGvehggaIP2WS1wT4TAjcMXXBiQHjVxcMvg2V1jo.m3u8"
              poster="https://image.vidsrv.net/sAufGvehggaIP2WS1wT4TAjcMXXBiQHjVxcMvg2V1jo/thumbnail.png?width=600&height=600&fit_mode=pad&time=03"
            />
          </div>

          <p className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text py-12 text-3xl font-extrabold text-transparent sm:text-4xl">
            The revenue of these private international clinics goes straight to
            the banks of the communist government, while the national hospitals
            and medical care are falling apart.
          </p>
        </div>

        {/* CUba sends doctors on international missions */}
        {/* <div>
          <p className="py-32 text-3xl font-extrabold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent sm:text-4xl">
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
            <p className="py-6 text-3xl font-extrabold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent sm:text-4xl">
              They pay the Cuban doctors pennies and put the rest in their
              pockets.
            </p>

            <p className="pt-12 text-3xl font-extrabold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent sm:text-4xl">
              These have become one of the most lucrative businesses for the
              totalitarian regime.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default CovidCrisis
