import React from "react"
import PropTypes from "prop-types"

const Carousel = ({ photos }) => (
  <div className="flex overflow-x-scroll overflow-y-hidden">
    {photos.map(photo => (
      <div key={photo} className="flex flex-nowrap rounded-lg">
        <div className="inline-block px-2">
          <figure className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img className="w-auto h-auto object-cover" src={photo} alt="" />
          </figure>
        </div>
      </div>
    ))}
  </div>
)

export default Carousel

Carousel.propTypes = {
  photos: PropTypes.array.isRequired,
}
