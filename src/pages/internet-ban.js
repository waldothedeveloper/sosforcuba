import React from "react"
import { TwitterTweetEmbed } from "react-twitter-embed"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"

//

const InternetBan = () => {
  return (
    <Layout>
      <div className="py-32 prose prose-red prose-lg text-gray-300 mx-auto max-w-sm px-4 md:px-0 md:max-w-4xl">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-red-600 font-semibold tracking-wide uppercase">
              on July 11, 2021
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
              Internet Ban
            </span>
          </h1>
        </div>
        <p>
          In addition, the Cuban government took an additional step in response
          to these peaceful protests:
        </p>

        <span className="py-12 block text-3xl text-center leading-8 font-extrabold tracking-tight text-yellow-400 sm:text-4xl">
          Cutting the internet for the entire population of Cuba.
        </span>

        <p>
          <span className="font-bold text-md">The BBC News</span> wrote an{" "}
          <OutboundLink
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.bbc.com/news/world-latin-america-57818918"
          >
            <span className="text-sky-400 font-semibold">article</span>
          </OutboundLink>{" "}
          explaining the strategy behind the Cuban government&apos;s actions:
        </p>
        {/* cut the internet wire */}
        <blockquote>
          <p>
            This prevents people from sharing information about the gatherings
            and claims of abuse against authorities known for their repressive
            tactics to silence criticism.
          </p>

          <p>...</p>
          <p>
            Facebook, the most popular social platform in Cuba, as well as
            WhatsApp, Instagram and Telegram remained restricted by
            Etecsa&apos;s servers, according to monitoring site Netblocks.
          </p>
        </blockquote>

        <div className="flex justify-center">
          <StaticImage
            src="../images/etecsa_logo.jpg"
            alt="etecsa logo, the only phone and internet company in Cuba"
            placeholder="dominantColor"
            layout="fixed"
          />
        </div>

        <p>
          <span className="text-yellow-400 underline">
            ETECSA is the only phone & internet company on the island.
          </span>{" "}
          But, this is not due to the U.S. embargo.
        </p>

        <p className="mt-4 text-3xl font-extrabold bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent sm:text-4xl">
          Any internet & phone U.S. company -such as AT&T or T-Mobile- can do
          business directly with Cuba.
        </p>

        <p>
          The real problem is that the government{" "}
          <span className="underline font-medium text-yellow-400 text-2xl">
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
          Julie Chung is the Acting Assistant Secretary for U.S. Department of
          State&apos;s Bureau of Western Hemisphere Affairs.
        </span>
      </div>
    </Layout>
  )
}

export default InternetBan
