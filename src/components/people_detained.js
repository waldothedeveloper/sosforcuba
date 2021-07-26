import React from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { list_of_detained_people } from "../utils/detained_people"
import { useState, useEffect } from "react"

const PeopleDetained = () => {
  const [hasMore, setHasMore] = useState(true)
  const [data, setData] = React.useState([])

  useEffect(() => {
    const slicedData = list_of_detained_people.slice(0, 6)

    setData(slicedData)
    return () => {
      setData([])
    }
  }, [])

  const fetchMoreData = () => {
    if (data.length >= list_of_detained_people.length) {
      setHasMore(false)
    }

    // fetch more
    const moreData = list_of_detained_people.slice(data.length, data.length * 2)
    // console.log("moreData: ", moreData)

    const newData = data.concat(moreData)
    setData(newData)
  }

  return (
    <div className="my-12">
      <div className="flex items-center justify-between text-gray-400 mt-3 mb-2">
        <p>Full Name</p>
        <p>Date of Detention</p>
      </div>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        height={288}
      >
        <div className="px-1">
          <ul className="divide-y divide-gray-200 overflow-y-auto">
            {data.map((person, id) => (
              <li key={id} className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-50">
                        {id + 1}. {person.first_name} {person.lastname}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {person.date_of_arrest}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </InfiniteScroll>

      <span className="mt-12 text-gray-400 text-sm">
        Although every effort is put into keeping this list updated, you can
        find the latest updates for missing or detained people{" "}
        <a
          className="text-yellow-400 underline font-medium"
          href="https://www.facebook.com/centrodedenunciasFDP"
          target="_blank"
          rel="noopener noreferrer"
        >
          here.
        </a>
      </span>
    </div>
  )
}

export default PeopleDetained
