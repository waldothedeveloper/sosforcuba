import React from "react"
import covid_under_control from "../images/covid-under-control-granma-2020.png"

const CovidCrisis = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        <p className="mt-2 text-2xl font-bold text-gray-400 sm:text-3xl leading-relaxed tracking-wide">
          When COVID spreaded all over the world back in 2020, the Cuban
          government repeatedly claimed to have it all under control.
        </p>
        <p className="mt-2 text-2xl font-bold text-gray-400 sm:text-3xl leading-relaxed tracking-wide">
          Look what the head news is saying in one of the official newspapers of
          the government:
        </p>
      </div>

      {/* newspaper */}
      <div className="py-12 md:max-w-3xl md:mx-auto">
        <div aria-hidden="true" className="relative">
          <div>
            <img
              src={covid_under_control}
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800" />
        </div>
        <div className="px-4 flex items-start h-full">
          <blockquote className="text-red-600">
            <p className="text-2xl md:text-4xl">
              “A week without deaths, the epidemic in Cuba is{" "}
              <span className="underline uppercase font-semibold">
                under control
              </span>
              ”
            </p>
            <p className="mt-6 text-gray-400 text-lg">
              President Díaz-Canel assured this Saturday, at the meeting of the
              temporary working group for the prevention and control of
              COVID-19, that with the contribution of the Health system and
              Cuban scientists{" "}
              <span className="underline font-medium text-gray-300">
                we are decreasing, to what is almost impossible , the
                affectations in critical and serious patients.
              </span>
            </p>
          </blockquote>
        </div>
      </div>
      {/* NOT UNDER CONTROL */}
      {/* <div className="max-w-4xl mx-auto px-4 space-y-4">
        <p className="mt-2 text-2xl font-extrabold text-gray-50 sm:text-3xl leading-loose tracking-wider">
          THIS IS WHAT THEY CALL <br />
          <span className="underline">UNDER CONTROL</span>
        </p>
      </div> */}
    </div>
  )
}

export default CovidCrisis
