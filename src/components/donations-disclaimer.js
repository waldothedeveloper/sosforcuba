import React from "react"

//
const DonationsDisclaimer = () => {
  return (
    <div className="bg-gray-800">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* link to IRS form for donations greater than 20K usd */}
        {/* https://www.irs.gov/forms-pubs/about-form-1099-k */}
        <p className="text-xs font-semibold text-gray-400">
          DISCLAIMER: We are NOT a not-for-profit organization. We do NOT offer
          any service or product in return for your donations. If you would like
          to donate an amount equal to or greater than 20K USD please contact us
          at info@sosforcuba.com.
        </p>
      </div>
    </div>
  )
}

export default DonationsDisclaimer
