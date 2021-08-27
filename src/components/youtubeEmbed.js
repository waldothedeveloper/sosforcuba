import React from "react"
import PropTypes from "prop-types"

const YoutubeEmbed = ({ embedId }) => (
  <div className="relative" style={{ paddingBottom: `56.25%` }}>
    <iframe
      // height="597"
      className="absolute inset-0 w-full h-full"
      src={`https://www.youtube.com/embed/${embedId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
)

export default YoutubeEmbed

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
}
