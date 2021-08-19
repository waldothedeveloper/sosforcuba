import React from "react"
import covid_under_control from "../images/covid-under-control-granma-2020.png"
import mazorra1 from "../images/mazorra-1.jpg"
import mazorra2 from "../images/mazorra-2.jpg"
import mazorra3 from "../images/mazorra-3.jpg"
import mazorra4 from "../images/mazorra-4.jpg"
import mazorra5 from "../images/mazorra-5.jpg"
import mazorra6 from "../images/mazorra-6.jpg"
import mazorra7 from "../images/mazorra-7.jpg"
import person_hospital_1 from "../images/hospital-in-cuba-1.png"
import person_hospital_2 from "../images/person_hospital_2.jpg"
import person_hospital_3 from "../images/person_hospital_3.jpg"
import person_hospital_4 from "../images/person_hospital_4.jpg"
import doctor_hospital from "../images/doctor_hospital.jpeg"
import hospital2 from "../images/hospital-in-cuba-2.jpeg"
import hospital3 from "../images/hospital-in-cuba-3.jpg"
import hospital4 from "../images/hospital-in-cuba-4.jpg"
import hospital5 from "../images/hospital-in-cuba-5.jpg"
import hospital_bed from "../images/hospital_bed_in_cuba.jpg"
import hospital_in_cuba from "../images/hospital-in-cuba.jpeg"
import old_people_hospital from "../images/old-people-hospital-in-cuba.jpeg"
import cuban_doctors from "../images/cuban-doctors-going-to-international-missions.jpeg"
import HLSVideoPlayer from "./hls-player"

const products = [
  {
    imageSrc: person_hospital_1,
    imageAlt: "And old man naked in a hospital in Cuba",
  },
  {
    imageSrc: person_hospital_2,
    imageAlt: "people in rusted beds in a hospital in Cuba",
  },
  {
    imageSrc: person_hospital_3,
    imageAlt: "people on the floor in a hospital in Cuba",
  },
  { imageSrc: hospital4, imageAlt: "flooded floors in a hospital in Cuba" },
  { imageSrc: hospital5, imageAlt: "a bathroom broken in a hospital in Cuba" },
  {
    imageSrc: doctor_hospital,
    imageAlt: " a doctor showing a disgusting mattress in a hospital in Cuba",
  },
  { imageSrc: hospital_bed, imageAlt: "a broken hospital bed in Cuba" },
  {
    imageSrc: hospital3,
    imageAlt: "a disgusting bathroom in a hospital in Cuba",
  },
  {
    imageSrc: hospital_in_cuba,
    imageAlt: "horrible conditions in a hospital in Cuba",
  },
  {
    imageSrc: old_people_hospital,
    imageAlt: "horrible conditions in a hospital in Cuba",
  },
  {
    imageSrc: hospital2,
    imageAlt: "horrible conditions in a hospital in Cuba",
  },
  {
    imageSrc: person_hospital_4,
    imageAlt: "a mom holds her child in her arms in a hospital in Cuba",
  },
]

