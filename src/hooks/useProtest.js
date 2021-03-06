import { useEffect, useState } from "react"

import { saveProtestInDB } from "../config/faunadb"

export const useProtestForm = validate => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openNotification, setOpenNotification] = useState(false)
  const [dbError, setDbError] = useState(null)

  useEffect(() => {
    const data = {
      approved: "pending",
      name: values.event_name,
      time: values.time,
      date: values.date,
      address: {
        country: values.country,
        street_address: values.street_address,
        city: values.city,
        state: values.state,
        zipcode: values.zipcode,
      },
      contact: {
        email: values.email,
        phone_number: values.phone_number,
        message: values.message,
      },
    }

    if (
      Object.keys(errors).length === 0 &&
      isSubmitting &&
      Object.keys(values).length !== 0
    ) {
      //! save the protest in the fauna dababase
      saveProtestInDB({ data })
        .then(ret => {
          setValues({})
          setIsSubmitting(false)
          setOpenNotification(true)
        })
        .catch(err => {
          setOpenNotification(true)
          setDbError(err)
          setIsSubmitting(false)
        })
    }
  }, [errors, isSubmitting, values])

  const handleCountry = country => {
    if (country.length > 0) {
      setValues(oldState => ({
        ...oldState,
        country,
      }))
    }
  }

  const handleValues = event => {
    if (event) event.persist()

    const name = event.target.name
    const value = event.target.value
    setValues(oldState => ({
      ...oldState,
      [name]: value,
    }))
  }

  const handleSubmit = event => {
    if (event) event.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  return {
    values,
    handleValues,
    handleSubmit,
    handleCountry,
    errors,
    openNotification,
    dbError,
    setOpenNotification,
  }
}
