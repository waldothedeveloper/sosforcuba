import { Link } from "gatsby"
import React from "react"
import { navigation } from "../utils/footerNatigation"

const Footer = () => {
  //
  return (
    <footer
      className="divide-y divide-gray-600 bg-gray-800"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Events
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.events.map(item => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Protests
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.protests.map(item => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Human Rights
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.human_rights.map(item => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.impact.map(item => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Language (coming soon...)
            </h3>
            <form className="mt-4 sm:max-w-xs">
              <fieldset className="w-full">
                <label htmlFor="language" className="sr-only">
                  Language
                </label>
                <div className="relative">
                  <select
                    // SEE THIS? YOU NEED TO DELETE THE DISABLED SO YOU CAN USE THE FORM ONCE YOU IMPLEMENT I18N
                    disabled={true}
                    id="language"
                    name="language"
                    className="block w-full appearance-none rounded-md border border-transparent bg-gray-500 bg-none py-2 pl-3 pr-10 text-base text-gray-400 focus:border-white focus:outline-none focus:ring-white sm:text-sm"
                    defaultValue="English"
                  >
                    <option>English</option>
                    <option>French</option>
                    <option>German</option>
                    <option>Japanese</option>
                    <option>Spanish</option>
                  </select>
                  {/* DO NOT DELETE THIS!!!! */}
                  {/* <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                    <ChevronDownIcon
                      className="h-4 w-4 text-gray-400"
                      aria-hidden="true"
                    />
                  </div> */}
                </div>
              </fieldset>
            </form>
            <p className="mt-10 text-sm text-gray-400">
              To get in touch please send us an email at{" "}
              <a
                href="mailto:info@sosforcuba.com"
                rel="noopener noreferrer"
                target="_blank"
                className="font-medium text-gray-300 underline"
              >
                info@sosforcuba.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map(item => (
              <Link
                to={item.href}
                key={item.name}
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} SOS for Cuba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
