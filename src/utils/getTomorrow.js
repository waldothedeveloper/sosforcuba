export const getTomorrow = () => {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(0, 0, 0, 0)

  //
  let month = (tomorrow.getMonth() + 1).toString()
  let day = tomorrow.getDate().toString()

  //

  if (month.length < 2) {
    month = `0${month}`
  }

  if (day.length < 2) {
    day = `0${day}`
  }

  return `${tomorrow.getFullYear()}-${month}-${day}`
}
