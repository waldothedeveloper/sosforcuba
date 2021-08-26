import React from "react"
import protests_map_july_11 from "../images/protests-map-july-11.png"
import san_antonio from "../images/san-antonio-de-los-banos.png"
import YoutubeEmbed from "../components/youtubeEmbed"
import Layout from "../components/layout"
import HLSVideoPlayer from "../components/hls-player"

const EventsOnJuly_11_2021 = () => {
  return (
    <Layout>
      <div className="py-32 prose prose-red prose-lg text-gray-300 mx-auto max-w-sm px-4 md:px-0 md:max-w-4xl">
        <div className="text-lg">
          <h1>
            <span className="block text-base text-center text-red-600 font-semibold tracking-wide uppercase">
              July 11, 2021
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
              Events
            </span>
          </h1>
        </div>
        {/* section 1 */}
        <div className="mt-12 prose prose-red prose-lg text-gray-300 mx-auto max-w-4xl">
          <p className="mt-8 leading-8">
            On Sunday July 11, 2021, a large group of people took the streets on{" "}
            <span className="text-yellow-400 underline">
              San Antonio de los Baños
            </span>{" "}
            a province of Havana the capital, to protest, chanting
            &ldquo;Freedom&rdquo;, &ldquo;Homeland & Life&rdquo;, and &ldquo;We
            are not afraid&rdquo;.
          </p>

          <img
            className="w-full h-80 object-cover rounded-md"
            src={san_antonio}
            alt="map of Cuba showing the different places of protests reported on july 11, 2021"
          />

          <p className="mt-8 leading-8">
            Within hours, more groups of people also joined the protests in
            additional provinces of Cuba.
          </p>

          {/* camaguey */}
          <div>
            <p>Such as Camaguey...</p>
            <div className="aspect-w-16 aspect-h-9">
              <HLSVideoPlayer
                url="https://stream.mux.com/UtRXCpJYMJqvEPWluAwlLy3ve2kAjqb016yVRrij02W7s.m3u8"
                poster="https://image.mux.com/UtRXCpJYMJqvEPWluAwlLy3ve2kAjqb016yVRrij02W7s/thumbnail.png?width=1920&height=1080&fit_mode=pad"
              />
            </div>
          </div>

          {/* las Tunas */}
          <div className="mt-12">
            <p>Las Tunas</p>
            <div className="aspect-w-16 aspect-h-9">
              <HLSVideoPlayer
                url="https://stream.mux.com/gaWnpfKC8gAHwayjoXzJO9ci2KqD01r4YTH8Exju63eA.m3u8"
                poster="https://image.mux.com/gaWnpfKC8gAHwayjoXzJO9ci2KqD01r4YTH8Exju63eA/thumbnail.png?width=1920&height=1080&fit_mode=pad"
              />
            </div>
          </div>

          {/* Ciego de Avila */}
          <div className="mt-12">
            <p>Ciego de Avila</p>
            <div className="aspect-w-16 aspect-h-9">
              <HLSVideoPlayer
                url="https://stream.mux.com/zW4qlyd58ZMbwCuNin8YCxIGlFlfvbDIKT7vBxCAPi00.m3u8"
                poster="https://image.mux.com/zW4qlyd58ZMbwCuNin8YCxIGlFlfvbDIKT7vBxCAPi00/thumbnail.png?width=1920&height=1080&fit_mode=pad"
              />
            </div>
          </div>

          {/* Pinar del Rio */}
          <div className="mt-12">
            <p>Pinar del Rio...and many more</p>
            <div className="aspect-w-16 aspect-h-9">
              <HLSVideoPlayer
                url="https://stream.mux.com/V01zretkHryYQz7CtiV97TmPCwW013BMNOch1dgAOVYe8.m3u8"
                poster="https://image.mux.com/V01zretkHryYQz7CtiV97TmPCwW013BMNOch1dgAOVYe8/thumbnail.png?width=1920&height=1080&fit_mode=pad"
              />
            </div>
          </div>

          <p className="pt-12">
            In the blink of an eye, different protests were happening at the
            same time in more than 91 places on the island...
          </p>

          <img
            className="w-full h-80 object-cover rounded-md"
            src={protests_map_july_11}
            alt="map of Cuba showing the different places of protests reported on july 11, 2021"
          />
          <p className="text-sm text-gray-400">
            A detailed google map project with the locations of the protests can
            be found{" "}
            <a
              style={{ color: "#dc2626" }}
              className="underline"
              target="_blank"
              href="https://www.google.com/maps/d/viewer?mid=1AQAArlWutvq3eqA2nK_WObSujttknlxZ&ll=20.98490578549235%2C-78.96322176357974&z=6"
              rel="noreferrer noopener"
            >
              here
            </a>
            .
          </p>

          <p>
            The majority of the protests -if not all- were peacefully initiated.
            No one in Cuba -by law- is allowed to carry firearms or any other
            type of weapon. To be accurate, it&apos;s no one except
          </p>
          <blockquote className="py-12">
            <p>the government, military personnel, and the national police.</p>
          </blockquote>
        </div>
      </div>
    </Layout>
  )
}

export default EventsOnJuly_11_2021
