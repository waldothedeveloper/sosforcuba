import { useState, useEffect } from "react"
import fetch from "node-fetch"

export const useFetchVideos = () => {
  const [videos, setVideos] = useState("")

  useEffect(() => {
    fetch("/.netlify/functions/fetch-mux-videos")
      .then(res => res.json())
      .then(data => {
        console.log(`data`, data)
        setVideos(data)
      })
      .catch(err => console.log("error fetching netlify fn", err))
  }, [])

  return videos
}
