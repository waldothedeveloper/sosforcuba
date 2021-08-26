import React from "react"
import HLSVideoPlayer from "../components/hls-player"
import { pichyboysVideos } from "../utils/instagram_vids"
import SocialMediaEmbedCarousel from "../components/carousel"
import { TwitterTweetEmbed } from "react-twitter-embed"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//
const CubanGovernmentResponse = () => {
  //
  return (
    <Layout>
      <div className="py-32 prose prose-red prose-lg text-gray-300 mx-auto max-w-sm px-4 md:px-0 md:max-w-4xl">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-red-600 font-semibold tracking-wide uppercase">
              on July 11, 2021
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
              Cuban Gov Response
            </span>
          </h1>
        </div>
        <StaticImage
          imgStyle={{ borderRadius: "0.5rem" }}
          className="w-44 h-64 overflow-hidden"
          src="../images/miguel-diaz-canel.jpg"
          alt=""
          placeholder="blurred"
          layout="fullWidth"
          transformOptions={{ fit: "cover" }}
        />
        <p>
          <a
            href="https://twitter.com/DiazCanelB"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-yellow-400 underline">
              Miguel Díaz-Canel Bermúdez
            </span>
          </a>
          , the actual president of Cuba, made a speech transmitted on national
          TV calling for repression of the protests and inciting national
          violence. In his own words, he said:
        </p>
        <blockquote>
          <p className="py-32">
            The order of combat has been given, revolutionaries, to the streets!
          </p>
        </blockquote>
        <p>The horror was about to start...</p>

        {/* video declarations */}
        <div className="aspect-w-16 aspect-h-9">
          <HLSVideoPlayer
            url="https://stream.mux.com/Pka19Cqqc1Fo9p7vi01jkCCNoA2T3oPVPGOx9WWKkU004.m3u8"
            poster="https://image.mux.com/Pka19Cqqc1Fo9p7vi01jkCCNoA2T3oPVPGOx9WWKkU004/thumbnail.png?width=1920&height=1080&fit_mode=pad&time=03"
          />
        </div>

        <span className="my-24 md:my-32 block text-3xl text-center leading-8 font-semibold tracking-tight text-gray-300 sm:text-4xl">
          The so called{" "}
          <span className="text-red-500 underline">revolutionaries</span> by the
          president are simply:
        </span>

        <div className="space-y-32">
          <div>
            <p>
              special military brigades known as black berets -boinas negras in
              spanish-
            </p>
            {/* boinas negras */}
            <StaticImage
              imgStyle={{ borderRadius: "0.5rem" }}
              className="w-full h-96 overflow-hidden"
              src="../images/boinas_negras.jpeg"
              alt="military cuban forces known as black berets"
              placeholder="blurred"
              layout="fullWidth"
              transformOptions={{ fit: "cover" }}
            />
          </div>

          <div>
            <p>the national police</p>

            {/* policia nacional */}
            <StaticImage
              imgStyle={{ borderRadius: "0.5rem" }}
              className="w-full h-96 overflow-hidden"
              src="../images/policia_cubana.jpg"
              alt="military cuban forces known as black berets"
              placeholder="blurred"
              layout="fullWidth"
              transformOptions={{ fit: "cover" }}
            />
          </div>

          <div>
            <p>the MININT special forces -Ministry of the Interior-</p>

            {/* minint */}
            <StaticImage
              imgStyle={{ borderRadius: "0.5rem" }}
              className="w-full h-96 overflow-hidden"
              src="../images/minint_cuba.jpg"
              alt="military cuban forces known as black berets"
              placeholder="blurred"
              layout="fullWidth"
              transformOptions={{ fit: "cover" }}
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
          protesters themselves shows a significant
        </p>

        <span className="pt-12 pb-24 block text-3xl text-center leading-8 font-extrabold tracking-tight text-yellow-400 sm:text-4xl">
          shocking level of violence from the government.
        </span>

        <p>Here are some of those:</p>

        {/* videos shared by los Pichy Boys */}
        <SocialMediaEmbedCarousel data={pichyboysVideos} />

        <p>The U.S Department of the Treasury cited:</p>

        <blockquote className="py-12">
          <span className="text-gray-400">
            Since the beginning of the July 2021 protests in Cuba, the Cuban
            regime deployed the{" "}
            <span className="font-semibold text-yellow-400">PNR</span>, a police
            unit under the Cuban MININT, to suppress and attack protesters. Led
            by Director{" "}
            <span className="font-semibold text-yellow-400">CALLEJAS</span> and
            Deputy Director{" "}
            <span className="font-semibold text-yellow-400">SIERRA</span>, the{" "}
            <span className="font-semibold text-yellow-400">PNR</span> was
            photographed confronting and arresting protestors in Havana,
            including the Movement of July 11 Mothers, a group founded to
            organize families of the imprisoned and disappeared. In Camagüey, a
            Catholic priest was beaten and arrested by the{" "}
            <span className="font-semibold text-yellow-400">PNR</span> while he
            was defending young protesters; officers of the
            <span className="font-semibold text-yellow-400">PNR</span> also beat
            a group of peaceful demonstrators, including several minors.
            Additionally, there have been several recorded instances in which
            the <span className="font-semibold text-yellow-400">PNR</span> used
            clubs to violently break up peaceful protests across Cuba.
          </span>
        </blockquote>

        <p className="text-sm text-gray-400 text-center">
          Link to cited article{" "}
          <a
            href="https://home.treasury.gov/news/press-releases/jy0298"
            target="_blank"
            rel="noreferrer noopener"
          >
            here.
          </a>
        </p>

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
        <p>
          Learn more about the Cuban government&apos;s arbitrary detentions
          {` `}
          <Link to="/detained-people"> here.</Link>
        </p>
      </div>
    </Layout>
  )
}

export default CubanGovernmentResponse
