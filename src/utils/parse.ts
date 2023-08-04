export function getStartOfDayString(distance: number) {
  const date = new Date()
  date.setDate(date.getDate() - distance)
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}
