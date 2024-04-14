---
sidebar_position: 5
---
# Validation of Strings

These rules are specifically designed for string validation. They allow you to verify different aspects of a string such as length, format, and more. Here's a detailed description of each rule and practical usage examples:

## `email` Rule

The `email` rule validates an email address.

**Usage:** Use this rule to ensure that an email address entered by the user is valid.

**Example:**
```html
<input data-qv-rules="email" />
<!-- Validates an email address -->
```

In this example, the `email` rule validates the entered email address by checking if it matches the format of a valid email address.

---

## `minlength` Rule

The `minlength` rule validates the minimum length of a string.

**Usage:** Use this rule to ensure that a string entered by the user has a specified minimum length.

**Example:**
```html
<input data-qv-rules="minlength:8" />
<!-- Validates a string with a minimum length of 8 -->
```

In this example, the `minlength` rule validates the string by checking if its length is greater than or equal to 8.
 

## `maxlength` Rule

The `maxlength` rule validates the maximum length of a string.

**Usage:** Use this rule to ensure that a string entered by the user has a specified maximum length.

**Example:**
```html
<input data-qv-rules="maxlength:8" />
<!-- Validates a string with a maximum length of 8 -->
```

In this example, the `maxlength` rule validates the string by checking if its length is less than or equal to 8.

---

## `url` Rule

The `url` rule validates a URL.

**Usage:** Use this rule to ensure that a URL entered by the user is valid.

**Example:**
```html
<input data-qv-rules="url" />
<!-- Validates a URL -->
```

In this example, the `url` rule validates the entered URL by checking if it matches the format of a valid URL.

---

## `startWithUpper` Rule

The `startWithUpper` rule verifies if a string starts with an uppercase letter.

**Usage:** Use this rule to ensure that a string entered by the user starts with an uppercase letter.

**Example:**
```html
<input data-qv-rules="startWithUpper" />
<!-- Verifies if a string starts with an uppercase letter -->
```

In this example, the `startWithUpper` rule checks if the entered string starts with an uppercase letter.

---

## `lower` Rule

The `lower` rule verifies if the entered data consists of only lowercase letters.

**Usage:** Use the `lower` rule when you want to ensure that a given input string consists only of lowercase letters.

**Example:**
```html
<input data-qv-rules="lower" />
```

This rule ensures that the value entered in the input field is entirely in lowercase. If the input contains uppercase letters, the validation will fail.

In this example, the `lower` rule is used to validate the username field in a registration form. The `data-qv-rules` attribute is set to `"lower"` to apply the rule. Any input that does not respect the rule (containing uppercase letters) will fail validation.

Please note that some rules may have aliases, so make sure to use the correct rule name when applying validation.

---

## `excludes` Rule

This rule verifies that the input does not contain any of the characters specified in the exclusion list. The excluded characters must be separated by commas.

### Usage

```html
<input data-qv-rules="excludes:-,@" />
```
If you want to exclude spaces, you should use the special character `&esp;` instead of the regular space character.

### Example

```html
<input data-qv-rules="excludes:-,@,&esp;" />
```

In this example, the `excludes` rule is applied to an input field. It verifies that the entered value does not contain the character `-` or `@` or a space. If the input contains any of these characters, the rule returns `false`, indicating validation failure.

---

## `stringBetween` Rule

This rule verifies that the length of a given string falls within the specified minimum and maximum values.

**Usage:**

Use the `stringBetween` rule when you want to ensure that the length of a string is within a specific range.

**Example:**

Suppose you have a form that requires a password field and you want to impose a minimum and maximum length for the password. You can apply the `stringBetween` rule to the password input field to validate it.

```html
<input data-qv-rules="stringBetween:8,20" />
```

This will ensure that the password entered in the field has a length between 8 and 20 characters (inclusive). If the length of the input is less than 8 or more than 20, the validation will fail.

In this example, the `stringBetween` rule is used to validate the password field in a form. The `data-qv-rules` attribute is set to `"stringBetween:8,20"` to apply the rule. Any input that violates the rule (a length outside the specified range) will fail validation.

--- 

You can repeat the above sections for each validation rule in your codebase, providing clear explanations and examples for each rule. Make sure to tailor the content to reflect the specific details of each rule and its usage.