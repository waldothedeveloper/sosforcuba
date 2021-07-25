import React from "react"
import YoutubeEmbed from "../components/youtubeEmbed"
import { pichyboysVideos } from "../utils/instagram_vids"
import boinas_negras from "../images/boinas_negras.jpeg"
import policia from "../images/policia_cubana.jpg"
import minint from "../images/minint_cuba.jpg"
import SocialMediaEmbedCarousel from "../components/carousel"
import { TwitterTweetEmbed } from "react-twitter-embed"

const Section2_Gov_Response = () => {
  return (
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
        , the president of Cuba, made a speech transmitted on national TV
        calling for repression of the protests and incited national violence. In
        his own words, he said:
      </p>
      <blockquote>
        <p className="py-32">
          The order of combat has been given, revolutionaries, to the streets!
        </p>
      </blockquote>
      <p>The horror was about to start...</p>
      <YoutubeEmbed embedId="Jh_lWGrxMSc" />

      <span className="my-48 block text-3xl text-center leading-8 font-semibold tracking-tight text-gray-300 sm:text-4xl">
        The so called{" "}
        <span className="text-red-500">&ldquo;revolutionaries&rdquo;</span> by
        the president are:
      </span>

      <div className="space-y-32">
        <div>
          <p>
            special military brigades known as black berets -boinas negras in
            spanish-
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
            As well as other gov officials dressed as civilians carrying wood
            sticks ready to beat anyone who would be peacefully protesting:
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
        People are also afraid of taking out their phones on the streets -even
        if it is to look at the time- thinking that if the police catch them,
        they will think that they are making a video against the government.
      </p>

      <blockquote className="py-12">
        <p>
          And we are ready for anything. They will have to pass over our dead
          bodies if they think they can defeat the revolution
        </p>
      </blockquote>

      <p className="pt-12">Added the president in his speech...</p>
    </div>
  )
}

export default Section2_Gov_Response
