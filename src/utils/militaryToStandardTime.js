export const militaryToStandard = time => {
  const [hours, minutes] = time.split(":")

  if (parseInt(hours) < 12 || parseInt(hours) === 24) {
    return `${hours === 0 || hours === 24 ? 12 : hours}:${minutes} am`
  } else {
    return `${hours % 12 === 0 ? 12 : hours % 12}:${minutes} pm`
  }
}
