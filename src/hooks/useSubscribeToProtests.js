import { useEffect, useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
const emailValidation =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const useSubscribeToProtests = () => {
  const [email, setEmail] = useState({ email_address: "" })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [disableButton, setDisableButton] = useState(true)
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    const validEmail = emailValidation.test(email.email_address)

    if (!validEmail) {
      setErrors({ msg: "Please enter a valid email address" })
      setDisableButton(true)
    } else {
      setDisableButton(false)
      setErrors({})
      setIsSubmitting(true)
    }
  }, [email])

  const handleChange = event => {
    if (event) event.persist()
    const name = event.target.name
    const value = event.target.value

    setEmail(oldState => ({
      ...oldState,
      [name]: value,
    }))
  }

  const handleSubmit = event => {
    if (event) event.preventDefault()

    if (isSubmitting && Object.keys(errors).length === 0 && !disableButton) {
      addToMailchimp(email.email_address).then(data => {
        setSubscribed(true)
        setEmail({ email_address: "" })
      })
    }
  }

  return {
    email,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    disableButton,
    subscribed,
    setSubscribed,
  }
}
