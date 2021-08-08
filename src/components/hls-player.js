import React, { useEffect, useRef } from "react"
import Hls from "hls.js"
import PropTypes from "prop-types"

const HLSVideoPlayer = source => {
  const { url } = source

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
  }, [videoRef, url])

  return (
    <video
      className="object-cover shadow-lg rounded-lg"
      controls
      ref={videoRef}
      // poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
    />
  )
}

export default HLSVideoPlayer
HLSVideoPlayer.propTypes = {
  source: PropTypes.string,
}
