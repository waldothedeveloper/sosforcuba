import * as React from "react"
import PropTypes from "prop-types"
import NavBar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
