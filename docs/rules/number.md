# Number Validation

These validation rules are specifically designed for numbers. They allow you to verify whether a numeric value satisfies certain conditions. Here is a detailed description of each rule and examples of practical usage:

## `min` Rule

The `min` rule allows you to check if a number is greater than or equal to a specified minimum value.

**Usage:** Use this rule to ensure that a number entered by the user is greater than or equal to a required minimum value.

**Example:**
```html
<input qv-rules="min:2"/>
```

This rule checks if the input value is at least 2. If the value is a number, it performs a numeric comparison. If the value is a string, it verifies whether the number of characters is greater than or equal to 2.

## `max` Rule

The `max` rule allows you to check if a number is less than or equal to a specified maximum value.

**Usage:** Use this rule to ensure that a number entered by the user is less than or equal to a required maximum value.

**Example:**
```html
<input qv-rules="max:20"/>
```

This rule checks if the input value is at most 20. If the value is a number, it performs a numeric comparison. If the value is a string, it verifies whether the number of characters is less than or equal to 20.

## `integer` Rule

The `integer` rule allows you to check if a number is an integer.

**Usage:** Use this rule to ensure that a number entered by the user is an integer.

**Example:**
```html
<input qv-rules="integer"/>
```

This rule checks if the input value is an integer. It returns `true` if the value is an integer, and `false` otherwise.

## `number` Rule

The `number` rule allows you to check if a value is a number.

**Usage:** Use this rule to ensure that a value entered by the user is a number.

**Example:**
```html
<input qv-rules="number"/>
```

This rule checks if the input value is a number. It returns `true` if the value is a number, and `false` otherwise.

## `modulo` Rule

The `modulo` rule, also known as its alias `mod`, allows you to check if a number is a multiple or divisible by another number.

**Usage:** Use this rule to verify whether a number is a multiple or divisible by another number.

**Example:**
```html
<input qv-rules="modulo:2"/>
<input qv-rules="mod:2"/>
```

This rule checks if the input value is a number and if it is a multiple or divisible by 2. It returns `true` if the condition is met, and `false` otherwise.

---

If you would like to contribute by adding your own validation rule, you can visit [this link](/docs/contribution).