import { useState, useEffect } from "react"

export const useProtestForm = validate => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // callback a.k.a submit
      console.log("submit baby")
    }
  }, [errors])

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
    setIsSubmitting(true)
    setErrors(validate(values))
  }

  return { values, handleValues, handleSubmit, handleCountry, errors }
}
