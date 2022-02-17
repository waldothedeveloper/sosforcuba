import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Hero() {
  return (
    <div className="pb-24 md:pt-2">
      <div className="relative overflow-hidden">
        <div className="sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-8xl font-extrabold tracking-tight text-gray-50 md:text-9xl">
                <span className="inline bg-gradient-to-r from-coolGray-100 to-coolGray-300 bg-clip-text text-6xl text-transparent">
                  <span className="text-4xl">#</span> S.O.S
                </span>{" "}
                <span className="block bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent xl:inline">
                  CUBA
                </span>
              </h1>

              <div className="md:static md:mt-12 md:p-0">
                <h2 className="mt-4 text-xl font-extrabold text-white sm:text-4xl">
                  <span className="block bg-gradient-to-r from-blueGray-500 to-yellow-100 bg-clip-text text-xl text-transparent">
                    we need urgent
                  </span>
                  <span className="block bg-gradient-to-r from-coolGray-100 to-coolGray-300 bg-clip-text text-2xl text-transparent">
                    SUPPORT.
                  </span>
                  <span className="block bg-gradient-to-b from-sky-400 to-sky-200 bg-clip-text text-3xl text-transparent">
                    HELP.
                  </span>
                  <span className="block bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-4xl text-transparent">
                    INTERVENTION.
                  </span>
                </h2>
              </div>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  {/* small screens */}
                  <div className="md:hidden">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6">
                        {/* group of 2 */}

                        <StaticImage
                          imgStyle={{ borderRadius: "0.5rem" }}
                          className="h-64 w-44 overflow-hidden"
                          src="../images/sos_pic_4.jpg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />

                        <StaticImage
                          imgStyle={{ borderRadius: "0.5rem" }}
                          className="h-64 w-44 overflow-hidden"
                          src="../images/13-year-old-kid-dead-cuba-protests-july-2021.jpeg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />
                      </div>
                      {/* group of 3 */}
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <StaticImage
                          imgStyle={{ borderRadius: "0.5rem" }}
                          className="h-64 w-44 overflow-hidden"
                          src="../images/sos_pic_3.jpg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />

                        <StaticImage
                          imgStyle={{ borderRadius: "0.5rem" }}
                          className="h-64 w-44 overflow-hidden"
                          src="../images/sos_pic_7.jpg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />

                        <StaticImage
                          imgStyle={{ borderRadius: "0.5rem" }}
                          className="h-64 w-44 overflow-hidden"
                          src="../images/mother_holding_her_child_hospital_cuba.jpg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* medium and large screens */}
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      {/* group of 2 */}
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6">
                        <StaticImage
                          className="h-64 w-44 overflow-hidden rounded-lg opacity-100"
                          src="../images/sos_pic_4.jpg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />

                        <StaticImage
                          className="h-64 w-44 overflow-hidden rounded-lg"
                          src="../images/13-year-old-kid-dead-cuba-protests-july-2021.jpeg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />
                      </div>
                      {/* group of 3 */}
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6">
                        <StaticImage
                          className="h-64 w-44 overflow-hidden rounded-lg"
                          src="../images/mother_holding_her_child_hospital_cuba.jpg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />

                        <StaticImage
                          className="h-64 w-44 overflow-hidden rounded-lg"
                          src="../images/sos_pic_3.jpg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />

                        <StaticImage
                          className="h-64 w-44 overflow-hidden rounded-lg"
                          src="../images/sos_pic_8.jpg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />
                      </div>
                      {/* group of 2 */}
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6">
                        <StaticImage
                          className="h-64 w-44 overflow-hidden rounded-lg"
                          src="../images/sos_pic_7.jpg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />
                        <StaticImage
                          className="h-64 w-44 overflow-hidden rounded-lg"
                          src="../images/sos_pic_5.webp"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
