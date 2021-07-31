import { useState, useEffect } from "react"
import fetch from "node-fetch"

export const useIpLookUp = () => {
  const [ipLookUp, setIpLookUp] = useState({})
  console.log("ipLookUp: ", ipLookUp)

  useEffect(() => {
    fetch(`https://api.ipregistry.co/?key=${process.env.ipregistry_key}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setIpLookUp(data)
      })
  }, [])

  return ipLookUp
}
