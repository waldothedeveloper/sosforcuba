import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Hero() {
  return (
    <div className="md:pt-2 pb-24">
      <div className="relative overflow-hidden">
        <div className="sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-8xl md:text-9xl tracking-tight font-extrabold text-gray-50">
                {/* <span className="inline text-4xl text-sky-500"># </span> */}
                <span className="inline text-6xl bg-gradient-to-r from-coolGray-100 to-coolGray-300 bg-clip-text text-transparent">
                  <span className="text-4xl">#</span> S.O.S
                </span>{" "}
                <span className="block bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent xl:inline">
                  CUBA
                </span>
              </h1>

              <div className="md:p-0 md:mt-12 md:static">
                <h2 className="mt-4 text-xl font-extrabold text-white sm:text-4xl">
                  <span className="block text-xl bg-gradient-to-r from-blueGray-500 to-yellow-100 bg-clip-text text-transparent">
                    we need urgent
                  </span>
                  <span className="block bg-gradient-to-r from-coolGray-100 to-coolGray-300 bg-clip-text text-transparent text-2xl">
                    SUPPORT.
                  </span>
                  <span className="block bg-gradient-to-b from-sky-400 to-sky-200 bg-clip-text text-transparent text-3xl">
                    HELP.
                  </span>
                  <span className="block bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent text-4xl">
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
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  {/* small screens */}
                  <div className="md:hidden">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6">
                        {/* group of 2 */}

                        <StaticImage
                          className="w-44 h-64 rounded-lg overflow-hidden"
                          src="../images/sos_pic_4.jpg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />

                        <StaticImage
                          className="w-44 h-64 rounded-lg overflow-hidden"
                          src="../images/13-year-old-kid-dead-cuba-protests-july-2021.jpeg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />
                      </div>
                      {/* group of 3 */}
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <StaticImage
                          className="w-44 h-64 rounded-lg overflow-hidden"
                          src="../images/sos_pic_3.jpg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />

                        <StaticImage
                          className="w-44 h-64 rounded-lg overflow-hidden"
                          src="../images/sos_pic_7.jpg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />

                        <StaticImage
                          className="w-44 h-64 rounded-lg overflow-hidden"
                          src="../images/person_hospital_4.jpg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* medium and large screens */}
                  <div className="hidden md:block absolute md:left-1/2 md:top-0 md:translate-x-8 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      {/* group of 2 */}
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <StaticImage
                            className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100"
                            src="../images/sos_pic_4.jpg"
                            alt=""
                            placeholder="blurred"
                            layout="fullWidth"
                            transformOptions={{ fit: "cover" }}
                          />
                        </div>

                        <StaticImage
                          className="w-44 h-64 rounded-lg overflow-hidden"
                          src="../images/13-year-old-kid-dead-cuba-protests-july-2021.jpeg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />
                      </div>
                      {/* group of 3 */}
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6">
                        <StaticImage
                          className="w-44 h-64 rounded-lg overflow-hidden"
                          src="../images/person_hospital_4.jpg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />

                        <StaticImage
                          className="w-44 h-64 rounded-lg overflow-hidden"
                          src="../images/sos_pic_3.jpg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />

                        <StaticImage
                          className="w-44 h-64 rounded-lg overflow-hidden"
                          src="../images/sos_pic_8.jpg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />
                      </div>
                      {/* group of 2 */}
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6">
                        <StaticImage
                          className="w-44 h-64 rounded-lg overflow-hidden"
                          src="../images/sos_pic_7.jpg"
                          alt=""
                          placeholder="blurred"
                          layout="fullWidth"
                          transformOptions={{ fit: "cover" }}
                        />
                        <StaticImage
                          className="w-44 h-64 rounded-lg overflow-hidden"
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
