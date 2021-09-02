import moment from "moment"
export const getTomorrow = () => {
  const tomorrow = moment()
    .add(1, "days")
    .format("")
    .match(/(\d{4})-(\d{2})-(\d{2})/)[0]

  return tomorrow
}
