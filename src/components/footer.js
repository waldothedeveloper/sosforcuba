import React from "react"
import { useSubscribeToProtests } from "../hooks/useSubscribeToProtests"
import { Link } from "gatsby"
import { navigation } from "../utils/footerNatigation"
import SubscribedNotification from "./subscribedNotification"

const Footer = () => {
  const {
    email,
    handleChange,
    handleSubmit,
    disableButton,
    subscribed,
    setSubscribed,
  } = useSubscribeToProtests()

  //
  return (
    <footer
      className="bg-gray-800 divide-y divide-gray-600"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
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
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
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
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
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
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
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
                    className="appearance-none block w-full bg-none bg-gray-500 border border-transparent rounded-md py-2 pl-3 pr-10 text-base text-gray-400 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
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
            <p className="text-gray-400 mt-10 text-sm">
              To get in touch please send us an email at{" "}
              <a
                href="mailto:info@sosforcuba.com"
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-300 font-medium underline"
              >
                info@sosforcuba.com
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Subscribe to protests
            </h3>
            <p className="mt-2 text-base text-gray-300">
              Get notified of upcoming protests.
            </p>
          </div>
          {/* Subscribe to our email list */}
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col lg:mt-0">
            <div className="flex max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                onChange={handleChange}
                value={email?.email_address || ""}
                type="email"
                name="email_address"
                id="email-address"
                autoComplete="email"
                className="appearance-none min-w-0 w-full bg-gray-600 border border-transparent rounded-md py-2 px-4 text-base text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-gray-400 focus:border-gray-500 focus:placeholder-gray-500 sm:max-w-xs"
                placeholder="patriayvida@example.com"
              />
              <div className="rounded-md sm:mt-0 ml-3 sm:flex-shrink-0">
                <button
                  disabled={disableButton ? true : false}
                  type="submit"
                  className={
                    disableButton
                      ? "w-full bg-gray-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-gray-500"
                      : "w-full bg-blue-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
                  }
                >
                  Subscribe
                </button>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              We care about the protection of your data. Read our{" "}
              <Link
                to="/privacy-policy"
                className="font-medium text-gray-100 underline"
              >
                Privacy Policy
              </Link>
            </p>
          </form>
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
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} SOS for Cuba. All rights reserved.
          </p>
        </div>
      </div>
      <SubscribedNotification
        subscribed={subscribed}
        setSubscribed={setSubscribed}
      />
    </footer>
  )
}

export default Footer
