export const minutes = (minutes: number): number => minutes * 60;
export const hours = (hours: number): number => hours * 60 * 60;
export const days = (days: number): number => days * 60 * 60 * 24;
export const weeks = (weeks: number): number => weeks * 60 * 60 * 24 * 7;
export const months = (months: number): number => months * 60 * 60 * 24 * 30;
export const years = (years: number): number => years * 60 * 60 * 24 * 365;

export default {
    minutes,
    hours,
    days,
    weeks,
    months,
    years
}
