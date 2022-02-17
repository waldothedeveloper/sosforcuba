import React from "react"
import Layout from "../components/layout"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { StaticImage } from "gatsby-plugin-image"
import DonationsUse from "../components/donations-use"
import HelpDonations from "../components/help-donations"
// import DonationFacts from "../components/donation-facts"
import Donations_WhatElse from "../components/donations-whatElse"
import DonationsDisclaimer from "../components/donations-disclaimer"

const title = "Donate to the Freedom of Cuba"
const subtitle1 =
  "+62 years of communism is NOT a consequence of the U.S embargo."
const subtitle2 =
  "The U.S. embargo allows humanitarian goods to reach Cuba, and the U.S. government expedites requests to export humanitarian or medical supplies to Cuba."

//

const HelpCenter = () => {
  return (
    <Layout>
      <div className="bg-gray-800">
        {/* medium and large screens */}
        {/* medium and large screens */}
        {/* medium and large screens */}
        <div className="md:flex md:flex-col hidden">
          <div className="relative">
            <div className="relative bg-gray-800 lg:bg-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
                <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
                  <div className="lg:pr-16">
                    <h1 className="font-extrabold tracking-tight bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 bg-clip-text text-transparent  sm:text-4xl xl:text-5xl">
                      {title} <span className="text-gray-50">🇨🇺 </span>
                    </h1>
                    <p className="mt-12 text-xl text-gray-300">{subtitle1}</p>
                    <p className="mt-12 text-xl text-gray-300">{subtitle2}</p>
                    <p className="mt-12 text-sm text-gray-400">
                      more on this{" "}
                      <OutboundLink
                        className="underline"
                        href="https://www.state.gov/fact-sheet-provision-of-humanitarian-assistance-to-cuba/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        here
                      </OutboundLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-1/2 h-full">
              <StaticImage
                imgStyle={{ objectPosition: "center" }}
                className="w-full h-full"
                src="../images/help_soscuba.jpg"
                alt="Police car upsidedown while a cuban protester hold the cuban flag stained with blood in sign of freedom"
                placeholder="blurred"
                layout="fullWidth"
                transformOptions={{ fit: "cover" }}
              />
              <p className="text-gray-400 -mt-6 ml-2 text-xs absolute">
                Photo by{" "}
                <OutboundLink
                  className="font-medium text-sky-500"
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://www.instagram.com/jimmy_cacer_photo/"
                >
                  @jimmy_cacer_photo
                </OutboundLink>
              </p>
            </div>
          </div>

          <div>
            <HelpDonations />
            <DonationsUse />
            {/* <DonationFacts /> */}
            <Donations_WhatElse />
            <DonationsDisclaimer />
          </div>
        </div>
        {/* small screens */}
        {/* small screens */}
        {/* small screens */}
        {/* small screens */}
        <div className="block md:hidden relative bg-gray-800">
          <div aria-hidden="true" className="relative">
            <StaticImage
              imgStyle={{ objectPosition: "center" }}
              className="w-full h-full"
              src="../images/help_soscuba.jpg"
              alt="Police car upsidedown while a cuban protester hold the cuban flag stained with blood in sign of freedom"
              placeholder="blurred"
              layout="fullWidth"
              transformOptions={{ fit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800" />
          </div>

          <div className="relative -mt-2 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
              <p className="text-gray-400 ml-2 text-xs">
                Photo by{` `}
                <OutboundLink
                  className="text-sky-500"
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://www.instagram.com/jimmy_cacer_photo/"
                >
                  @jimmy_cacer_photo
                </OutboundLink>
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 bg-clip-text text-transparent sm:text-4xl">
                {title} <span className="text-gray-50">🇨🇺 </span>
              </h2>
              <p className="mt-4 text-gray-300 text-base">{subtitle1}</p>
              <p className="mt-12 text-gray-300 text-base">{subtitle2}</p>
              <p className="mt-12 text-sm text-gray-400">
                more on this{" "}
                <OutboundLink
                  className="underline"
                  href="https://www.state.gov/fact-sheet-provision-of-humanitarian-assistance-to-cuba/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </OutboundLink>
              </p>
            </div>
          </div>
          {/* help steps */}
          <div>
            <HelpDonations />
            <DonationsUse />
            <Donations_WhatElse />
            <DonationsDisclaimer />
            {/* <DonationFacts /> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HelpCenter
