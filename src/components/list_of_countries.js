import "../styles/scrollbarHide.css"

import { Menu, Transition } from "@headlessui/react"
import React, { Fragment } from "react"

import { ChevronDownIcon } from "@heroicons/react/solid"
import InfiniteScroll from "react-infinite-scroll-component"
import PropTypes from "prop-types"
import { classNames } from "../utils/classNames"
import { compare } from "../utils/compare"
import useCountries from "../hooks/useCountries"
import { useInfiniteScrollData } from "../hooks/useInfiniteScrollData"

const ListOfCountries = ({ handleCountry, errors, selectedCountry }) => {
  const countries = useCountries()
  const sortedCountries = countries.sort(compare)
  const { data, hasMore, fetchMoreData } =
    useInfiniteScrollData(sortedCountries)

  //

  // return <div>TEST</div>
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-gray-300 shadow-sm focus:outline-none">
              {selectedCountry}
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
            <p className="mt-2 flex items-center justify-center text-sm text-red-600">
              {errors.country || ""}
            </p>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="absolute left-0 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <InfiniteScroll
                dataLength={data.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4 className="text-white">Loading...</h4>}
                height={288}
              >
                <div id="hide-scrollbar">
                  {data.map(country => (
                    <div key={country.ccn3} className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="button"
                            onClick={() => {
                              handleCountry(country.name.official)
                            }}
                            className={classNames(
                              active
                                ? "bg-gray-600 text-gray-100"
                                : "text-gray-300",
                              "group flex w-full items-center truncate px-4 py-2 text-sm"
                            )}
                          >
                            {/* <img
                              className="mr-3 h-5 w-5"
                              src={country.flag}
                              alt="country flag"
                            /> */}
                            {country.name.official}
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  ))}
                </div>
              </InfiniteScroll>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default ListOfCountries
ListOfCountries.propTypes = {
  handleCountry: PropTypes.func,
  errors: PropTypes.object,
  selectedCountry: PropTypes.string,
}
