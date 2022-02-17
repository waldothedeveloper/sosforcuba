import { OutboundLink } from "gatsby-plugin-google-gtag"
import PropTypes from "prop-types"
import React from "react"

const GettyImages = ({ url, src }) => {
  return (
    <div
      className="getty embed image"
      style={{
        backgroundColor: "#fff",
        display: "inline-block",
        fontFamily: "Roboto,sans-serif",
        color: "#a7a7a7",
        fontSize: 11,
        width: "100%",
        maxWidth: 594,
      }}
    >
      <div style={{ padding: 0, margin: 0, textAlign: "left" }}>
        <OutboundLink
          href={url}
          target="_blank"
          style={{
            color: "#a7a7a7",
            textDecoration: "none",
            fontWeight: "normal !important",
            border: "none",
            display: "inline-block",
          }}
          rel="noreferrer"
        >
          Embed from Getty Images
        </OutboundLink>
      </div>
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          height: 0,
          padding: "63.468014% 0 0 0",
          width: "100%",
        }}
      >
        <iframe
          title="images from Getty Images related to Cuban protests on July 11th, 2021"
          src={src}
          scrolling="no"
          frameBorder={0}
          width={594}
          height={377}
          style={{
            display: "inline-block",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            margin: 0,
          }}
        />
      </div>
    </div>
  )
}

export default GettyImages

GettyImages.propTypes = {
  url: PropTypes.string,
  src: PropTypes.string,
}
