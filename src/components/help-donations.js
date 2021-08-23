import React from "react"

const HelpDonations = () => {
  return (
    <div className="bg-gradient-to-r from-sky-400 to-cyan-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-blueGray-800 sm:text-4xl">
            🇨🇺 Join our crowdfunding campaign!
          </h2>
          <p className="mt-4 text-lg text-blueGray-700 font-bold">
            Your donations will provide medicines, food, items of basic needs,
            phone top-ups, and other goods straight to the Cuban people.
          </p>
        </div>

        <div className="mt-8 flex flex-col lg:mt-0">
          <div className="inline-flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.paypal.com/donate?business=DV5S2PXD86YDG&no_recurring=0&currency_code=USD"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent"
            >
              <img
                src="https://images.squarespace-cdn.com/content/v1/56b123ef59827ee91c2229db/1626469342024-8N0ZZ6JBM6HT0BYPEGKJ/PayPal-Donate-Button-High-Quality-PNG-e1498490436982.png?format=300w"
                className="w-full h-full"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HelpDonations
