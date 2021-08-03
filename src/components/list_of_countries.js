import React, { Fragment } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import useCountries from "../hooks/useCountries"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { classNames } from "../utils/classNames"
import { useInfiniteScrollData } from "../hooks/useInfiniteScrollData"
import "../styles/scrollbarHide.css"
import PropTypes from "prop-types"

const ListOfCountries = ({ handleCountry, errors, selectedCountry }) => {
  const { countries } = useCountries()
  const { data, hasMore, fetchMoreData } = useInfiniteScrollData(countries)

  //
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-transparent text-sm font-medium text-gray-300 focus:outline-none">
              {selectedCountry}
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
            <p className="mt-2 text-sm text-red-600 flex items-center justify-center">
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
              className="origin-top-right absolute left-0 mt-2 w-80 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
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
                    <div key={country.numericCode} className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="button"
                            onClick={() => {
                              handleCountry(country.name)
                            }}
                            className={classNames(
                              active
                                ? "bg-gray-600 text-gray-100"
                                : "text-gray-300",
                              "group flex items-center px-4 py-2 text-sm w-full truncate"
                            )}
                          >
                            <img
                              className="mr-3 h-5 w-5"
                              src={country.flag}
                              alt="country flag"
                            />
                            {country.name}
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
