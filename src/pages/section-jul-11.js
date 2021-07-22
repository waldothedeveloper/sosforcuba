import React from "react"
import YoutubeEmbed from "../components/youtubeEmbed"
import protests_map_july_11 from "../images/protests-map-july-11.png"
import san_antonio from "../images/san-antonio-de-los-banos.png"
import { pichyboysVideos } from "../utils/instagram_vids"
import boinas_negras from "../images/boinas_negras.jpeg"
import policia from "../images/policia_cubana.jpg"
import minint from "../images/minint_cuba.jpg"
import Divider from "../components/divider"
import SocialMediaEmbedCarousel from "../components/carousel"
import { TwitterTweetEmbed } from "react-twitter-embed"
import etecsa from "../images/ETECSA_logo.png"
import list_of_detained from "../images/642-dissapeared-people.jpg"
// import dinastars from "../images/dinastars.jpg"
// import military_police from "../images/military-police-cuba.jpeg"

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
                On Sunday July 11, a large group of people took the streets on{" "}
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
                The majority of the protests -if not all- were peacefully
                initiated. No one in Cuba -by law- is allowed to carry firearms
                or any other type of weapon. To be accurate, it&apos;s no one
                but
              </p>
              <blockquote>
                <p>
                  the government, military personnel, and the national police.
                </p>
              </blockquote>
            </div>

            {/* section 2 */}

            <div className="mt-32 prose prose-red prose-lg text-gray-300 mx-auto max-w-4xl">
              <div className="text-lg max-w-prose mx-auto">
                <h1>
                  <span className="block text-base text-center text-red-600 font-semibold tracking-wide uppercase">
                    later on July 11, 2021
                  </span>
                  <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
                    Government Response
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
                    wood sticks ready to beat anyone who would be peacefully
                    protesting:
                  </p>

                  <div
                    className="getty embed image"
                    style={{
                      backgroundColor: "#fff",
                      display: "inline-block",
                      fontFamily: "Roboto,sans-serif",
                      color: "#a7a7a7",
                      fontSize: 11,
                      width: "100%",
                      maxWidth: 594,
                    }}
                  >
                    <div style={{ padding: 0, margin: 0, textAlign: "left" }}>
                      <a
                        href="http://www.gettyimages.com/detail/1233949092"
                        target="_blank"
                        style={{
                          color: "#a7a7a7",
                          textDecoration: "none",
                          fontWeight: "normal !important",
                          border: "none",
                          display: "inline-block",
                        }}
                        rel="noreferrer noopener"
                      >
                        Embed from Getty Images
                      </a>
                    </div>
                    <div
                      style={{
                        overflow: "hidden",
                        position: "relative",
                        height: 0,
                        padding: "68.35017% 0 0 0",
                        width: "100%",
                      }}
                    >
                      <iframe
                        src="//embed.gettyimages.com/embed/1233949092?et=E502nK7XT-VoAQgd3hRRHg&tld=com&sig=muvmo3T0bZnnnr2-ANHH1E26UjycBRYd8Cyvy2V8c8k=&caption=true&ver=1"
                        scrolling="no"
                        frameBorder={0}
                        width={594}
                        height={406}
                        style={{
                          display: "inline-block",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          margin: 0,
                        }}
                      />
                    </div>
                  </div>

                  <p className="py-6">
                    A video of these gov officials carrying sticks was shared on
                    Twitter:{" "}
                  </p>
                  {/* twitter here */}
                  <TwitterTweetEmbed
                    tweetId="1414844174298353666"
                    placeholder="Loading"
                  />
                </div>
              </div>
              <p className="pt-12">
                Thousands of videos and pictures shared on the internet from the
                protesters themselves shows a
              </p>

              <span className="pt-12 pb-24 block text-3xl text-center leading-8 font-extrabold tracking-tight text-yellow-400 sm:text-4xl">
                shocking level of violence from the government.
              </span>

              <p>Here are some of those shared on social media</p>

              {/* videos shared by los Pichy Boys */}
              <SocialMediaEmbedCarousel data={pichyboysVideos} />

              <p className="py-12">
                People are also afraid of taking out their phones on the streets
                -even if it is to look at the time- thinking that if the police
                catch them, they will think that they are making a video against
                the government.
              </p>

              <blockquote className="py-12">
                <p>
                  And we are ready for anything. They will have to pass over our
                  dead bodies if they think they can defeat the revolution
                </p>
              </blockquote>

              <p className="pt-12">Added the president in his speech...</p>
            </div>

            {/* section 3 */}
            <div className="space-y-12 mt-32 prose prose-blue prose-lg text-gray-300 mx-auto max-w-4xl">
              <p>
                In addition, the Cuban government took an extra step in response
                to these events:
              </p>

              <span className="py-12 block text-3xl text-center leading-8 font-extrabold tracking-tight text-yellow-400 sm:text-4xl">
                Cutting the internet for the entire population of Cuba.
              </span>

              <p>
                <span className="font-bold text-md">The BBC News</span> wrote an{" "}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.bbc.com/news/world-latin-america-57818918"
                >
                  <span className="text-blue-400 font-semibold">article</span>
                </a>{" "}
                explaining the strategy behind the Cuban government&apos;s
                actions:
              </p>
              {/* cut the internet wire */}
              <blockquote>
                <p>
                  This prevents people from sharing information about the
                  gatherings and claims of abuse against authorities known for
                  their repressive tactics to silence criticism.
                </p>

                <p>...</p>
                <p>
                  Facebook, the most popular social platform in Cuba, as well as
                  WhatsApp, Instagram and Telegram remained restricted by
                  Etecsa&apos;s servers, according to monitoring site Netblocks.
                </p>
              </blockquote>

              <figure className="py-12 flex justify-center">
                <img
                  className="w-auto h-auto object-cover"
                  src={etecsa}
                  alt="etecsa logo, the only phone and internet company in Cuba"
                />
              </figure>

              <p>
                <span className="text-yellow-400 underline">
                  ETECSA is the only phone & internet company on the island.
                </span>{" "}
                But, this is not due to the U.S. embargo.
              </p>

              <p>
                Any internet & phone U.S. company -such as AT&T or T-Mobile- can
                do business directly with Cuba.
              </p>

              <p>
                The real problem is that the government{" "}
                <span className="underline font-medium text-yellow-400">
                  wants to control all communications on the island.
                </span>{" "}
                They want to see, hear, and know everything.
              </p>

              {/* twitter here */}
              <TwitterTweetEmbed
                tweetId="1416533421422039040"
                placeholder="Loading"
              />

              <span className="text-gray-400 mt-1 text-base">
                Julie Chung is the Acting Assistant Secretary for U.S.
                Department of State&apos;s Bureau of Western Hemisphere Affairs.
              </span>
            </div>

            {/* section 4 - people dissapeared */}
            <div className="space-y-12 mt-32 prose prose-blue prose-lg text-gray-300 mx-auto max-w-4xl">
              <Divider />
              <div className="text-lg max-w-prose mx-auto">
                <h1>
                  <span className="block text-base text-center text-red-600 font-semibold tracking-wide uppercase">
                    events July 12-22, 2021
                  </span>
                  <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
                    Missing and Detained People
                  </span>
                </h1>
              </div>

              <div
                className="getty embed image"
                style={{
                  backgroundColor: "#fff",
                  display: "inline-block",
                  fontFamily: "Roboto,sans-serif",
                  color: "#a7a7a7",
                  fontSize: 11,
                  width: "100%",
                  maxWidth: 594,
                }}
              >
                <div style={{ padding: 0, margin: 0, textAlign: "left" }}>
                  <a
                    href="http://www.gettyimages.com/detail/1233949303"
                    target="_blank"
                    style={{
                      color: "#a7a7a7",
                      textDecoration: "none",
                      fontWeight: "normal !important",
                      border: "none",
                      display: "inline-block",
                    }}
                    rel="noreferrer"
                  >
                    Embed from Getty Images
                  </a>
                </div>
                <div
                  style={{
                    overflow: "hidden",
                    position: "relative",
                    height: 0,
                    padding: "63.468014% 0 0 0",
                    width: "100%",
                  }}
                >
                  <iframe
                    src="//embed.gettyimages.com/embed/1233949303?et=r8odOetkQ2dZkP1NFRvuag&tld=com&sig=x0eDHfzBfPVzFKcyZfWM8sHhTsyAXM-drh8ePptrQhw=&caption=true&ver=1"
                    scrolling="no"
                    frameBorder={0}
                    width={594}
                    height={377}
                    style={{
                      display: "inline-block",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      margin: 0,
                    }}
                  />
                </div>
              </div>

              <p>
                In response to the demonstrations, members of the National
                Revolutionary Police, the Riot Squads, and the State Security
                Department carried out arbitrary arrests and physical attacks
                against people who were demonstrating peacefully, including
                university students.
              </p>

              <p>
                Similarly, people from different independent media outlets and
                activists denounced the installation of security devices around
                their homes to prevent them from going out onto the streets, a
                practice that the Cuban authorities have previously adopted as a
                tactic of intimidation.
              </p>

              {/* Anyelo Troya */}
              <p>
                <a
                  target="_blank"
                  href="https://twitter.com/AnyeloTroyaGonz"
                  rel="noreferrer noopener"
                >
                  Anyelo Troya Gonzalez
                </a>
                , a Cuban photographer, was on the streets on July 11th filming
                the protests. He was later detained and now sentenced to 1 year
                in prison in a summary trial -without a lawyer- just for filming
                the #11JCuba protests.
              </p>

              <TwitterTweetEmbed
                tweetId="1417946236384993280"
                placeholder="loading"
              />

              {/* Dina Stars */}
              <p>
                <a
                  target="_blank"
                  href="https://twitter.com/Dinastars_"
                  rel="noopener noreferrer"
                >
                  Dina Stars
                </a>
                , a popular Cuban Youtuber and influencer was detained by
                government security forces on{" "}
                <a
                  href="https://www.npr.org/2021/07/14/1015837541/a-popular-youtuber-is-detained-by-cuban-police-on-live-tv-in-a-roundup-of-critic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  live television Tuesday morning
                </a>
                {` `}
                as she was discussing the sweeping arrests of activists,
                protesters and journalists.
              </p>

              <YoutubeEmbed embedId="S-gGqfryL-A" />

              <blockquote>
                <p>
                  I hold the government responsible for anything that may happen
                  to me
                </p>
              </blockquote>

              <p>
                the 25-year-old youtuber told the program&apos;s host before
                abruptly leaving the interview.
              </p>

              <p>She added:</p>

              <blockquote>
                <p>I have to go. They told me to accompany them.</p>
              </blockquote>

              {/* 27NCuba */}
              <p>
                The 27NCuba movement is a group of independent Cuban artists,
                writers, thinkers, and civil society members that formed in the
                wake of the unjust arrest of rapper Denis Solis Gonzalez on
                November 27, 2020.
              </p>

              <p>
                Here&apos;s a video of their detention after peacefully
                protesting in front of the Cuban Institute of Radio and
                Television (ICRT in spanish)
              </p>

              {/* 27NCuba movemement */}
              <TwitterTweetEmbed
                tweetId="1414389085003784194"
                placeholder="Loading"
              />

              <img
                className="h-auto w-auto object-cover"
                src={list_of_detained}
                alt="list of people detained and/or dissapeared"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default July11
