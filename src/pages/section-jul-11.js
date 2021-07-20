import React from "react"
import YoutubeEmbed from "../components/youtubeEmbed"
import protests_map_july_11 from "../images/protests-map-july-11.png"
import san_antonio from "../images/san-antonio-de-los-banos.png"
import dead_boy from "../images/13-year-old-kid-dead-cuba-protests-july-2021.jpeg"
import man_washington from "../images/man-washington-protest.jpg"
import girl_protesting from "../images/girl_protesting.jpg"
import boinas_negras from "../images/boinas_negras.jpeg"
import policia from "../images/policia_cubana.jpg"
import minint from "../images/minint_cuba.jpg"
import Divider from "../components/divider"
import Carousel from "../components/carousel"
import { TwitterTweetEmbed } from "react-twitter-embed"
import InstaEmbed from "../components/instagramEmbed"

const July11 = () => {
  return (
    <>
      <div className="mt-64">
        <Divider />
        <div className="relative py-16 overflow-hidden">
          <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full"></div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="block text-base text-center text-red-600 font-semibold tracking-wide uppercase">
                  July 11, 2021
                </span>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
                  Events
                </span>
              </h1>
            </div>
            {/* section 1 */}
            <div className="mt-12 prose prose-red prose-lg text-gray-300 mx-auto max-w-4xl">
              <p className="mt-8 leading-8">
                On an odd Sunday of July, a large group of people took the
                streets on{" "}
                <span className="text-yellow-400 underline">
                  San Antonio de los Baños
                </span>{" "}
                to protest, chanting &ldquo;Freedom&rdquo;, &ldquo;Homeland &
                Life&rdquo;, and &ldquo;We are not afraid&rdquo;.
              </p>

              <img
                className="w-full h-80 object-cover rounded-md"
                src={san_antonio}
                alt="map of Cuba showing the different places of protests reported on july 11, 2021"
              />

              <p className="mt-8 leading-8">
                Within hours, more groups of people also joined the protests in
                additional provinces of Cuba.
              </p>

              <p>Such as Camaguey...</p>

              {/* camaguey */}
              <YoutubeEmbed embedId="cbOebHpgXew" />

              <p>Las Tunas</p>

              {/* las Tunas */}
              <YoutubeEmbed embedId="vUKpthLKWwE" />

              <p>Ciego de Avila</p>

              {/* Ciego de Avila */}
              <YoutubeEmbed embedId="q6WztJHy8bc" />

              <p>Pinar del Rio...and many more</p>

              {/* Pinar del Rio */}
              <YoutubeEmbed embedId="XxIsn81hxN0" />

              <p>
                In the blink of an eye, different protests were happening at the
                same time in more than 91 places on the island...
              </p>

              <img
                className="w-full h-80 object-cover rounded-md"
                src={protests_map_july_11}
                alt="map of Cuba showing the different places of protests reported on july 11, 2021"
              />
              <p className="text-sm text-gray-400">
                A detailed google map project with the locations of the protests
                can be found{" "}
                <a
                  style={{ color: "#dc2626" }}
                  className="underline"
                  target="_blank"
                  href="https://www.google.com/maps/d/viewer?mid=1AQAArlWutvq3eqA2nK_WObSujttknlxZ&ll=20.98490578549235%2C-78.96322176357974&z=6"
                  rel="noreferrer noopener"
                >
                  here
                </a>
                .
              </p>

              <p>
                The majority of the protests -if not all- were pacific. No one
                in Cuba -by law- is allowed to carry firearms or any other type
                of weapon. But to be accurate, it&apos;s no one
              </p>
              <blockquote>
                <p>
                  except the government, military personnel, and the national
                  police.
                </p>
              </blockquote>
            </div>

            {/* section 2 */}

            <div className="my-32 prose prose-red prose-lg text-gray-300 mx-auto max-w-4xl">
              <div className="text-lg max-w-prose mx-auto">
                <h1>
                  <span className="block text-base text-center text-red-600 font-semibold tracking-wide uppercase">
                    later on July 11, 2021
                  </span>
                  <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
                    Government response
                  </span>
                </h1>
              </div>
              <p>
                <span className="text-yellow-400 underline">
                  Miguel Díaz-Canel Bermúdez
                </span>
                , the president of Cuba, made a speech transmitted on national
                TV calling for repression of the protests and incited national
                violence. In his own words, he said:
              </p>
              <blockquote>
                <p className="py-32">
                  The order of combat has been given, revolutionaries, to the
                  streets!
                </p>
              </blockquote>
              <p>The horror was about to start...</p>
              <YoutubeEmbed embedId="Jh_lWGrxMSc" />

              <span className="my-48 block text-3xl text-center leading-8 font-semibold tracking-tight text-gray-300 sm:text-4xl">
                The so called{" "}
                <span className="text-red-500">
                  &ldquo;revolutionaries&rdquo;
                </span>{" "}
                by the president are:
              </span>

              <div className="space-y-32">
                <div>
                  <p>
                    special military brigades known as black berets -boinas
                    negras in spanish-
                  </p>
                  {/* boinas negras */}
                  <img
                    className="w-full h-80 object-cover rounded-md"
                    src={boinas_negras}
                    alt="military cuban forces known as black berets"
                  />
                </div>

                <div>
                  <p>the national police</p>

                  {/* policia nacional */}
                  <img
                    className="w-full h-80 object-cover rounded-md"
                    src={policia}
                    alt="cuban national police"
                  />
                </div>

                <div>
                  <p>the MININT special forces -Ministry of the Interior-</p>

                  {/* minint */}
                  <img
                    className="w-full h-80 object-cover rounded-md"
                    src={minint}
                    alt="cuban national police"
                  />
                </div>

                <div>
                  <p className="pb-12">
                    As well as other gov officials dressed as civilians carrying
                    huge sticks ready to beat anyone peacefully protesting:
                  </p>
                  {/* twitter here */}
                  <TwitterTweetEmbed
                    tweetId="1414844174298353666"
                    placeholder="Loading"
                  />
                </div>
              </div>
              <p className="py-12">
                The videos and pictures from the protesters themselves show a
                high level of violence from the communist government.
              </p>

              <InstaEmbed />

              {/* This should be a carousel of instagram videos  */}
              <Carousel photos={[dead_boy, man_washington, girl_protesting]} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default July11
