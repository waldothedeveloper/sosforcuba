import React from "react"

const HelpDonations = () => {
  return (
    <div className="bg-gradient-to-r from-coolGray-50 to-coolGray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-coolGray-800 sm:text-4xl">
            Donate straight to the people of Cuba!
          </h2>
          <p className="mt-4 text-lg text-coolGray-500 font-semibold">
            Your donations will provide medicines, food, items of basic needs,
            cellphone top-ups, and other goods straight to the Cuban people.
          </p>
        </div>

        <div className="mt-8 flex flex-col lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://givebutter.com/sos4cuba"
              className="inline-flex items-center justify-center px-12 py-3 text-base font-medium rounded-md text-gray-50 bg-gradient-to-r from-red-500 to-red-800"
            >
              Donate
            </a>
            <div className="ml-3 inline-flex rounded-md">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.paypal.com/donate?business=DV5S2PXD86YDG&no_recurring=0&currency_code=USD"
                className="inline-flex items-center justify-center px-12 py-3 text-base font-medium rounded-md text-gray-50 bg-gradient-to-r from-sky-400 to-cyan-300"
              >
                Paypal
              </a>
            </div>
          </div>
          <p className="text-coolGray-500 mt-4 text-sm font-medium">
            Send your donations using{" "}
            <span className="font-semibold text-coolGray-700">Venmo</span> or{" "}
            <span className="font-semibold text-coolGray-700">Zelle</span> to:{" "}
            <br />{" "}
            <span className="font-semibold text-coolGray-700">
              info@sosforcuba.com
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default HelpDonations
