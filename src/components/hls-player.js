import React, { useEffect, useRef } from "react"
import Hls from "hls.js"
import PropTypes from "prop-types"

const HLSVideoPlayer = props => {
  const { url, poster } = props

  const videoRef = useRef(null)

  useEffect(() => {
    let hls
    if (videoRef.current) {
      const video = videoRef.current

      if (url) {
        if (video.canPlayType("application/vnd.apple.mpegurl")) {
          // Some browers (safari and ie edge) support HLS natively
          video.src = url
        } else if (Hls.isSupported()) {
          // This will run in all other modern browsers
          hls = new Hls()
          hls.loadSource(url)
          hls.attachMedia(video)
        } else {
          console.error("This is a legacy browser that doesn't support MSE")
        }
      }
    }

    return () => {
      if (hls) {
        hls.destroy()
      }
    }
  }, [videoRef, url, poster])

  return (
    <video
      className="shadow-lg rounded-lg w-full h-full"
      controls
      ref={videoRef}
      poster={poster}
    />
  )
}

export default HLSVideoPlayer
HLSVideoPlayer.propTypes = {
  url: PropTypes.string,
  poster: PropTypes.string,
}
