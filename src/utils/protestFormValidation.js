const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

export const validate = values => {
  let errors = {}

  if (!values.event_name) {
    errors.event_name = "Please enter a name for this protest"
  }

  if (!values.time) {
    errors.time = "Please enter a time for this protest"
  }

  if (!values.date) {
    errors.date = "Please enter a date for this protest"
  }

  if (!values.country) {
    errors.country = "Please select a country for this protest"
  }

  if (!values.street_address) {
    errors.street_address = "Please enter a street address for this protest"
  }

  if (!values.city) {
    errors.city = "Please enter a city for this protest"
  }

  if (!values.state) {
    errors.state = "Please choose a state for this protest"
  }

  if (!values.zipcode) {
    errors.zipcode = "Please enter a zipcode for this protest"
  }

  if (!emailRegex.test(values.email)) {
    errors.email = "Please enter a valid email address"
  }

  return errors
}
