import React from "react"
import InstaEmbed from "./instagramEmbed"
import PropTypes from "prop-types"
import "../styles/scrollbarHide.css"

const SocialMediaEmbedCarousel = ({ data }) => (
  <div
    id="hide-scrollbar"
    className="flex overflow-x-scroll overflow-y-hidden md:grid md:grid-cols-3 md:gap-32 md:max-w-none"
  >
    {data.map(file => (
      <div
        key={file.title}
        className="flex flex-nowrap rounded-lg md:flex-col "
      >
        <div className="flex px-2 md:flex-col">
          <div className="flex max-w-xs md:max-w-8xl">
            <InstaEmbed url={file.src} />
          </div>
          {/* <figure className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img className="w-auto h-auto object-cover" src={photo} alt="" />
          </figure> */}
        </div>
      </div>
    ))}
  </div>
)

export default SocialMediaEmbedCarousel

SocialMediaEmbedCarousel.propTypes = {
  data: PropTypes.array,
}
