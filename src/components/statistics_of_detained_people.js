import React from "react"
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid"
import {
  CursorClickIcon,
  MailOpenIcon,
  UsersIcon,
} from "@heroicons/react/outline"

const stats = [
  {
    id: 1,
    name: "People Detained",
    stat: "557",
    icon: UsersIcon,
    change: "122",
    changeType: "increase",
  },
  {
    id: 2,
    name: "People Missing",
    stat: "699",
    icon: MailOpenIcon,
    change: "5.4%",
    changeType: "increase",
  },
  {
    id: 3,
    name: "People Freed",
    stat: "142",
    icon: CursorClickIcon,
    change: "3.2%",
    changeType: "decrease",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const StatisticsOfDetainedPeople = () => {
  return (
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Last 30 days
      </h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map(item => (
          <div
            key={item.id}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-blue-500 rounded-md p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {item.stat}
              </p>
              <p
                className={classNames(
                  item.changeType === "increase"
                    ? "text-green-600"
                    : "text-red-600",
                  "ml-2 flex items-baseline text-sm font-semibold"
                )}
              >
                {item.changeType === "increase" ? (
                  <ArrowSmUpIcon
                    className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowSmDownIcon
                    className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">
                  {item.changeType === "increase" ? "Increased" : "Decreased"}{" "}
                  by
                </span>
                {item.change}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
export default StatisticsOfDetainedPeople
