import asSeconds from "../src/in-seconds";

describe("library", () => {
    it("minutes function works as expected", () => {
        const result = asSeconds.minutes(2);

        expect(result).toBe(60 * 2);
    })

    it("hours function works as expected", () => {
        const result = asSeconds.hours(2);

        expect(result).toBe(60 * 60 * 2);
    })

    it("days function works as expected", () => {
        const result = asSeconds.days(2);

        expect(result).toBe(60 * 60 * 24 * 2);
    })

    it("weeks function works as expected", () => {
        const result = asSeconds.weeks(2);

        expect(result).toBe(60 * 60 * 24 * 7 * 2);
    })

    it("months function works as expected", () => {
        const result = asSeconds.months(2);

        expect(result).toBe(60 * 60 * 24 * 30 * 2);
    })

    it("years function works as expected", () => {
        const result = asSeconds.years(2);

        expect(result).toBe(60 * 60 * 24 * 365 * 2);
    })

    it("month functio with custom daysInMonth argument works as expected", () => {
        const result = asSeconds.months(2, 28);

        expect(result).toBe(60 * 60 * 24 * 28 * 2);
    })
})

