import moment from "moment"

export const getWeekend = () => {
  const saturdayMoment = moment().day(6)
  const sundayMoment = moment().day(7)

  const saturday = moment(saturdayMoment)
    .format("")
    .match(/(\d{4})-(\d{2})-(\d{2})/)[0]

  const sunday = moment(sundayMoment)
    .format("")
    .match(/(\d{4})-(\d{2})-(\d{2})/)[0]

  return [{ saturday: saturday }, { sunday: sunday }]
}
