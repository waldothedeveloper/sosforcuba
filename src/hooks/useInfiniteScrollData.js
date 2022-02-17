import React, { useEffect, useState } from "react"

export const useInfiniteScrollData = bigArray => {
  const [hasMore, setHasMore] = useState(true)
  const [data, setData] = React.useState([])

  // get the first 6 elements when this component mounts
  useEffect(() => {
    const slicedData = bigArray.slice(0, 60)
    setData(slicedData)
    return () => {
      setData([])
    }
  }, [bigArray])

  // get more data
  const fetchMoreData = () => {
    if (data.length >= bigArray.length) {
      setHasMore(false)
    }

    // fetch more
    const moreData = bigArray.slice(data.length, data.length * 2)
    const newData = data.concat(moreData)
    setData(newData)
  }

  return { data, hasMore, fetchMoreData }
}
