import { BanIcon, CheckCircleIcon } from "@heroicons/react/outline"
/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useEffect } from "react"

import PropTypes from "prop-types"
import { Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/solid"

const ProtestNotification = ({
  openNotification,
  dbError,
  setOpenNotification,
}) => {
  useEffect(() => {
    if (openNotification) {
      setTimeout(() => {
        setOpenNotification(false)
        // console.log("settimeout ran")
      }, 15000)
    }
  }, [openNotification, setOpenNotification])

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={openNotification}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {!dbError ? (
                      <CheckCircleIcon
                        className="h-6 w-6 text-green-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <BanIcon
                        className="h-6 w-6 text-red-400"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p
                      className={
                        !dbError
                          ? "text-sm font-medium text-gray-700"
                          : "text-sm font-medium text-red-500"
                      }
                    >
                      {!dbError ? `Success!` : `Error`}
                    </p>
                    <p
                      className={
                        !dbError
                          ? "mt-1 text-sm text-gray-500"
                          : "mt-1 text-sm text-red-500"
                      }
                    >
                      {!dbError
                        ? `Thank you for your contribution. We will be in touch soon.
                      PATRIA Y VIDA!`
                        : `There was an error trying to save the protest. Please try again later!`}
                    </p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        setOpenNotification(false)
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}

export default ProtestNotification
ProtestNotification.propTypes = {
  openNotification: PropTypes.bool,
  dbError: PropTypes.object,
  setOpenNotification: PropTypes.func,
}
