import moment from "moment"

export const getToday = () => {
  const today = moment()
    .format("")
    .match(/(\d{4})-(\d{2})-(\d{2})/)[0]

  return today
}
