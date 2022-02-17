import { getToday } from "../utils/getToday"
import { getTomorrow } from "../utils/getTomorrow"
import { getWeekend } from "../utils/getWeekend"
import { useFetchProtests } from "./useFetchProtests"
import { useState } from "react"

export const useFilterProtests = () => {
  const filteredData = useFetchProtests()

  const [filterProtests, setFilterProtests] = useState(() =>
    filteredData.filter(elem => elem.node.date >= getToday())
  )

  const protestsToday = () => {
    const today = filteredData.filter(elem => elem.node.date === getToday())
    return today
  }

  const protestsTomorrow = () => {
    const tomorrow = filteredData.filter(
      elem => elem.node.date === getTomorrow()
    )

    return tomorrow
  }

  const protestsWeekend = () => {
    return getWeekend().length > 1
      ? filteredData.filter(
          elem =>
            elem.node.date === getWeekend()[0].saturday ||
            elem.node.date === getWeekend()[1].sunday
        )
      : filteredData.filter(elem => elem.node.date === getWeekend()[0].sunday)
  }

  // fns cannot be invoked before initialization, that's why this is here
  const [tabs, setTabs] = useState([
    { name: "All", count: filterProtests.length, current: true },
    { name: "Today", count: protestsToday().length, current: false },
    { name: "Tomorrow", count: protestsTomorrow().length, current: false },
    { name: "This weekend", count: protestsWeekend().length, current: false },
  ])

  const setActiveTab = name => {
    const newTabsState = tabs
    newTabsState.forEach(elem => {
      if (elem.name !== name) {
        elem.current = false
      } else {
        elem.current = true
      }
    })
    setTabs(newTabsState)
  }

  //
  const handleChange = name => {
    if (name === "Today" || name?.target?.value === "Today") {
      setFilterProtests(protestsToday())
      setActiveTab(name === "Today" ? name : name.target.value)
    }

    if (name === "Tomorrow" || name?.target?.value === "Tomorrow") {
      setFilterProtests(protestsTomorrow())
      setActiveTab(name === "Tomorrow" ? name : name.target.value)
    }

    if (name === "This weekend" || name?.target?.value === "This weekend") {
      setFilterProtests(protestsWeekend())
      setActiveTab(name === "This weekend" ? name : name.target.value)
    }

    if (name === "All" || name?.target?.value === "All") {
      setFilterProtests(
        filteredData.filter(elem => elem.node.date >= getToday())
      )
      setActiveTab(name === "All" ? name : name.target.value)
    }
  }

  return {
    tabs,
    filterProtests,
    handleChange,
  }
}
