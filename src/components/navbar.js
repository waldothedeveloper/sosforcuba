/* eslint-disable react/display-name */
import React from "react"
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
// import sos_cuba_logo from "../images/sos_for_cuba_logo.jpg"
import { classNames } from "../utils/classNames"
import { Link } from "gatsby"

import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/react/outline"
import { ChevronDownIcon } from "@heroicons/react/solid"

const solutions = [
  {
    name: "Events on July 11, 2021",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/events-on-july-11-2021",
    icon: InboxIcon,
  },
  {
    name: "Cuban Government Response",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/cuban-gov-response",
    icon: AnnotationIcon,
  },
  {
    name: "Internet ban",
    description: "Your customers' data will be safe and secure.",
    href: "/internet-ban",
    icon: ChatAlt2Icon,
  },
  {
    name: "Detained people",
    description: "Connect with third-party tools that you're already using.",
    href: "/detained-people",
    icon: QuestionMarkCircleIcon,
  },
]

const NavBar = () => {
  return (
    <header>
      <Popover className="relative bg-gray-800">
        {({ open }) => (
          <>
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link to="/">
                  <span className="bg-gradient-to-r from-sky-500 via-gray-300 to-red-500 bg-origin-border font-extrabold text-xl bg-clip-text text-transparent">
                    S.O.S <span className="">CUBA</span>
                  </span>
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-300" : "text-gray-400",
                          "group inline-flex rounded-md items-center text-base font-medium hover:text-gray-300 focus:outline-none"
                        )}
                      >
                        <span>Events</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-300" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-300"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-gray-700 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                              {solutions.map(item => (
                                <Link
                                  to={item.href}
                                  key={item.name}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-500 group"
                                >
                                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gray-600 text-gray-400 sm:h-12 sm:w-12">
                                    <item.icon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-300 group-hover:text-gray-50">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-400 group-hover:text-gray-100">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <Link
                  to="/protests"
                  className="text-base font-medium text-gray-400 hover:text-gray-300"
                >
                  Protests
                </Link>
                <Link
                  to="/human-rights-violations-in-cuba"
                  className="text-base font-medium text-gray-400 hover:text-gray-300"
                >
                  Human Rights
                </Link>
                {/* <Link
                  to="/"
                  className="text-base font-medium text-gray-400 hover:text-gray-300"
                >
                  Legal
                </Link> */}
              </Popover.Group>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Link
                  to="/help-center"
                  className="whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-red-800 px-4 py-2 rounded-md text-base font-medium text-gray-50"
                >
                  Donate
                </Link>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-sky ring-opacity-5 bg-gray-700 divide-y-2 divide-gray-800">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="sr-only">S.O.S for Cuba</span>
                        <span className="bg-gradient-to-r from-sky-500 via-gray-300 to-red-500 bg-origin-border font-extrabold text-xl bg-clip-text text-transparent">
                          S.O.S CUBA
                        </span>
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-gray-300 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid grid-cols-1 gap-7">
                        {solutions.map(item => (
                          <Link
                            to={item.href}
                            key={item.name}
                            className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gray-600 text-gray-400">
                              <item.icon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-4 text-base font-medium text-gray-300">
                              {item.name}
                            </div>
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5">
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        to="/protests"
                        className="text-base font-medium text-gray-300 hover:text-gray-400"
                      >
                        Protests
                      </Link>
                      <Link
                        to="/human-rights-violations-in-cuba"
                        className="text-base font-medium text-gray-300 hover:text-gray-400"
                      >
                        Human Rights
                      </Link>
                      {/* <Link
                        to="/"
                        className="text-base font-medium text-gray-300 hover:text-gray-400"
                      >
                        Legal
                      </Link> */}
                    </div>
                    <div className="mt-6">
                      <Link
                        to="/help-center"
                        className="w-full flex items-center justify-center bg-gradient-to-r from-red-500 to-red-800 bg-origin-border px-4 py-2 rounded-md text-base font-medium text-gray-50"
                      >
                        Donate
                      </Link>
                      <p className="mt-6 text-center text-xl font-bold bg-gradient-to-r from-sky-500 via-gray-300 to-red-500 bg-origin-border bg-clip-text text-transparent">
                        PATRIA Y VIDA
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </header>
  )
}
export default NavBar
