import React from "react"
import { useCubaCovidData } from "../hooks/useCubaCovidData"

const CubaCovidData = () => {
  const data = useCubaCovidData()

  //
  return (
    <div>
      <p className="my-2 text-gray-400 font-medium text-lg">
        Coronavirus (COVID-19) Data
      </p>
      <h3 className="py-2 text-4xl leading-6 font-semibold text-gray-50">
        Cuba
      </h3>
      <p className="py-0.5 text-gray-400 text-sm">Updated 2 days ago.</p>
      {/* Data */}
      {/* divide-y divide-gray-400 md:divide-y-0 md:divide-x */}
      <dl className="mt-5 grid grid-cols-2 md:grid-cols-3 rounded-lg bg-gray-700 overflow-hidden ">
        {data.map(item => (
          <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="text-xs md:text-sm font-semibold text-gray-400">
              {item.name}
            </dt>
            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex ">
              <div className="flex items-baseline text-2xl md:text-3xl font-semibold text-gray-50">
                {item.stat.toLocaleString()}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default CubaCovidData
