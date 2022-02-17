import PropTypes from "prop-types"
import React from "react"
import { classNames } from "../utils/classNames"

const ProtestFilter = ({ tabs, handleChange }) => {
  return (
    <div className="my-12">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          value={tabs.find(tab => tab.current).name}
          onChange={event => handleChange(event)}
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-600 bg-gray-600 py-2 pl-3 pr-10 text-base  text-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        >
          {tabs.map(tab => (
            <option value={tab.name} key={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map(tab => (
              <button
                key={tab.name}
                onClick={() => handleChange(tab.name)}
                className={classNames(
                  tab.current
                    ? "border-gray-200 text-gray-50"
                    : "group border-transparent text-gray-500 hover:border-gray-100 hover:text-gray-300",
                  "flex cursor-pointer whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
                {tab.count ? (
                  <span
                    className={classNames(
                      tab.current
                        ? "bg-sky-100 text-sky-600"
                        : "bg-gray-600 text-gray-400",
                      "ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium hover:bg-gray-500 hover:text-gray-300 md:inline-block"
                    )}
                  >
                    {tab.count}
                  </span>
                ) : null}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default ProtestFilter
ProtestFilter.propTypes = {
  tabs: PropTypes.array,
  handleChange: PropTypes.func,
}
