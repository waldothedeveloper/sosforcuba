import React from "react"

const StatisticsOfDetainedPeople = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            <span className="text-yellow-400">
              People missing or detained after the protests
            </span>
          </h2>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-400">
              Dissapeared or Detained
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-red-600">
              840
            </dd>
          </div>

          <div className="flex flex-col mt-10 md:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-400">
              Missing or Detained
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-red-600">
              503
            </dd>
          </div>

          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-400">
              Freed or Released
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-red-600">
              337
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
export default StatisticsOfDetainedPeople
