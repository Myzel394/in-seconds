export const minutes = (minutes: number): number => minutes * 60;
export const hours = (hours: number): number => hours * 60 * 60;
export const days = (days: number): number => days * 60 * 60 * 24;
export const weeks = (weeks: number): number => weeks * 60 * 60 * 24 * 7;
export const months = (months: number, daysInMonth = 30): number => months * 60 * 60 * 24 * daysInMonth;
export const years = (years: number, daysInYear = 365): number => years * 60 * 60 * 24 * daysInYear;

export default {
    minutes,
    hours,
    days,
    weeks,
    months,
    years
}