const CovidCrisis = () => {
  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-4 space-y-6 overflow-hidden">
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-red-600 sm:text-4xl">
          FOR {new Date().getFullYear() - 1959} YEARS
        </p>
        <p className="mt-4 text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl">
          The Cuban Government has always claimed to have{" "}
          <span className="underline">the best free healthcare system.</span>
        </p>
        <p className="mt-6 text-xl font-medium text-gray-400 sm:text-2xl leading-relaxed tracking-wide">
          Back in January of 2010, a cold wave of temperatures whipped the
          capital, Havana. In a psychiatric hospital known as
          &apos;Mazorra&apos; more than a two dozen people lost their lives of
          hypothermia.{" "}
        </p>

        <p className="py-32 text-lg font-bold text-red-600 sm:text-xl leading-relaxed tracking-wide underline">
          WARNING: THE FOLLOWING IMAGES ARE GRAPHIC AND MAY BE DISTURBING TO
          SOME USERS
        </p>
      </div>
      {/* psychiatric photos of dead patients */}
      <div className="relative">
        <div className="mt-10">
          {/* Decorative image grid */}
          <div aria-hidden="true" className="pointer-events-none">
            {/* small screens */}
            <div className="md:hidden">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-2">
                  <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                    <img
                      src={mazorra1}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                    <img
                      src={mazorra2}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                    <img
                      src={mazorra3}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                    <img
                      src={mazorra4}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                    <img
                      src={mazorra5}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* medium and large screens */}
            <div className="hidden md:block">
              <div className="flex items-center justify-center space-x-6 lg:space-x-8">
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6">
                  <div className="w-64 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                    <img
                      src={mazorra1}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-64 h-64 rounded-lg overflow-hidden">
                    <img
                      src={mazorra2}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6">
                  <div className="w-80 h-64 rounded-lg overflow-hidden">
                    <img
                      src={mazorra3}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden">
                    <img
                      src={mazorra4}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden">
                    <img
                      src={mazorra5}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6">
                  <div className="w-96 h-64 rounded-lg overflow-hidden">
                    <img
                      src={mazorra6}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-96 h-64 rounded-lg overflow-hidden">
                    <img
                      src={mazorra7}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 space-y-6 overflow-hidden">
        <p className="mt-6 text-xl font-medium text-red-600 sm:text-2xl leading-relaxed tracking-wide">
          They let them freeze to death.
        </p>

        <p className="mt-6 text-xl font-medium text-gray-400 sm:text-2xl leading-relaxed tracking-wide">
          These patients were severely malnourished, almost naked, and without
          blankets to survive the cold temperatures before dying.
        </p>
        <p className="mt-4 text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl">
          This place, like many facilities in Cuba, has many windows broken or
          missing.
        </p>
        <p className="mt-6 text-xl font-medium text-gray-400 sm:text-2xl leading-relaxed tracking-wide">
          The government organized a security operation around the hospital, and
          the workers were instructed to remain silent.
        </p>

        <p className="text-gray-400 text-2xl flex justify-center py-6 leading-relaxed tracking-wide">
          ...
        </p>
        <p className="mt-6 text-xl font-medium text-gray-400 sm:text-2xl leading-relaxed tracking-wide">
          The same story is being repeated now with COVID but in numbers that
          will make you cry.
        </p>

        <p className="mt-6 text-xl font-medium text-red-600 sm:text-2xl leading-relaxed tracking-wide">
          People are dying in hospitals without oxygen, medicines, medical
          attention, antibiotics, syringes, sanitary conditions, nothing.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 space-y-6 overflow-hidden py-12">
        <p className="mt-4 text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl">
          But the government speech sounds different. <br />
          For them, everything is under control.
        </p>

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
              <p className="text-2xl md:text-3xl">
                “A week without deaths, the epidemic in Cuba is{" "}
                <span className="underline uppercase font-semibold">
                  under control
                </span>
                ”
              </p>
              <p className="mt-6 text-gray-400 text-md">
                “President Díaz-Canel assured on June 6th, 2020, at the meeting
                of the temporary working group for the prevention and control of
                COVID-19, that with the contribution of the Health system and
                Cuban scientists{" "}
                <span className="underline font-medium">
                  we are decreasing, to what is almost impossible , the
                  affectations in critical and serious patients.”
                </span>
              </p>
            </blockquote>
          </div>
        </div>
        <p className="mt-4 text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl">
          The reality is totally{` `}
          <span className="text-red-600 underline">different.</span>
        </p>

        <p className="py-32 text-lg font-bold text-red-600 sm:text-xl leading-relaxed tracking-wide underline">
          WARNING: THE FOLLOWING IMAGES ARE GRAPHIC AND MAY BE DISTURBING TO
          SOME USERS
        </p>
        {/* images of hospitals */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6">
          {products.map(product => (
            <div key={product.imageSrc} className="group relative">
              <div className="w-full bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 h-96">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-top object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <p className="pt-12 text-xl font-medium text-red-600 sm:text-2xl leading-relaxed tracking-wide">
          People are dying in hospitals without oxygen, medicines, medical
          attention, antibiotics, syringes, sanitary conditions, nothing.
        </p>

        {/* Videos of hospital facilities in Cuba */}

        <div className="flex flex-col space-y-4 py-12">
          <p className="py-6 text-xl font-medium text-gray-50 sm:text-2xl leading-relaxed tracking-wide">
            An exclusive video shows the men&apos;s bathroom in a principal
            hospital in Cuba.
          </p>
          <div className="md:aspect-w-3 md:aspect-h-2 w-full px-12">
            <HLSVideoPlayer
              url="https://stream.mux.com/wAQIaCanjwed3XdBo3KIqpwJEQWjP98R011c4NkSzaeE.m3u8"
              poster="https://image.mux.com/wAQIaCanjwed3XdBo3KIqpwJEQWjP98R011c4NkSzaeE/thumbnail.png?width=600&height=600&fit_mode=pad"
            />
          </div>
          <p className="py-6 text-xl font-medium text-gray-50 sm:text-2xl leading-relaxed tracking-wide">
            Another exclusive video showing the hallways and dark rooms of the
            internal medicine area of a hospital in Cuba.
          </p>

          <div className="md:aspect-w-3 md:aspect-h-2 w-full px-12">
            <HLSVideoPlayer
              url="https://stream.mux.com/DEVxUQndm7sbQ02kCVzEBk9p601iop02hwU6aJkvow3MoA.m3u8"
              poster="https://image.mux.com/DEVxUQndm7sbQ02kCVzEBk9p601iop02hwU6aJkvow3MoA/thumbnail.png?width=600&height=600&fit_mode=pad&time=03"
            />
          </div>

          <p className="py-6 text-xl font-medium text-gray-50 sm:text-2xl leading-relaxed tracking-wide">
            An old man screams &apos;Get me out of here&apos; in a hospital in
            Cuba.
          </p>

          <div className="md:aspect-w-3 md:aspect-h-2 w-full px-12">
            <HLSVideoPlayer
              url="https://stream.mux.com/CfKqliT97mYn6yqmyaTgb00hqAAquH00HKux01ARjIoNpg.m3u8"
              poster="https://image.mux.com/CfKqliT97mYn6yqmyaTgb00hqAAquH00HKux01ARjIoNpg/thumbnail.png?width=600&height=600&fit_mode=pad"
            />
          </div>
        </div>

        <p className="mt-4 text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl">
          In the meantime, the Cuban government sends thousands of doctors to
          international missions.
        </p>

        <div className="w-full bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 h-96">
          <img
            src={cuban_doctors}
            alt="Cuban doctors ready to go on an international mission"
            className="w-full h-full object-top object-cover"
          />
        </div>

        <p className="mt-4 text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl">
          They pay the Cuban doctors pennies and put the rest in their pockets.
        </p>

        <p className="mt-4 text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl">
          These have become one of the most lucrative businesses for the
          totalitarian regime.
        </p>
      </div>
    </div>
  )
}

export default CovidCrisis
