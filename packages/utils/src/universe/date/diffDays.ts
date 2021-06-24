/**
 * calculate the number of days between two dates
 * @param firstDate
 * @param secondDate
 */
const diffDays = (firstDate: number, secondDate: number) => Math.ceil(Math.abs(firstDate - secondDate) / (1000 * 60 * 60 * 24));

export default diffDays;