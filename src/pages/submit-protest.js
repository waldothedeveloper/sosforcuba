import React from "react"
import Layout from "../components/layout"
import "../styles/protests-form.css"
import { useProtestForm } from "../hooks/useProtest"
import { validate } from "../utils/protestFormValidation"
import ListOfCountries from "../components/list_of_countries"
import ProtestNotification from "../components/protest_notification"
import { Link } from "gatsby"
import { getToday } from "../utils/getToday"

const SubmitProtest = () => {
  const {
    values,
    handleValues,
    handleSubmit,
    handleCountry,
    errors,
    openNotification,
    dbError,
    setOpenNotification,
  } = useProtestForm(validate)

  //

  return (
    <>
      <Layout>
        <div className="bg-gray-800">
          <div className="max-w-3xl mx-auto py-32">
            <form
              className="space-y-8 divide-y divide-gray-600 mx-6"
              onSubmit={handleSubmit}
            >
              <div className="space-y-8 divide-y divide-gray-600 sm:space-y-5">
                <div>
                  <div>
                    <h3 className="text-2xl leading-6 font-medium text-gray-50">
                      Submit a Protest
                    </h3>
                    <p className="mt-2 max-w-2xl text-base text-gray-400 md:text-sm">
                      Please fill out this form and we will get in touch with
                      you to verify everything.
                    </p>
                  </div>
                </div>

                <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                  <div className="space-y-6 sm:space-y-5">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-400 sm:mt-px sm:pt-2"
                      >
                        Name
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          onChange={handleValues}
                          value={values.event_name || ""}
                          placeholder="Patria y Vida"
                          type="text"
                          name="event_name"
                          id="event-name"
                          autoComplete="given-name"
                          className="text-gray-200 bg-transparent max-w-lg block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                        />
                        <p className="mt-2 text-sm text-red-600">
                          {errors.event_name || ""}
                        </p>
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-600 sm:pt-5">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-400 sm:mt-px sm:pt-2"
                      >
                        Time <br />
                        <span className="text-gray-400 text-xs mt-2.5">
                          example: 5:12 PM
                        </span>
                      </label>

                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          onChange={handleValues}
                          value={values.time || ""}
                          className="text-gray-200 bg-transparent max-w-lg block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                          type="time"
                          id="time"
                          name="time"
                        />

                        <p className="mt-2 text-sm text-red-600">
                          {errors.time || ""}
                        </p>
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-600 sm:pt-5">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-400 sm:mt-px sm:pt-2"
                      >
                        Date
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          onChange={handleValues}
                          value={values.date || ""}
                          className="text-gray-200 bg-transparent max-w-lg block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                          type="date"
                          id="date"
                          name="date"
                          min={getToday()}
                        />
                        <p className="mt-2 text-sm text-red-600">
                          {errors.date || ""}
                        </p>
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-600 sm:pt-5">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-400 sm:mt-px sm:pt-2"
                      >
                        Country / Region
                      </label>
                      {/* list of countries */}
                      <ListOfCountries
                        selectedCountry={values.country || "Select Country"}
                        handleCountry={handleCountry}
                        errors={errors}
                      />
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-600 sm:pt-5">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-400 sm:mt-px sm:pt-2"
                      >
                        Street address
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          onChange={handleValues}
                          value={values.street_address || ""}
                          placeholder="13th Ave 148 street"
                          type="text"
                          name="street_address"
                          id="street_address"
                          autoComplete="street-address"
                          className="text-gray-200 bg-transparent block max-w-lg w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                        />
                        <p className="mt-2 text-sm text-red-600">
                          {errors.street_address || ""}
                        </p>
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-600 sm:pt-5">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-400 sm:mt-px sm:pt-2"
                      >
                        City
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          onChange={handleValues}
                          value={values.city || ""}
                          placeholder="Hialeah"
                          type="text"
                          name="city"
                          id="city"
                          className="text-gray-200 bg-transparent max-w-lg block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                        />
                        <p className="mt-2 text-sm text-red-600">
                          {errors.city || ""}
                        </p>
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-600 sm:pt-5">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-400 sm:mt-px sm:pt-2"
                      >
                        State / Province
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          onChange={handleValues}
                          value={values.state || ""}
                          placeholder="Florida"
                          type="text"
                          name="state"
                          id="state"
                          className="text-gray-200 bg-transparent max-w-lg block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                        />
                        <p className="mt-2 text-sm text-red-600">
                          {errors.state || ""}
                        </p>
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-600 sm:pt-5">
                      <label
                        htmlFor="zip"
                        className="block text-sm font-medium text-gray-400 sm:mt-px sm:pt-2"
                      >
                        ZIP / Postal
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          onChange={handleValues}
                          value={values.zipcode || ""}
                          placeholder="000-000"
                          type="text"
                          name="zipcode"
                          id="zipcode"
                          autoComplete="postal-code"
                          className="text-gray-200 bg-transparent max-w-lg block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                        />
                        <p className="mt-2 text-sm text-red-600">
                          {errors.zipcode || ""}
                        </p>
                      </div>
                    </div>

                    <div className="py-8">
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-50">
                          IMPORTANT
                        </h3>
                        <p className="mt-1 text-sm text-gray-400 max-w-md">
                          To approve and publish your protest we need to get in
                          touch with you. Please provide at least one type of
                          contact information below.
                        </p>
                      </div>
                    </div>
                    {/* email address */}
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-600 sm:pt-5">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-400 sm:mt-px sm:pt-2"
                      >
                        Email address
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          onChange={handleValues}
                          value={values.email || ""}
                          placeholder="johndoe@applesider.com"
                          id="email"
                          name="email"
                          type="text"
                          autoComplete="email"
                          className="text-gray-200 bg-transparent block max-w-lg w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                        />
                        <p className="mt-2 text-sm text-red-600">
                          {errors.email || ""}
                        </p>
                      </div>
                    </div>
                    {/* phone number */}
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-600 sm:pt-5">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-400 sm:mt-px sm:pt-2"
                      >
                        Phone Number
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          onChange={handleValues}
                          value={values.phone_number || ""}
                          placeholder="+1 (555) 987-6543"
                          id="phone_number"
                          name="phone_number"
                          type="tel"
                          autoComplete="phone-number"
                          className="text-gray-200 bg-transparent block max-w-lg w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    {/* message */}
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium sm:mt-px sm:pt-2 text-gray-400"
                      >
                        Message
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <textarea
                          onChange={handleValues}
                          value={values.message || ""}
                          id="message"
                          name="message"
                          rows={3}
                          className="text-gray-200 bg-transparent max-w-lg shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md"
                        />
                        <p className="mt-2 text-sm text-gray-500">
                          Share any relevant details about this event.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <div className="flex justify-end">
                  <Link
                    to="/protests"
                    className="bg-gray-700 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-50 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-50 bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Event
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
      <ProtestNotification
        openNotification={openNotification}
        dbError={dbError}
        setOpenNotification={setOpenNotification}
      />
    </>
  )
}

export default SubmitProtest
