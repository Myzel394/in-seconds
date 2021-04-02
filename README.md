# in-seconds

Simply convert days, weeks, months, etc. to seconds.

And that's basically it. Typescript supported.

[Also check out in-milliseconds](https://github.com/Myzel394/in-milliseconds)

```typescript
import inSeconds from "in-seconds";

inSeconds.minutes(2) // 120
inSeconds.hours(2) // 7200
inSeconds.days(5) // 432000
inSeconds.weeks(4) // 2419200
inSeconds.months(11) // 28512000
inSeconds.years(2) // 63072000
```

## Important note

`months` calculates with 30 days per month.
You can change that by passing a number for the `daysInMonth` argument
(it's the second argument).

`years` calculates with 365 days per year.
You can change that by passing a number for the `daysInYear` argument
(it's the second argument).
