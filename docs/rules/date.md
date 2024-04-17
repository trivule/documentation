---
sidebar_position: 8
---
# Date Validation

The following rules are used to validate dates. These rules allow you to verify whether an input is a valid date, compare dates, and check if a date falls within a specific range.

### Rule: `date`

This rule checks if the input is a valid date.

```html
<input type="date" data-tv-rules="date" />
```

- Usage: Use this rule to ensure that the user enters a valid date in a date input field.

### Rule: `before`

This rule checks if the entered date is before a specified date.

```html
<input type="date" data-tv-rules="before:2020-11-11" />
```

- Usage: This rule is useful when you want to ensure that the user selects a date earlier than a specified date.

### Rule: `after`

This rule checks if the entered date is after a specified date.
 
```html
<input type="date" data-tv-rules="after:now" />
```

- Usage: Use this rule to ensure that the user selects a date later than the current date.

### Rule: `dateBetween`

This rule checks if the entered date falls between two other dates.

```html
<input type="date" data-tv-rules="dateBetween:2020-11-11,now" />
```

- Usage: This rule is useful when you want to validate whether a date is within a specific date range.

### Rule: `time`

This rule checks if the entered time is in the 24-hour format.

```html
<input type="time" data-tv-rules="time" />
```

- Usage: Use this rule to validate time input fields, ensuring that the user enters a valid time in the 24-hour format.

---

Feel free to contribute your own custom rules to the library by visiting the page [/docs/contribution](/docs/contribution).

We hope this documentation helps you understand and use the date validation rules provided by Trivule.