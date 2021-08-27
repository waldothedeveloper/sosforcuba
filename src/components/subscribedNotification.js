import React, { Fragment } from "react"
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline"
import { Transition } from "@headlessui/react"
import PropTypes from "prop-types"

const SubscribedNotification = ({ subscribed, setSubscribed }) => {
  //
  return (
    <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5">
      <Transition
        show={subscribed}
        as={Fragment}
        enter="transform ease-out duration-300 transition"
        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="p-2 rounded-lg bg-gradient-to-r from-sky-400 to-cyan-300 shadow-lg sm:p-3">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-sky-500">
                  <SpeakerphoneIcon
                    className="h-6 w-6 text-gray-100"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-3 font-medium text-gray-100 truncate">
                  <span className="md:hidden">Thanks for subscribing!</span>
                  <span className="hidden md:inline">
                    Patria y Vida! Thanks for subscribing!
                  </span>
                </p>
              </div>

              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                <button
                  onClick={() => setSubscribed(false)}
                  type="button"
                  className="-mr-1 flex p-2 rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="sr-only">Dismiss</span>
                  <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}
export default SubscribedNotification

SubscribedNotification.propTypes = {
  subscribed: PropTypes.bool,
  setSubscribed: PropTypes.func,
}
