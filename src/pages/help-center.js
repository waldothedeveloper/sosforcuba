import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import DonationsUse from "../components/donations-use"
import HelpDonations from "../components/help-donations"
import DonationsDisclaimer from "../components/donations-disclaimer"

//

const HelpCenter = () => {
  return (
    <Layout>
      <div className="bg-gray-800">
        {/* medium and large screens */}
        <div className="md:flex md:flex-col hidden">
          <div className="relative">
            <div
              aria-hidden="true"
              className="hidden absolute w-1/2 h-full bg-gray-800 lg:block"
            />
            <div className="relative bg-gray-800 lg:bg-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
                <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
                  <div className="lg:pr-16">
                    <h1 className="font-extrabold tracking-tight bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 bg-clip-text text-transparent  sm:text-4xl xl:text-5xl">
                      End Communism in Cuba{" "}
                      <span className="text-gray-100">🇨🇺 </span>
                    </h1>
                    <p className="mt-12 text-xl text-gray-400">
                      None of what the Cuban people are going through is a
                      consequence of the U.S embargo.
                    </p>
                    <p className="mt-12 text-xl text-gray-400">
                      The U.S. embargo allows humanitarian goods to reach Cuba,
                      and the U.S. government expedites requests to export
                      humanitarian or medical supplies to Cuba.
                    </p>
                    <p className="mt-12 text-sm text-gray-400">
                      more on this{" "}
                      <a
                        className="underline"
                        href="https://www.state.gov/fact-sheet-provision-of-humanitarian-assistance-to-cuba/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        here
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
              <StaticImage
                imgStyle={{ objectPosition: "center" }}
                className="w-full h-full"
                src="../images/help_soscuba.jpg"
                alt="Police car upsidedown while a cuban protester hold the cuban flag stained with blood in sign of freedom"
                placeholder="blurred"
                layout="fullWidth"
                transformOptions={{ fit: "cover" }}
              />
            </div>
          </div>

          <div>
            <HelpDonations />
            <DonationsDisclaimer />
            <DonationsUse />
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

          <div className="relative -mt-32 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
              <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 bg-clip-text text-transparent sm:text-4xl">
                End Communism in Cuba
              </h2>
              <p className="mt-4 text-gray-400 text-base">
                None of what the Cuban people are going through is a consequence
                of the U.S embargo.
              </p>
              <p className="mt-12 text-gray-400 text-base">
                The U.S. embargo allows humanitarian goods to reach Cuba, and
                the U.S. government expedites requests to export humanitarian or
                medical supplies to Cuba.
              </p>
              <p className="mt-12 text-sm text-gray-400">
                more on this{" "}
                <a
                  className="underline"
                  href="https://www.state.gov/fact-sheet-provision-of-humanitarian-assistance-to-cuba/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
              </p>
            </div>
          </div>
          {/* help steps */}
          <div>
            <HelpDonations />
            <DonationsDisclaimer />
            <DonationsUse />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HelpCenter
