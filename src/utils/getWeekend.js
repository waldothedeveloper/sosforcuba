import { monthAndDay } from "./getMonthAndDay"

export const getWeekend = () => {
  const currDate = new Date()
  const currDay = currDate.getDay()

  const first = currDate.getDate() - currDate.getDay() // First day is the day of the month - the day of the week
  const last = first + 6 // last day is the first day + 6
  const firstday = new Date(currDate.setDate(first))
  const lastday = new Date(currDate.setDate(last))
  // this is technically the first day of the next week on the calendar
  const nextSunday = new Date(
    firstday.getFullYear(),
    firstday.getMonth(),
    firstday.getDate() + 7
  )

  if (currDay === 0) {
    return [{ sunday: `${firstday.getFullYear()}-${monthAndDay(currDate)}` }]
  } else {
    return [
      { saturday: `${lastday.getFullYear()}-${monthAndDay(currDate)}` },
      { sunday: `${nextSunday.getFullYear()}-${monthAndDay(nextSunday)}` },
    ]
  }
}
