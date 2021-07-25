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
    <InfiniteScroll
      dataLength={data.length} //This is important field to render the next data
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      height={288}
    >
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 relative">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider sticky top-0"
                    >
                      FullName
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider sticky top-0"
                    >
                      Date of detention
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.map((person, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                        {" "}
                        {person.first_name} {person.lastname}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {person.date_of_arrest}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="px-1">
        <ul className="divide-y divide-gray-200 overflow-y-auto">
          {data.map((person, id) => (
            <li key={id} className="py-4">
              <div className="flex space-x-3">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-50">
                      {person.first_name} {person.lastname}
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
      </div> */}
    </InfiniteScroll>
  )
}

export default PeopleDetained
