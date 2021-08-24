import React from "react"
import lottie from "lottie-web"
import { defineLordIconElement } from "lord-icon-element"

defineLordIconElement(lottie.loadAnimation({ loop: true, autoplay: true }))

const LordIcon = () => (
  <lord-icon src="https://cdn.lordicon.com/aotdpaem.json" />
)
export default LordIcon
